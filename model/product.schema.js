import mongoose, { Schema } from "mongoose";
import db from "../config/mongoose";

const ProductSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    stock: Number,
    sale: Number,
    releasedDate: Date,
    category: [String],
    brand: [String]
},{
    collection: 'products'
});
// scheme
// Collection movies
//export const ProductModel = mongoose.model("Product", movieSchema, "products");