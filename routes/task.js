import express from "express";
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask); //newTask only when logged in i.e req.user in isAuth has all the info needed
router.get("/my", isAuthenticated,getMyTask);
router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask); //passing the id in parameter :id is anything after app url including new and my but it wont reach hr=ere as new and my will exec before

export default router;