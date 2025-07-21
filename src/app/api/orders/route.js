import { query } from '../hosting/lib/db';
import { queries } from '../hosting/lib/queries';

export async function POST(request) {
  try {
    const orderData = await request.json();

    // Validate required fields
    if (!orderData.plan_id || !orderData.domain_name || !orderData.amount) {
      return Response.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 });
    }

    // Generate a unique order ID
    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Insert order into database
    const result = await query(
      `INSERT INTO h_orders (
        order_id, plan_id, domain_name, domain_type, billing_cycle, 
        server_location, amount, currency, payment_method, payment_status,
        first_name, last_name, email, phone, street, city, state, 
        country, postcode, account_password
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        orderId,
        orderData.plan_id,
        orderData.domain_name,
        orderData.domain_type,
        orderData.billing_cycle,
        orderData.server_location,
        orderData.amount,
        orderData.currency,
        orderData.payment_method,
        'pending', // Initial status
        orderData.first_name,
        orderData.last_name,
        orderData.email,
        orderData.phone,
        orderData.street,
        orderData.city,
        orderData.state,
        orderData.country,
        orderData.postcode,
        orderData.account_password
      ]
    );

    if (!result.insertId) {
      throw new Error('Failed to create order');
    }

    // Return the order ID for reference
    return Response.json({
      success: true,
      order_id: orderId,
      db_id: result.insertId
    });

  } catch (error) {
    console.error('Error creating order:', error);
    return Response.json({
      success: false,
      error: error.message || 'Failed to create order'
    }, { status: 500 });
  }
}