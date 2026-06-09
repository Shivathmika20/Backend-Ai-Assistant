import { Request, Response } from "express";
const uploadHandler=(req:Request,res:Response)=>{
    console.log(req.body);
}

export default uploadHandler;