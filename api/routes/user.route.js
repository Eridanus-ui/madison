import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { fetchProducts } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:id", verifyToken, fetchProducts);

export default router
