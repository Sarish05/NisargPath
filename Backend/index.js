import express from "express"
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { connectMongoDB } from "./Controllers/connection.js";
import destinationRouter from "./Route/destination.js";
import userRouter from "./Route/user.js";
import { checkForAuthenticationCookie } from "./Middlewares/authentication.js";
import bookingRouter from "./Route/book.js";
import tokenRouter from "./Route/tokenRoute.js";

dotenv.config();

connectMongoDB(process.env.dbURL);
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


//user Routes
app.use("/user",userRouter)

//destination Routes
app.use("/destinations",destinationRouter)

//Booking Routes
app.use("/booking",checkForAuthenticationCookie("token"),bookingRouter);

//
app.use("/gettokendetails",tokenRouter);

app.listen((5001),()=>{
    console.log("Server started successfully...........")
})