import  { Router } from "express";
import processHandler from "../controllers/aiController";
const aiProcessRouter=Router();

aiProcessRouter.post("/ai/process",processHandler);

export default aiProcessRouter;