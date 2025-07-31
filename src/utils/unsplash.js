const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function fetchDishImage(dish, keyword = '') {
  try {
    const query = `${dish} ${keyword}`.trim();
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_ACCESS_KEY}&orientation=squarish`
    );

    if (!response.ok) {
      // Handle specific rate limit errors or forbidden responses
      if (response.status === 403 || response.status === 429) {
        throw new Error('Rate limit exceeded or access forbidden');
      }
      throw new Error('Failed to fetch image');
    }

    const data = await response.json();
    return data?.urls?.regular || '/fallback-image.jpg';
  } catch (error) {
    console.error(`❌ Failed to fetch image for ${dish} ${keyword}:`, error.message);
    return '/fallback-image.jpg'; // Make sure to add this fallback image in your public folder
  }
}
