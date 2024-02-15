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
        const {prompt, amount = 1, reslution = "512x512"} = body;

        if(!userId){
            return new NextResponse("Unauthorized", {status:401})
        }

        if(!openai.apiKey){
            return new NextResponse("Open AI API key not configured", {status: 500});
        }

        if(!prompt){
            return new NextResponse("Prompt is required", {status: 400});
        }

        if(!amount){
            return new NextResponse("Amount is required", {status: 400});
        }

        if(!reslution){
            return new NextResponse("Resolution is required", {status: 400});
        }

        const response = await openai.images.generate({
            prompt,
            n: parseInt(amount, 10),
            size: reslution,
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[IMAGE_ERROR", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}