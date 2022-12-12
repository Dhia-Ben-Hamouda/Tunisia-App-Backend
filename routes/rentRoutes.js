import express from "express";
import { insertHouse , getAllHouses , getHouseById , deleteHouse } from "../controllers/rentController.js";

const router = express.Router();
router.use(express.json());

router.get("/getAllHouses" , getAllHouses );
router.post("/insertHouse" , insertHouse );
router.get("/getHouseById" , getHouseById );
router.delete("/deleteHouse" , deleteHouse );

export default router;