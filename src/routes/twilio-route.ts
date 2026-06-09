import  { Router } from "express";
import {callbackHandler,notifyHandler} from "../controllers/twilioController";
const twilioRouter=Router();

twilioRouter.post("/twilio/callback",callbackHandler);
twilioRouter.post("/twilio/notify",notifyHandler);


export default twilioRouter;