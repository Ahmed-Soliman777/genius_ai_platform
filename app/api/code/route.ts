import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai"
import { CreateChatCompletionRequestMessage } from "openai/resources/chat/completions";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const instructionMessage: CreateChatCompletionRequestMessage ={
    role: "assistant",
    content: "You are a code generator. You must answer only in markdown code snippts. Use code comments for explaination.",
}

export async function POST(
    req: Request
){
    try {
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if(!userId){
            return new NextResponse("Unauthorized", {status:401})
        }

        if(!openai.apiKey){
            return new NextResponse("Open AI API key not configured", {status: 500});
        }

        if(!messages){
            return new NextResponse("Messages are required", {status: 400});
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        });

        return NextResponse.json(response.choices[0].message);
    } catch (error) {
        console.log("[CODE_ERROR", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}