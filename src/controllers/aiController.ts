import { Request, Response } from "express";

export const processHandler=async (req:Request,res:Response)=>{
    const {transcribedText,prompt}=req.body;

    if(!transcribedText){
        return res.status(400).json({
            error:"Text is needed"
        })
    }

    //todo call ai service to get structerd text
    return res.status(200).json({
        structure:"structured text here"
    })
}

