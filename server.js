import {app} from "./app.js";  //in .json run dev change app to server
import {connectDB} from "./data/database.js";
connectDB();
app.listen(process.env.PORT,()=>{
  console.log(`Server is working on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
