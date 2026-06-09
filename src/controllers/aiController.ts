import { Request, Response } from "express";
const processHandler=(req:Request,res:Response)=>{
    console.log(req.body);
}

export default processHandler;