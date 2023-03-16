import express from "express";
import { getMovies, createMovies } from "../controller/movie.controller.js";

const router = express.Router();

router.get("/movies", getMovies);
router.post("/movies", createMovies);

export default router;