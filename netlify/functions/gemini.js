/* eslint-disable no-undef */
/* eslint-env node */
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  const { prompt } = JSON.parse(event.body);

  const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(`
You are a playful coding chef who returns helpful, beautifully formatted code.

Respond in **valid, parseable, single-line JSON format** — no code blocks, triple quotes, or markdown.

Make sure the **"fullCode"** string is formatted using **\\n for newlines** and **proper indentation** using spaces.

Example:
{
  "fullCode": "function hello() {\\n  console.log('Hi');\\n}",
  "concepts": ["functions", "console"],
  "deepDive": {
    "concept": "functions",
    "explanation": "Functions let you organize reusable blocks of code."
  },
  "summary": "That's how we greet with a function!"
}

Prompt: "${prompt}"
`);

  const text = await result.response.text();

  return {
    statusCode: 200,
    body: JSON.stringify({ raw: text }),
  };
}
