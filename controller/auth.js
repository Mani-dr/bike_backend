import User from "../models/user.js"
export const register=async(req,res,next)=>{
    try{

        const newUser=new User(req.body)
        await newUser.save();
        res.status(200).send(newUser); 
    }
    catch(err){
        next(err);
    }
}
export const login =async(req,res,next)=>{
    const response=await User.find({email:req.body.email,password:req.body.password})
    console.log(response);
  
    if(response.length>=1)
    {
        res.status(200).json({"msg":"sucess","data":response})
    }
    else
    {
        res.status(200).json({"msg":"failed"})
    }
}