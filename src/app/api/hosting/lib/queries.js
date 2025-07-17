// src/app/api/hosting/lib/queries.js
export const queries = {
  getAllPlans: `
    SELECT 
      hp.id, hp.name, hp.description, hp.popular, hp.cta,
      ht.title AS hosting_type, ht.description AS hosting_description,
      GROUP_CONCAT(hpf.feature SEPARATOR '|||') AS features
    FROM h_plans hp
    JOIN h_hosting_types ht ON hp.hosting_type_id = ht.id
    LEFT JOIN h_plan_features hpf ON hp.id = hpf.plan_id
    GROUP BY hp.id
    ORDER BY ht.title, hp.id
  `,
  
  getPlansByType: `
    SELECT 
      hp.id, hp.name, hp.description, hp.popular, hp.cta,
      ht.title AS hosting_type, ht.description AS hosting_description,
      GROUP_CONCAT(hpf.feature SEPARATOR '|||') AS features
    FROM h_plans hp
    JOIN h_hosting_types ht ON hp.hosting_type_id = ht.id
    LEFT JOIN h_plan_features hpf ON hp.id = hpf.plan_id
    WHERE ht.title = ?
    GROUP BY hp.id
    ORDER BY hp.id
  `,
  
  getPlanById: `
    SELECT 
      hp.id, hp.name, hp.description, hp.popular, hp.cta,
      ht.title AS hosting_type, ht.description AS hosting_description,
      GROUP_CONCAT(hpf.feature SEPARATOR '|||') AS features
    FROM h_plans hp
    JOIN h_hosting_types ht ON hp.hosting_type_id = ht.id
    LEFT JOIN h_plan_features hpf ON hp.id = hpf.plan_id
    WHERE hp.id = ?
    GROUP BY hp.id
  `,
  
  getPricingByPlanId: `
    SELECT 
      hp.monthly_price, hp.monthly_discount_price, hp.monthly_discount_percent,
      hp.yearly_price, hp.yearly_discount_price, hp.yearly_discount_percent,
      hp.biennially_price, hp.biennially_discount_price, hp.biennially_discount_percent,
      hc.code AS currency_code, hc.name AS currency_name, hc.symbol AS currency_symbol
    FROM h_pricing hp
    JOIN h_currencies hc ON hp.currency_id = hc.id
    WHERE hp.plan_id = ?
    ORDER BY hc.code
  `,

  getAllCurrencies: `
    SELECT id, code, name, symbol 
    FROM h_currencies
    ORDER BY code
  `
};