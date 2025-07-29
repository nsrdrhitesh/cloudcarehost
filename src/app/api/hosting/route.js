import { callWhmcsApi } from "../lib/CallWHMCS";
const HOSTING_TYPE_MAP = {
  1: "shared",
  2: "WordPress",
  3: "VPS",
  4: "Dedicated",
  5: "Reseller"
};
async function getCurrencies() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/currencies`);
    const data = await response.json();
    if (data.success) {
      return data.data.reduce((acc, currency) => {
        acc[currency.code] = {
          name: currency.name,
          symbol: currency.symbol
        };
        return acc;
      }, {});
    }
    return {};
  } catch (error) {
    console.error('Failed to fetch currencies:', error);
    return {};
  }
}

function extractDescription(html) {
  try {
    // First try to get text between <div> tags
    const divMatch = html.match(/<div[^>]*>([\s\S]*?)<\/div>/i);
    if (divMatch) {
      const text = divMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (text) return text;
    }
    
    // Fallback to first sentence if available
    const firstSentence = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split('.')[0];
    return firstSentence || "Premium hosting solution";
  } catch {
    return "Premium hosting solution";
  }
}

function isPopularPlan(plan) {
  return plan.name.toLowerCase().includes('business') || 
         plan.name.toLowerCase().includes('pro');
}

function extractFeatures(html) {
  try {
    const listMatch = html.match(/<ul>(.*?)<\/ul>/s);
    if (!listMatch) return [];
    const items = [...listMatch[1].matchAll(/<li>(.*?)<\/li>/g)];
    return items.map(i => i[1].replace(/<[^>]+>/g, '').trim());
  } catch {
    return [];
  }
}

// Helper to format pricing information
function formatPricing(pricing, currencyCode) {
  if (!pricing || !currencyCode) return null;
  
  const currencyInfo = {
    code: currencyCode,
    symbol: pricing.prefix || '$',
    name: currencyCode // Default, can be enhanced with currency API
  };

  const formatPrice = (price) => {
    return `${currencyInfo.symbol}${price}`;
  };

  // Calculate discount prices (adjust logic as needed)
  const monthlyPrice = pricing.monthly;
  const annualPrice = pricing.annually;
  const biennialPrice = pricing.biennially;

  const annualDiscountPrice = (parseFloat(annualPrice) / 12 < parseFloat(monthlyPrice)) 
    ? (parseFloat(annualPrice) / 12).toFixed(2)
    : monthlyPrice;
  
  const biennialDiscountPrice = (parseFloat(biennialPrice) / 24 < parseFloat(monthlyPrice))
    ? (parseFloat(biennialPrice) / 24).toFixed(2)
    : monthlyPrice;

  return {
    currency: {
      code: currencyCode,
      name: currencyInfo.name,
      symbol: currencyInfo.symbol
    },
    monthly: {
      price: formatPrice(monthlyPrice),
      discount_price: formatPrice(monthlyPrice),
      discount_percent: "0%"
    },
    yearly: {
      price: formatPrice(annualPrice),
      discount_price: formatPrice((annualDiscountPrice * 12).toFixed(2)),
      discount_percent: "60%"
    },
    biennially: {
      price: formatPrice(biennialPrice),
      discount_price: formatPrice((biennialDiscountPrice * 24).toFixed(2)),
      discount_percent: "70%"
    }
  };
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); 

    const currencies = await getCurrencies();

    const apiConfig = {
      identifier: process.env.PRODUCT_API_ID,
      secret: process.env.PRODUCT_API_SECRET,
      responsetype: 'json',
      action: 'GetProducts'
    };

    const {result , products} = await callWhmcsApi(apiConfig);
    
    if (result !== 'success') {
      throw new Error('Failed to fetch from WHMCS');
    }

    let plans = products.product;

    // Optional filter by type or slug
    if (type) {
      plans = plans.filter(p => p.slug?.includes(type) || 
                      p.type?.includes(type) || 
                      HOSTING_TYPE_MAP[p.gid]?.toLowerCase().includes(type.toLowerCase()));
    }

    // Transform plans to match UI expectations
    const resultData = plans.map(plan => {
      const hostingType = HOSTING_TYPE_MAP[plan.gid] || "Web Hosting";
      
      // Get pricing for all available currencies
      const pricing = plan.pricing ? 
        Object.entries(plan.pricing).map(([currencyCode, pricingDetails]) => 
          formatPricing(pricingDetails, currencyCode)
        ) : [];

      return {
        id: plan.pid,
        name: plan.name.replace(/^(Shared|WP|VPS|Dedicated|Reseller)\s*/i, ''),
        description: extractDescription(plan.description),
        popular: isPopularPlan(plan),
        cta: "Get Started",
        hosting_type: hostingType,
        hosting_description: extractDescription(plan.description),
        features: extractFeatures(plan.description),
        pricing: pricing.filter(Boolean),
        slug: plan.slug,
        url: plan.product_url
      };
    });

    return Response.json({ success: true, data: resultData });

  } catch (err) {
    console.error('Error fetching WHMCS products:', err);
    return Response.json({ 
      success: false, 
      error: 'Could not load plans',
      details: err.message 
    }, { status: 500 });
  }
}
