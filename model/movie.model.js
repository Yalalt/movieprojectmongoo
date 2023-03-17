import mongoose, { Schema } from "mongoose";


// scheme
// Collection movies
const movieSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    awards: {
        nominations: Number,
        text: String,
        wins: Number
    },
    cast: [String],
    countries: [String],
    directors: [String],
    fullplot: String,
    genres: [String],
    imdb: {
        id: Number,
        rating: Number,
        votes: Number
    },
    languages: [String],
    lastupdated: String,
    metacritic: Number,
    num_mflix_comments: Number,
    plot: String,
    poster: String,
    rated: String,
    released: Date,
    runtime: Number,
    title: String,
    tomatoes: {
        boxOffice:String,
        consensus: String,
        critic: {
            meter: Number,
            numReviews: Number,
            rating: Number
        },
        dvd: Date,
        fresh: Number,
        lastUpdated: Date,
        production: String,
        rotten: Number,
        viewer: {
            meter: Number,
            numReviews: Number,
            rating: Number,
        },
        website: String,
    },
    type: String,
    writers: String,
    year: Number
},{
    collection: 'movies'
});

export const MovieModel = mongoose.model("moviemodel", movieSchema, "movies");