import { callWhmcsApi } from "../lib/CallWHMCS"

export async function POST(request) {
  try {
    const body = await request.json()
    
    const apiConfig = {
      identifier: process.env.ORDER_API_ID,
      secret: process.env.ORDER_API_SECRET,
      responsetype: 'json',
      action: 'AddOrder',
      clientid: body.clientId,
      pid: [body.pid],
      domain: [body.domain],
      billingcycle: [body.billingcycle],
      paymentmethod: "razorpay"
    }

    // Add domain registration if needed
    if (body.domainType === 'register') {
      apiConfig.domaintype = ['register']
      apiConfig.regperiod = [body.regPeriod || 1]
    }

    console.log('API Config:', apiConfig)
    const result = await callWhmcsApi(apiConfig)
    
    console.log('API Result:', result)
    if (result.result !== 'success') {
      return Response.json({ 
        success: false, 
        error: result.message || 'Order creation failed' 
      }, { status: 400 })
    }

    return Response.json({ 
      success: true, 
      data: {
        orderid: result.orderid,
        serviceids: result.serviceids,
        domainids: result.domainids,
        invoiceid: result.invoiceid
      }
    }, { status: 200 })

  } catch (error) {
    console.error('Orders API error:', error)
    return Response.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

export function GET() {
  return new Response('Method Not Allowed', { status: 405 });
}