
import mongoose from "mongoose";

const connectDB = async() => {

  try {
    
  await mongoose.connect("mongodb://localhost:27017/bookstore")
  console.log("MOngoDB Connected");
  }

  catch(err){
    console.log("db not connected")
  }

}