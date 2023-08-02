import mongoose from "mongoose";

const schema = mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
      type:String,
      required:true,
      unique:true,
  },
  password:{
    required:true,
    type:String,
    select:false,  //this means when user is accessed in some function password by default is private cant be accessed
  },
  createdAt:{
    type:Date,
    default:Date.now,
  },
});

export const User = mongoose.model("User",schema);