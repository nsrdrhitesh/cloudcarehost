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

    if (apiResult.result !== 'success') {
      throw new Error(`WHMCS API returned error: ${apiResult.result}`);
    }

    // Transform the WHMCS response into desired UI format
    const transformedCurrencies = apiResult.currencies.currency.map(c => ({
      id: c.id,
      code: c.code,
      name: getCurrencyName(c.code), // Helper to map full currency names
      symbol: c.prefix || c.suffix || '',
    }));

    return Response.json({
      success: true,
      data: transformedCurrencies,
    });

  } catch (error) {
    console.error('Error fetching currencies:', error);
    return Response.json({
      success: false,
      error: 'Failed to fetch currencies'
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
    // Add more as needed
  };
  return map[code] || code;
}
