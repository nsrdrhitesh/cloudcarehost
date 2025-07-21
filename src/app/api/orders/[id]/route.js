import { query } from '../../hosting/lib/db';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { payment_status, payment_id, payment_response } = await request.json();

    if (!payment_status) {
      return Response.json({
        success: false,
        error: 'Missing payment status'
      }, { status: 400 });
    }

    // Update order status
    const result = await query(
      `UPDATE h_orders 
       SET payment_status = ?, 
           payment_id = ?, 
           payment_response = ?,
           updated_at = CURRENT_TIMESTAMP
       WHERE order_id = ?`,
      [
        payment_status,
        payment_id,
        JSON.stringify(payment_response),
        id
      ]
    );

    if (result.affectedRows === 0) {
      return Response.json({
        success: false,
        error: 'Order not found'
      }, { status: 404 });
    }

    return Response.json({
      success: true,
      message: 'Order status updated'
    });

  } catch (error) {
    console.error('Error updating order status:', error);
    return Response.json({
      success: false,
      error: error.message || 'Failed to update order status'
    }, { status: 500 });
  }
}