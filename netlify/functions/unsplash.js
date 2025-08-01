/* eslint-disable no-undef */
// netlify/functions/unsplash.js
/* eslint-env node */

export async function handler(event) {
  const { query } = event.queryStringParameters;

  const UNSPLASH_ACCESS_KEY = process.env.VITE_UNSPLASH_ACCESS_KEY;

  const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
