import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { fetchProducts, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signin", fetchProducts);
router.post("/update/:", verifyToken, updateUser);

export default router
