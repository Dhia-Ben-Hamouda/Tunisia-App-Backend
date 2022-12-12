import House from "../models/House.js";

export async function insertHouse(req, res) {
    try {
        const house = req.body;

        await House.create(house);

        return res.status(201).json({
            msg: "house inserted successfully"
        })
    } catch (err) {
        return res.status(400).json({
            msg: "error while inserting house"
        })
    }
}

export async function getAllHouses(req, res) {
    try {
        const { page } = req.query;

        const pageSize = 6;
        const skip = (page - 1) * pageSize;
        const numberOfDocuments = await House.countDocuments();
        const numberOfPages = Math.ceil(numberOfDocuments / pageSize);

        const houses = await House.find().skip(skip).limit(pageSize);

        console.log(houses);

        return res.status(200).json({
            houses,
            numberOfPages,
        });

    } catch (err) {
        return res.status(400).json({
            msg: "error while fetching houses"
        })
    }
}

export async function getHouseById(req,res){
    try{
        const { id } = req.query;
        const house = await House.findById(id);

        return res.status(200).json(house);
    }catch(err){
        return res.status(400).json({
            msg:"error while fetching house"
        })
    }
}

export async function deleteHouse(req,res){
    try{
        const { id } = req.query;
        await House.deleteOne({id});

        return res.status(200).json({
            msg:"house deleted successfully"
        })
    }catch(err){
        return res.status(400).json({
            msg:"error while deleting house"
        })
    }
}