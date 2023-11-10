import Service from "../models/service.js"
export const addService=async(req,res,next)=>{
    try{

        const newService=new Service(req.body)
        await newService.save();
        res.status(200).send(newService); 
    }
    catch(err){
        next(err);
    }
}

export const getService=async(req,res,next)=>{
    const response=await Service.find({})
    console.log(response)
    if(response.length>=1){
        res.status(200).json({"msg":"sucess","data":response})
    }
    else{
        res.status(200).json({"msg":"failed"})
    }
}
