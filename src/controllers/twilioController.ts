import { Request, Response } from "express";
const callbackHandler=(req:Request,res:Response)=>{
    console.log(req.body);
}

const notifyHandler=(req:Request,res:Response)=>{
    console.log(req.body);
}

export {callbackHandler,notifyHandler};