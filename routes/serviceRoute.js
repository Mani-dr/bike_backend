import express from "express";
import { addService,getService } from "../controller/servicecontrol.js";
const router=express.Router();
router.post("/post",addService);
router.get("/getservice",getService);
export default router