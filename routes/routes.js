import express from "express";
import { getMovies, createMovies } from "../controller/movie.controller.js";
import { getProducts } from "../controller/product.controller.js";

const router = express.Router();

router.get("/product", getProducts);
router.get("/movies", getMovies);
router.post("/movies", createMovies);

export default router;