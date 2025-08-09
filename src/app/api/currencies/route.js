import { callWhmcsApi } from "../lib/CallWHMCS";

export async function GET() {
  try {
    const apiConfig = {
      identifier: process.env.SYSTEM_API_ID,
      secret: process.env.SYSTEM_API_SECRET,
      responsetype: 'json',
      action: 'GetCurrencies',
    };

    const apiResult = await callWhmcsApi(apiConfig);

    console.log('Fetched currencies from WHMCS:', apiResult.currencies);

    // Transform the WHMCS response into desired UI format
    const transformedCurrencies = apiResult.currencies.currency.map(c => ({
      id: c.id,
      code: c.code,
      name: getCurrencyName(c.code),
      symbol: c.prefix || c.suffix || '',
    }));

    return Response.json({
      success: true,
      data: transformedCurrencies,
    });

  } catch (error) {
    console.error('Error fetching currencies:', error);

    // If the error came from WHMCS and contains a response string, send that back
    return Response.json({
      success: false,
      error: error.message || error.toString()
    }, { status: 500 });
  }
}

function getCurrencyName(code) {
  const map = {
    USD: 'US Dollar',
    INR: 'Indian Rupee',
    EUR: 'Euro',
    AED: 'UAE Dirham',
    AUD: 'Australian Dollar'
  };
  return map[code] || code;
}
