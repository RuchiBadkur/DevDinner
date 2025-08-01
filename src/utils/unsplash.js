// src/utils/unsplash.js

export async function fetchDishImage(dish, keyword = '') {
  try {
    const res = await fetch("/.netlify/functions/unsplash", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dish, keyword }),
    });

    const data = await res.json();
    return data?.imageUrl || '/fallback-image.jpg';
  } catch (error) {
    console.error(`❌ Failed to fetch image for ${dish} ${keyword}:`, error.message);
    return '/fallback-image.jpg';
  }
}
