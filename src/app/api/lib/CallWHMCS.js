export async function callWhmcsApi(apiConfig) {
  const bodyParams = new URLSearchParams(apiConfig);

  const apiResponse = await fetch(
    'https://clients.cloudcarehost.com/includes/api.php',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: bodyParams.toString(),
    }
  );

  if (!apiResponse.ok) {
    const text = await apiResponse.text();
    throw new Error(`WHMCS API failed with status ${apiResponse.status}: ${text}`);
  }

  let json;
  try {
    json = await apiResponse.json();
  } catch (err) {
    throw new Error(`Failed to parse WHMCS response as JSON: ${err.message}`);
  }

  if (json.result !== 'success') {
    throw new Error(`WHMCS responded with error: ${json.result}`);
  }

  return json;
}