import moment from "moment";
import {
  getMovieByTitle,
  getMoviesByLimit,
  getMoviesAll,
  createMovie,
  findByTitleAndDelete,
  oneUpdateByData,
} from "../model/movie.service.js";

export const getAll = async (req, res) => {
  const { limit } = req.query;

  try {
    if (limit) {
      const response = await getMoviesByLimit(limit);
      res.status(200).json({ status: true, response });
    } else {
      const response2 = await getMoviesAll();
      res.status(200).json({ status: true, response2 });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const getOne = async (req, res) => {
  const { title } = req.query;

  try {
    if (query && query.title) {
      const resforMovie = await getMovieByTitle(title);
      res.status(200).json({ status: true, resforMovie });
    } else {
      res
        .status(400)
        .json({ status: false, message: "Title not found from parameter url" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const createOne = async (req, res) => {
  console.log("Body: ", req.body);

  try {
    const result = await createMovie(req.body);
    if (result) {
      res.status(200).json({ status: true, result });
    } else {
      res
        .status(400)
        .json({ status: false, message: "Error could not add movie" });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

// Request client  { testDate: "date ywuulah"}
export const getDate = async (req, res) => {
  console.log(req.body.testDate);

  if (!req.body.testDate)
    return res.json({
      status: false,
      message: "Not found date parameter in request",
    });

  try {
    const releaseDate = moment(new Date(req.body.testDate)).format(
      "YY-MM-DD hh:mm:ss"
    );
    res.json({ status: true, releaseDate });

    console.log("Release date in Controller => ", releaseDate);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOne = async (req, res) => {
  const { title } = req.query;
  if (!title)
    return res.json({
      status: false,
      message: "Delete title parameter not found",
    });

  try {
    const result = await findByTitleAndDelete(title);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
  }
};

export const updateOne = async (req, res) => {
  console.log(req.body);
  try {
    if (req.body) {
      const { getTitle, getData, setTitle, setData } = req.body;
      const newUpdateData = { getTitle, getData, setTitle, setData };
      const result = await oneUpdateByData(newUpdateData);
      res.status(200).json({ status: true, result });
    }
  } catch (error) {
    console.log(error);
  }
};
