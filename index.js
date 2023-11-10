import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js"
import serviceRoute from "./routes/serviceRoute.js"
import bookRoute from "./routes/bookRoute.js"
import {email_post} from "./routes/mailRoute.js"
import { reply_email_post } from "./routes/replymail.js";
dotenv.config();
const app=express()
mongoose.set('strictQuery',false);
const connect=async()=>{
        try{
            await mongoose.connect(process.env.MONGO_URL);
            console.log("mongodb connected")
        }
        catch(error){
            throw error;
        }
}
mongoose.connection.on("disconnected",()=>{
    console.log("Mongodb disconnected");
})
app.use(express.json());
app.use(cors());
app.options("*",cors());
app.use("/api/auth",authRoute);
app.use('/api/service',serviceRoute);
app.use('/api/book',bookRoute);
app.use('/api/mail',email_post);
app.use('/api/reply',reply_email_post);
app.use((err,req,res,next)=>{
    const errorStatus=err.status||500;
    const errorMessage=err.message||"Something went wrong";
    return res.status(errorStatus).json({
        sucess:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})
app.listen(8000,()=>{
    connect()
    console.log("Backend connected")
})