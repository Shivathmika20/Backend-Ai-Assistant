import { Request, Response } from "express";

export const uploadHandler=async (req:Request,res:Response)=>{
    const {structuredContent,docTitle}=req.body;

    if(!structuredContent){
        return res.status(400).json({
            error:"missing the content"
        })
    }
    //todo call gdrive service;

    return res.status(200).json({
        message:"content saved to drive ",
        docLink: "link here"
    })
}

