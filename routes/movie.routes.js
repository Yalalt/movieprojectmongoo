import express from "express";
import {
  getAll,
  getOne,
  createOne,
  getDate,
  updateOne,
  deleteOne,
} from "../controller/movie.controller.js";

const router = express.Router();
// GET /movies OR /movies?limit=18
router.get("/movies", getAll);

// GET /movie?title=titleNameHere
router.get("/movie?", getOne);

// POST /movies
router.post("/movies", createOne);

// POST /date
router.post("/date", getDate);

// GET /update
// OPTION: type: String, writers: String, year: Number
router.get("/update", updateOne);
// newMvoie = {
//     getTitle: "",
//     getData: "",
//     settitle: "",
//     setData: ""
// }

// DELETE /delete?title=OPTION
router.delete("/delete", deleteOne);

export default router;
