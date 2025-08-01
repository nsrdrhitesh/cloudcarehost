import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Fallback domain generator
function generateFallbackDomains(baseDomain, count = 5) {
  const cleanBase = baseDomain.replace(/\.[a-z]{2,}$/i, '');
  const tlds = ['.io', '.app', '.dev', '.ai', '.tech', '.co', '.site', '.online'];
  
  return Array.from({ length: count }, (_, i) => {
    const variation = i < 3 
      ? cleanBase 
      : `${cleanBase}${Math.floor(Math.random() * 100)}`;
    const tld = tlds[Math.floor(Math.random() * tlds.length)];
    return `${variation}${tld}`;
  });
}

export async function POST(req) {
  try {
    const { baseDomain, count = 5 } = await req.json();
    const cleanBaseDomain = baseDomain.replace(/\.[a-z]{2,}$/i, '');

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Generate creative domain name variations. Return only names without TLDs.`
          },
          {
            role: "user",
            content: `Generate ${count} variations similar to "${cleanBaseDomain}".`
          }
        ],
        temperature: 0.7,
        max_tokens: 60
      });

      const suggestions = response.choices[0]?.message?.content
        .split('\n')
        .map(line => line.trim().replace(/^\d+\.\s*/, '').replace(/-/g, ''))
        .filter(name => name.length > 0);

      return Response.json({ suggestions, source: 'ai' });
    } catch (aiError) {
      // Fallback to non-AI generation if API fails
      const fallbackSuggestions = generateFallbackDomains(baseDomain, count);
      return Response.json({ 
        suggestions: fallbackSuggestions,
        source: 'fallback',
        warning: 'Using fallback suggestions due to API limits'
      });
    }

  } catch (error) {
    console.error('Domain suggestion error:', error);
    return Response.json(
      { error: 'Failed to generate suggestions' },
      { status: 500 }
    );
  }
}