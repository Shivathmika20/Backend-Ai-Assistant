import  { Router } from "express";
import {uploadHandler} from "../controllers/gdriveController";
const gdriveRouter=Router();

gdriveRouter.post("/gdrive/upload",uploadHandler);

export default gdriveRouter;