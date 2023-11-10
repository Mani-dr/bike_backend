import mongoose from "mongoose";
const {Schema}=mongoose;
const bookSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    mail:{
        type:String,
        required:true,
        unique:true
    },
    model:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    phno:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true});


export default mongoose.model("Book",bookSchema);