import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./utils/db.js";
import orderRoutes from "./routes/orderRoutes.js";


const app = express();

const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//run database
db();
//routes
app.use("/orders",orderRoutes);

// conncetion 
app.listen(port,()=>{
    console.log(`server is running on port${port}...`)
});

