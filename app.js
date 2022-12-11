import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// middleware

app.use(cors({
    origin:"*"
}))
dotenv.config();
app.use(express.json({limit:"5mb"}));
mongoose.set('strictQuery', true);

// env variables

const port = process.env.PORT || 5000;
const url = process.env.URL;

// connecting to mongoDB

mongoose.connect(url)
.then(()=>{console.log("connected to mongoDB !")})
.catch((err)=>{console.error(err)})

// launching the app

app.listen(port , ()=>{
    console.log(`listening to requests on port ${port}`);
})

app.get("/" , (req,res)=>{
    res.send("server running !");
})

// handle routes

app.use("/auth" ,  authRoutes);

