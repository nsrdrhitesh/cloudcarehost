// src/app/api/hosting/route.js
import { query } from '../lib/db';
import { queries } from '../lib/queries';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    
    let plans;
    if (type) {
      // Filter by hosting type
      plans = await query(queries.getPlansByType, [type]);
    } else {
      // Get all plans
      plans = await query(queries.getAllPlans);
    }

    // Process the results
    const result = plans.map(plan => ({
      id: plan.id,
      name: plan.name,
      description: plan.description,
      popular: Boolean(plan.popular),
      cta: plan.cta,
      hosting_type: plan.hosting_type,
      hosting_description: plan.hosting_description,
      features: plan.features ? plan.features.split('|||') : []
    }));

    return Response.json({
      success: true,
      data: result
    });
    
  } catch (error) {
    console.error('Error fetching hosting plans:', error);
    return Response.json({
      success: false,
      error: 'Failed to fetch hosting plans'
    }, { status: 500 });
  }
}