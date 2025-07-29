import { callWhmcsApi } from "../../lib/CallWHMCS";

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

function extractFromHtml(html, pattern) {
  try {
    const match = html.match(pattern);
    return match ? match[1].replace(/<[^>]+>/g, '').trim() : '';
  } catch {
    return '';
  }
}

export async function GET(_, context) {
  try {
    const params = await context.params;
    const pid = params.id;

    // Fetch currencies first
    const currencies = await getCurrencies();
    console.log('Currencies:', currencies);
    const apiConfig = {
      identifier: process.env.PRODUCT_API_ID,
      secret: process.env.PRODUCT_API_SECRET,
      responsetype: 'json',
      action: 'GetProducts',
      pid: pid
    };

    const { products } = await callWhmcsApi(apiConfig);

    const plan = products.product?.find(p => p.pid == pid);
    if (!plan) {
      return Response.json({ success: false, error: 'Plan not found' }, { status: 404 });
    }

    // Extract description and hosting description
    const description = extractFromHtml(plan.description, /<div[^>]*>([\s\S]*?)<\/div>/i) || 
                      "Perfect for small personal websites and blogs";
    
    // Format pricing according to UI expectations
    const pricing = Object.entries(plan.pricing || {}).map(([currencyCode, details]) => {
      console.log(`Processing currency: ${currencyCode}`);
      const currencyInfo = currencies[currencyCode] || { 
        name: currencyCode, 
        symbol: currencyCode 
      };
      console.log(currencies[currencyCode]);
      // Helper function to format price with currency
      const formatPrice = (price) => {
        // Special case for USD to add space between symbol and amount
        if (currencyCode === 'USD') {
          return `${currencyInfo.symbol}${price}`;
        }
        return `${currencyInfo.symbol}${price}`;
      };

      // Calculate discount prices (example values - adjust as needed)
      const monthlyPrice = details.monthly;
      const annualPrice = details.annually;
      const biennialPrice = details.biennially;
      
      // Calculate discount prices (60% off for yearly, 70% off for biennially)
      // Note: These are example calculations - adjust based on your actual discount logic
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
    });

    return Response.json({
      success: true,
      data: {
        id: plan.pid,
        name: plan.name,
        description: description,
        popular: false,
        cta: "Get Started",
        hosting_type: "Shared Hosting",
        hosting_description: description, // Using the same description for hosting
        features: extractFeatures(plan.description),
        pricing
      }
    });

  } catch (err) {
    console.error(err);
    return Response.json({ success: false, error: 'Error retrieving plan details' }, { status: 500 });
  }
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