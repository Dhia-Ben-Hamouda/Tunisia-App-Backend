import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function signIn(req,res){
    try{
        
        const { email , password } = req.body;
        const exist = await User.findOne({email});

        if(!exist){
            return res.status(400).json({
                msg:"user with the given email doesn't exist"
            })
        }else{

            const match = await bcrypt.compare( password , exist.password );

            if(match){

                return res.status(200).json({
                    token:generateToken(email , exist._id , exist.picture),
                    msg:"ok"
                })

            }else{
                return res.status(401).json({
                    msg:"wrong password"
                })
            }

        }

    }catch(err){
        return res.status(400).json({
            msg:"Error while signing in"
        })
    }
}

export async function signUp(req,res){
    try{

        const { name , phone , email , password , picture } = req.body;

        const exist = await User.findOne({email});

        if(exist){
            return res.status(400).json({
                msg:"user with the given email already exists"
            })
        }else{

            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash( password , salt);

            await User.create({
                name,
                phone,
                email,
                password:hashedPassword,
                picture
            })

            return res.status(201).json({
                msg:"user created successfully"
            })

        }

    }catch(err){
        console.error(err);

        return res.status(400).json({
            msg:"Error while signing up"
        })
    }
}

function generateToken(email , id , picture){
    return jwt.sign(  {email , id , picture}  , process.env.JWT_SECRET  , { expiresIn:"30d" }  );
}