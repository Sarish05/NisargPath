import mongoose from "mongoose";

const dbURL = "mongodb://127.0.0.1:27017/nisargPath";

export function connectMongoDB(dbURL){
    mongoose.connect(dbURL).then(() =>{
        console.log('Connected to DB!')
    })
    .catch((err)=>{
        console.log(err);
    })
}

