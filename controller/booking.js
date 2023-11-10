import Book from "../models/book.js"
export const addBook=async(req,res,next)=>{
    try{

        const newBook=new Book(req.body)
        await newBook.save();
        res.status(200).send(newBook); 
    }
    catch(err){
        next(err);
    }
}

export const getBook=async(req,res,next)=>{
    const response=await Book.find({})
    console.log(response)
    if(response.length>=1){
        res.status(200).json({"msg":"sucess","data":response})
    }
    else{
        res.status(200).json({"msg":"failed"})
    }
}

export const deleteBook=async(req,res,next)=>{
    try{
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted the Booking");
    }
    catch(err)
    {
        next(err);
    }
}

export const putBook=async(req,res,next)=>{
    try{
    const id=req.params.id;
    const newData = req.body;
    await Book.updateOne({ _id: id }, { $set: newData });
    res.status(200).send('Document updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}