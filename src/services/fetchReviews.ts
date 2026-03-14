import { GoogleGenAI } from "@google/genai";

async function getReviews() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Find the top 10 customer reviews for 'Anápolis Fretes' in Anápolis, Brazil. For each review, provide the reviewer name, rating (out of 5), and the review text in Portuguese. Return the data as a JSON array of objects.",
    config: {
      tools: [{ googleMaps: {} }],
      // Note: I can't use responseMimeType: "application/json" with googleMaps tool as per guidelines.
    },
  });

  return response.text;
}

// I'll run this logic conceptually or use it to inform my next steps.
