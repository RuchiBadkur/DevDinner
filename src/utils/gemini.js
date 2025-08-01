// ✅ FILE: src/utils/gemini.js
export async function generateDishContent(prompt) {
  const res = await fetch("/.netlify/functions/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const { raw } = await res.json();
  // console.log("🔍 Gemini raw response:", raw);

  try {
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No valid JSON block found in Gemini response.");
    }
    const jsonString = jsonMatch[0];
    const parsed = JSON.parse(jsonString);

    return parsed;
  } catch (e) {
    console.error("❌ Failed to parse Gemini response:", e.message);
    console.error("⛔ Raw JSON String:", raw);
    throw new Error("Failed to parse Gemini response");
  }
}
