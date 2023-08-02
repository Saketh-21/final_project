import mongoose from "mongoose";

export const connectDB = ()=>{
mongoose.connect(process.env.MONGO_URI,{
dbName:"projbackend",
}).then((c)=>console.log(`Database Connected ${c.connection.host}`))  //host name
.catch((e)=>console.log(e));
};