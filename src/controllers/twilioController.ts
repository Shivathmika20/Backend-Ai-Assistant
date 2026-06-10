import { Request, Response } from "express";


export const callbackHandler= async (req:Request,res:Response)=>{
    const {RecordingUrl,From}=req.body

   if(!RecordingUrl || !From){
    return res.status(400).json({
        error:" Audio URl and Calling number is required"
    })
   }

   //TODO: Pass the Audio URL to the Assembly API
   console.log(RecordingUrl);
   console.log(From);

   return res.status(200).json({
    message:"Audio URL received"
   })
}

export const notifyHandler=async(req:Request,res:Response)=>{
    const {docLink} = req.body;
    if(!docLink){
        return res.status(400).json({
            error:"Document Link is missing"
        })
    }
     // TODO: send SMS via twilioService
     return res.status(200).json({
        message:"SMS sent successfully"
     })
}

