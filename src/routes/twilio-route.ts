import  { Router } from "express";
import {callAnswer, callbackHandler} from "../controllers/twilioController";
const twilioRouter=Router();

twilioRouter.post("/twilio/callback",callbackHandler);
twilioRouter.post("/twilio/answer",callAnswer);


export default twilioRouter;