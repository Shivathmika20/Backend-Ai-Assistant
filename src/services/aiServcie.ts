import Groq from "groq-sdk";
import {config} from "../config/var"

const groqClient=new Groq({apiKey:config.GROQ_API_KEY});

export const processText=async (transcript:string)=>{

    const chatCompletion = await groqClient.chat.completions.create({
        model:"llama-3.1-8b-instant",
        messages: [
            { role: "system", content: "You are a content assistant. Structure the following transcript into a clean document with a Title, Summary, Key Points, and Action Items." },
            { role: "user", content: transcript }
        ]
    })

    if(!chatCompletion.choices[0]?.message?.content){
        throw new Error("Structuring failed");
    }

    return chatCompletion.choices[0].message.content;
}