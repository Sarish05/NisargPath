import mongoose from "mongoose";
import {createHmac , randomBytes} from "crypto"
import { createTokenForUser } from "../Services/authentication.js";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    contactNumber : {
        type : Number,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : false,
    },
    salt : {
        type : String,
    },
    role :{
        type : String,
        default : "USER",
        required : false,
    }
},{timestamps : true});


userSchema.pre("save",function(next)
{
    const user = this;
    if(!user.isModified("password"))
    {
        return next();
    }

    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256",salt).update(user.password).digest("hex");

    this.salt = salt;
    this.password = hashedPassword;

    next();
})


userSchema.static("matchedUserAndGenerateToken",async function (contactNumber , password){
    const user = await this.findOne({contactNumber}).lean();      //it convert mongoose object to simple js object
    console.log(user);
    if(!user) 
    {
        return {token : null , msg : "Mobile Number Incorrect"}
    }

    const salt = user.salt;
    const hashedPassword = user.password;
    const UserProvidedHashedPassword = createHmac("sha256",salt).update(password).digest("hex");
    
    if(UserProvidedHashedPassword != hashedPassword)
    {
        return {token : null , msg : "Password Incorrect"};
    }

    const token = createTokenForUser(user);
    return {token : token , msg : "Sign In Succeeded", role : user.role}; 
})



const User = mongoose.model("user",userSchema);

export default User;