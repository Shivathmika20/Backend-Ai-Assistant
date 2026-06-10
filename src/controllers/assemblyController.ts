import { Request, Response } from "express";

export const transcribeHandler=async (req:Request,res:Response)=>{
    const {audioUrl}=req.body;

    if(!audioUrl)
    {
        return res.status(400).json({
            error:"provide Audio Url"
        })
    }

    //todo:call assembly api service
    return res.status(200).json({ transcript: "transcribed text here" });
    
}

