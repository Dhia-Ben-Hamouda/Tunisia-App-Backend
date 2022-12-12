import express from "express";
import { insertHouse , getAllHouses , getHouseById } from "../controllers/rentController.js";

const router = express.Router();
router.use(express.json());

router.get("/getAllHouses" , getAllHouses );
router.post("/insertHouse" , insertHouse );
router.get("/getHouseById" , getHouseById);

export default router;