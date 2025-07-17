// src/app/api/hosting/[id]/route.js
import { query } from '../lib/db';
import { queries } from '../lib/queries';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Get plan details
    const [plan] = await query(queries.getPlanById, [id]);
    
    if (!plan) {
      return Response.json({
        success: false,
        error: 'Plan not found'
      }, { status: 404 });
    }

    // Get pricing details
    const pricing = await query(queries.getPricingByPlanId, [id]);

    // Process the results
    const result = {
      id: plan.id,
      name: plan.name,
      description: plan.description,
      popular: Boolean(plan.popular),
      cta: plan.cta,
      hosting_type: plan.hosting_type,
      hosting_description: plan.hosting_description,
      features: plan.features ? plan.features.split('|||') : [],
      pricing: pricing.map(p => ({
        currency: {
          code: p.currency_code,
          name: p.currency_name,
          symbol: p.currency_symbol
        },
        monthly: {
          price: p.monthly_price,
          discount_price: p.monthly_discount_price,
          discount_percent: p.monthly_discount_percent
        },
        yearly: {
          price: p.yearly_price,
          discount_price: p.yearly_discount_price,
          discount_percent: p.yearly_discount_percent
        },
        biennially: {
          price: p.biennially_price,
          discount_price: p.biennially_discount_price,
          discount_percent: p.biennially_discount_percent
        }
      }))
    };

    return Response.json({
      success: true,
      data: result
    });
    
  } catch (error) {
    console.error(`Error fetching plan details for ID ${id}:`, error);
    return Response.json({
      success: false,
      error: 'Failed to fetch plan details'
    }, { status: 500 });
  }
}