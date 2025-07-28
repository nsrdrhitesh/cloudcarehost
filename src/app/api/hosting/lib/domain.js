// lib/domain.js
export async function checkDomainAvailability(domain) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/domain/check?domain=${encodeURIComponent(domain)}`, {
    next: { revalidate: 0 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to check domain availability');
  }
  
  return res.json();
}