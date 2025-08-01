import { callWhmcsApi } from "../../lib/CallWHMCS";

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

export async function Get(request) {
  try{
      const body = await request.json();

      const apiConfig = {
        identifier: process.env.ORDER_API_ID,
        secret: process.env.ORDER_API_SECRET,
        responsetype: 'json',
        action: 'GetOrders',
        id: body.orderId
      };

      const result = await callWhmcsApi(apiConfig);
      if (result.result !== 'success') {
        return Response.json({
          success: false,
          error: result.message || 'Failed to retrieve order'
        }, { status: 400 });
      }
      return Response.json({
        success: true,
        data: result.orders || []
      }, { status: 200 });
  }catch (error) {
    console.error('Error while getting Order:', error);
    return Response.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}