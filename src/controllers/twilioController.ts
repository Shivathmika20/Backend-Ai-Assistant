import { Request, Response } from "express";
import {sendSMS} from "../services/twilioService";
import { transcribeAudio } from "../services/assemblyService";
import { saveToDoc } from "../services/gdriveService";
import { processText } from "../services/aiServcie";

export const callbackHandler= async (req:Request,res:Response)=>{ 
    
    try{
        const {RecordingUrl,From}=req.body

        if(!RecordingUrl || !From){
         return res.status(400).json({
             error:" Audio URl and Calling number is required"
         })
        }
     
        const title = `Voice Note - ${new Date().toLocaleDateString('en-IN', { 
         day: '2-digit', month: 'short', year: 'numeric' 
         })}`;
        
        const transcript=await transcribeAudio(RecordingUrl);
        const structuredContent = await processText(transcript!);
        const docLink = await saveToDoc(title, structuredContent!);
        await sendSMS(docLink);
     
        return res.status(200).json({
         message: "Note saved successfully!" 
        })
    }
    catch(e:any){
        console.log(e.message)
    }
    
}

//handling initail call
export const callAnswer=(req:Request,res:Response)=>{
    res.type('text/xml');
    res.send(`
        <Response>
            <Say>Hello! Please leave your note after the beep.</Say>
            <Record maxLength="120" action="/api/twilio/callback" />
        </Response>
    `);
}



