import express from "express";
import { insertHouse , getAllHouses } from "../controllers/rentController.js";

const router = express.Router();
router.use(express.json());

router.get("/getAllHouses" , getAllHouses );
router.post("/insertHouse" , insertHouse );

export default router;