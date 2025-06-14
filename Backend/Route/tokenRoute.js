import express from "express";
import { getTokenDetails } from "../Controllers/tokenHandler.js";
const tokenRouter = express.Router();

tokenRouter.post("/",getTokenDetails);

export default tokenRouter;