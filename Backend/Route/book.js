import express from "express";
import { handleTreckBooking } from "../Controllers/bookHandler.js";


const bookingRouter = express.Router();

bookingRouter.post("/",handleTreckBooking);


export default bookingRouter;