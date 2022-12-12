import mongoose from "mongoose";

const houseSchema = new mongoose.Schema({
    name:String,
    description:String,
    picture:String,
    price:String,
    phone:String,
    comments:{
        type:Array,
        default:[]
    },
    ratings:{
        type:Array,
        default:[]
    }
})

export default mongoose.model("houses" , houseSchema);