// src/utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const GeminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateDishContent(prompt) {
  const result = await GeminiModel.generateContent(
    `You are a playful coding chef. Respond in JSON.

Prompt: "${prompt}"

Respond in this structure:

{
  "fullCode": "full code here",
  "concepts": ["concept1", "concept2", "concept3"],
  "deepDive": {
    "concept": "concept name",
    "explanation": "detailed explanation"
  },
  "summary": "final thoughts or summary"
}`
  );

  const response = await result.response;
  const text = await response.text();
  try {
    const cleaned = text.trim().match(/\{[\s\S]*\}/)?.[0];
    return JSON.parse(cleaned);
  } catch (e) {
    console.error("Gemini response:", text);
    throw new Error("Failed to parse Gemini response");
  }
}
