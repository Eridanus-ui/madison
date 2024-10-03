import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { fetchProducts } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signin", fetchProducts);
router.get("/verifyToken", verifyToken, fetchProducts)

export default router
