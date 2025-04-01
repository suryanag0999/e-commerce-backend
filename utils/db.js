import mongoose from "mongoose";
import "dotenv/config";

export default function db(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("database connected"))
    .catch(()=>console.log("error while connecting"))
}