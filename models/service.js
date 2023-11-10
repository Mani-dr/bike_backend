import mongoose from "mongoose";
const {Schema}=mongoose;
const serviceSchema=new Schema({
    service_name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:String,
        required:true,
        unique:true
    },
    time:{
        type:String,
        required:true
    },
},{timestamps:true});

export default mongoose.model("Service",serviceSchema);