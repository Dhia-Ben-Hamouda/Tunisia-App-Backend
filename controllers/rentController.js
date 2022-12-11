import House from "../models/House.js";

export async function insertHouse(req,res){
    try{

        const house = req.body;
        await House.create(house);

        return res.status(201).json({
            msg:"house inserted successfully"
        })
    }catch(err){
        return res.status(400).json({
            msg:"error while inserting house"
        })
    }
}

export async function getAllHouses(req,res){
    try{
        
        const houses = await House.find();

        return res.status(200).json(houses);
    }catch(err){
        return res.status(400).json({
            msg:"error while fetching houses"
        })
    }
}