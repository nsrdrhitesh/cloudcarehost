export async function callWhmcsApi(apiConfig) {
  const bodyParams = new URLSearchParams(apiConfig);

  const apiResponse = await fetch('https://clients.cloudcarehost.com/includes/api.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: bodyParams.toString()
  });

  if (!apiResponse.ok) {
    throw new Error(`WHMCS API failed: ${apiResponse.status}`);
  }

  const json = await apiResponse.json();

  if (json.result !== 'success') {
    throw new Error(`WHMCS responded with error: ${json.result}`);
  }

  return json;
}
