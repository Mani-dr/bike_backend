import express from "express";
import { addBook,getBook,deleteBook,putBook } from "../controller/booking.js";
const router=express.Router();
router.post("/postbook",addBook);
router.get("/getbook",getBook);
router.put("/putbook/:id",putBook)
router.delete("/deletebook/:id",deleteBook);
export default router