import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:false,
        default:""
    }
})

export default mongoose.model("users" , userSchema);