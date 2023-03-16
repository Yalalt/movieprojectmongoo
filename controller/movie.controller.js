import {
    getMoviesService,
    MovieSchema
  } from "../model/product.service.js";
  import movieModel from "../model/movie.model.js";
  
  
  export const getMovies = async (req, res) => {
    const movieDataModel = new movieModel();

    try {
      const result = await movieDataModel.find();
      console.log(result);

      // res.json({ status: true, movieDataModel });
    } catch (error) {
      console.log(error);
      res.json({ status: false, message: error });
    }
  };


  
  export const createMovies = async (req, res) => {
    const movieDataModel = new movieModel(req.body);

    try {
      const result = await movieDataModel.insertOne({});
      

      res.json({ status: true, movieDataModel });
    } catch (error) {
      console.log(error);
      res.json({ status: false, message: error });
    }
  };
  