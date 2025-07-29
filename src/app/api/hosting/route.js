import { callWhmcsApi } from "../lib/CallWHMCS";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); 

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
      plans = plans.filter(p => p.slug?.includes(type));
    }

    const resultData = plans.map(plan => ({
      id: plan.pid,
      name: plan.name,
      description: plan.description,
      slug: plan.slug,
      hosting_type: plan.type,
      url: plan.product_url,
      features: extractFeatures(plan.description),
    }));

    return Response.json({ success: true, data: resultData });

  } catch (err) {
    console.error('Error fetching WHMCS products:', err);
    return Response.json({ success: false, error: 'Could not load plans' }, { status: 500 });
  }
}

// Helper to extract features from HTML
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
