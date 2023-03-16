import express from "express";
import { getProducts, getProduct, createProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/product", getProducts);

export default router;