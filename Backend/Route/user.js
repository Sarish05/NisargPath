import express from "express";
import { handleUserSignUp, handlsUserSignIn } from "../Controllers/userHandler.js";
const userRouter = express.Router();

userRouter.post("/signup", handleUserSignUp);

userRouter.post("/signin" , handlsUserSignIn);

export default userRouter;