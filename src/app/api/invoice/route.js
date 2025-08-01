import { callWhmcsApi } from "../lib/CallWHMCS"

export async function POST(request) {
  try {
    const body = await request.json()
    
    const apiConfig = {
      identifier: process.env.BILLING_API_ID,
      secret: process.env.BILLING_API_SECRET,
      responsetype: 'json',
      action: 'AddInvoicePayment',
      date: new Date().toISOString(),
      transid: [body.transid],
      gateway: [body.gateway],
      invoiceid: [body.invoiceid]
    }

    const result = await callWhmcsApi(apiConfig)
    
    if (result.result !== 'success') {
      return Response.json({ 
        success: false, 
        error: result.message || 'Order creation failed' 
      }, { status: 400 })
    }

    return Response.json({ 
      success: true, 
    }, { status: 200 })

  } catch (error) {
    console.error('Orders API error:', error)
    return Response.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}