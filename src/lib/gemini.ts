import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const getGeminiModel = (model: string = "gemini-1.5-flash") => {
  return genAI.getGenerativeModel({ model });
};

export async function generateChatResponse(
  messages: { role: "user" | "model"; parts: { text: string }[] }[]
) {
  const model = getGeminiModel();
  
  const chat = model.startChat({
    history: messages.slice(0, -1),
    generationConfig: {
      temperature: 0.9,
      topP: 0.95,
      maxOutputTokens: 8192,
    },
    systemInstruction: `את ערדית – עוזרת אישית חכמה, חמה ומקצועית של MULTIBRAWN.
את עוזרת למצוא צימרים, וילות ומתחמי אירועים בישראל.
דברי בעברית טבעית, חמה, קצת הומוריסטית אבל מקצועית.
שאלי שאלות המשך כדי להבין בדיוק מה הלקוח מחפש.
כשיש לך מספיק מידע – סכמי והציעי לשלוח לוואטסאפ.`,
  });

  const lastMessage = messages[messages.length - 1].parts[0].text;
  const result = await chat.sendMessage(lastMessage);
  return result.response.text();
}
