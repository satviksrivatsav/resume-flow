import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

// Access your API key as an environment variable
const genAI = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "Write a professional summary for a software engineer with 10 years of experience."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();