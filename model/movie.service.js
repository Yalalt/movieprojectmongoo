import { MovieModel } from "../model/movie.model.js";

export const getMoviesAll = async () => {
  const result = await MovieModel.find({}).limit(10);
  return result;
};

export const getMoviesByLimit = async (limit) => {
  const result = await MovieModel.find({}).limit(limit);
  return result;
};

export const getMovieByTitle = async (title) => {
  console.log("request entered title params is ==> ", title);

  let movie = await MovieModel.findOne({ title }).select(
    "_id genres title runtime year"
  );

  return movie;
};

export const createMovie = async (newMovie) => {
  const result = await new MovieModel(newMovie).save();

  if (result.title == newMovie.title) {
    return true;
  } else {
    return "Something went wrong";
  }
};

export const findByTitleAndDelete = async (reqTitle) => {
  try {
    const result = await MovieModel.findOneAndDelete({
      title: reqTitle,
    }).exec();

    console.log("result delete request in service => ", result);

    return result;
  } catch (error) {
    console.log(error);
    return "delete error";
  }
};

// Parameters by named update each fileds
export const oneUpdateByData = async ({
  getTitle,
  getData,
  setTitle,
  setData,
}) => {
  const result = await MovieModel.findOneAndUpdate(
    { [getTitle]: getData },
    { [setTitle]: setData }
  ).exec();

  console.log("Update one Service => ", result);

  return "Successful update";
};
