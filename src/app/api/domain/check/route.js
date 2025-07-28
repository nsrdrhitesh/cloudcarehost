import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get('domain');

  if (!domain) {
    return NextResponse.json(
      { success: false, error: 'Domain parameter is required' },
      { status: 400 }
    );
  }

  try {
    // Configuration for third-party API
    const apiConfig = {
      identifier: process.env.DOMAIN_API_ID,
      secret: process.env.DOMAIN_API_SECRET,
      responsetype: 'json',
      action: 'DomainWhois'
    };

    // Format domain - add .com if no extension
    let formattedDomain = domain.trim().toLowerCase();
    if (!formattedDomain.includes('.')) {
      formattedDomain += '.com';
    }

    // Prepare x-www-form-urlencoded body
    const bodyParams = new URLSearchParams({
      ...apiConfig,
      domain: formattedDomain
    });

    // Call third-party API with POST and correct headers
    const apiResponse = await fetch('https://clients.cloudcarehost.com/includes/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: bodyParams.toString()
    });

    if (!apiResponse.ok) {
      throw new Error(`API request failed with status ${apiResponse.status}`);
    }

    const data = await apiResponse.json();

    return NextResponse.json({
      success: true,
      data
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
