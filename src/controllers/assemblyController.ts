import { Request, Response } from "express";
const transcribeHandler=(req:Request,res:Response)=>{
    console.log(req.body);
}

export default transcribeHandler;