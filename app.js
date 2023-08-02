import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js"; //import the router here
import taskRouter from "./routes/task.js"; //import all the routes in app else in wont work
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";  //CROSS ORIGIN RESOURCE SHARING

export const app = express();

config({
  path:"./data/config.env"  //pass a path to connect env file with app
});


//THE MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(cors({ //pass options eg domain this will allow only todoapp.com url requests others it wont
  origin:[process.env.FRONTEND_URL],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true, //without this cookies wont reach to frontend
}))
//USING ROUTES
app.use("/api/v1/users",userRouter);  //to tell api is being used in url version1
app.use("/api/v1/task",taskRouter);

app.get("/",(req,res)=>{
  res.send("Hello World!!");
});

//ERROR HANDLING CUSTOM MIDDLEWARE
app.use(errorMiddleware);


