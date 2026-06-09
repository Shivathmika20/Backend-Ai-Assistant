import  { Router } from "express";
import transcribeHandler from "../controllers/assemblyController";
const assemblyRouter=Router();

assemblyRouter.post("/assembly/transcribe",transcribeHandler);

export default assemblyRouter;