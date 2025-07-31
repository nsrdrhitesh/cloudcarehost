import { callWhmcsApi } from "../lib/CallWHMCS"
import { byCountry } from 'country-code-lookup'

export async function POST(request) {
  try {
    const body = await request.json()
    
    let countryCode = body.country
    const countryInfo = byCountry(body.country)
    if (countryInfo) {
      countryCode = countryInfo.iso2
    }

    const apiConfig = {
      identifier: process.env.CLIENT_API_ID,
      secret: process.env.CLIENT_API_SECRET,
      responsetype: 'json',
      action: 'AddClient',
      firstname: body.firstName,
      lastname: body.lastName,
      email: body.email,
      address1: body.street,
      city: body.city,
      state: body.state,
      postcode: body.postcode,
      country: countryCode,
      phonenumber: body.phone,
      password2: body.password
    }

    const result = await callWhmcsApi(apiConfig)
    
    if (result.result !== 'success') {
      return Response.json({ 
        success: false, 
        error: result.message || 'Client creation failed' 
      }, { status: 400 })
    }

    return Response.json({ 
      success: true, 
      data: {
        clientid: result.clientid
      }
    }, { status: 200 })

  } catch (error) {
    console.error('Client API error:', error)
    return Response.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}