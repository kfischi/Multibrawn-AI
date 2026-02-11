import { NextRequest, NextResponse } from "next/server";
import { generateChatResponse } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Missing or invalid messages" }, { status: 400 });
    }

    const responseText = await generateChatResponse(messages);

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
