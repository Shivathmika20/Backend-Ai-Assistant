import {config} from "../config/var"
import { AssemblyAI } from "assemblyai";

const client=new AssemblyAI({apiKey:config.ASSEMBLYAI_API_KEY});

export const transcribeAudio=async(audioUrl:string)=>{
    const transcript=await client.transcripts.transcribe({
        audio:audioUrl,
    });

    if(transcript.status==="error"){
        throw new Error(`Transcription failed: ${transcript.error}`);
    }


    console.log("Transcription completed")
    return transcript.text;
}
