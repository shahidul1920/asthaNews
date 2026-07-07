// lib/api.js

export async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    // 'no-store' ensures you see live updates while developing locally
    cache: 'no-store',
  });

  const json = await res.json();
  
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  
  return json.data;
}