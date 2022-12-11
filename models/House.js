import mongoose from "mongoose";

const houseSchema = new mongoose.Schema({
    name:String,
    description:String,
    picture:String,
    price:Number,
    phone:String,
    comments:[],
    ratings:[]
})

export default mongoose.model("houses" , houseSchema);