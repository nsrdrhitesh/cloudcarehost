import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1DP5mmOlF5G5ag',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '4q1WjRibnE9YbBZ0hqV5Y9y8'
})

export async function POST(request) {
  console.log('Razorpay API route hit') // Debug log
  
  try {
    const body = await request.json()
    console.log('Request body:', body) // Debug log

    // Validate required fields
    if (!body.amount || !body.currency || !body.receipt) {
      console.error('Missing required fields')
      return Response.json({
        success: false,
        error: 'Missing required fields (amount, currency, receipt)'
      }, { status: 400 })
    }

    // Convert amount to paise (smallest currency unit)
    const amountInPaise = Math.round(Number(body.amount) * 100)
    
    // Validate amount is positive
    if (amountInPaise <= 0) {
      console.error('Invalid amount')
      return Response.json({
        success: false,
        error: 'Amount must be greater than 0'
      }, { status: 400 })
    }

    // Create Razorpay order
    const options = {
      amount: amountInPaise,
      currency: body.currency,
      receipt: body.receipt,
      payment_capture: 1
    }

    console.log('Creating Razorpay order with options:', options) // Debug log
    
    const order = await razorpay.orders.create(options)
    console.log('Order created:', order) // Debug log

    return Response.json({
      success: true,
      order
    })

  } catch (error) {
    console.error('Full error:', error) // Detailed error log
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      error: error.error
    })
    
    return Response.json({
      success: false,
      error: error.message || 'Failed to create order',
      details: error.error || null
    }, { status: 500 })
  }
}