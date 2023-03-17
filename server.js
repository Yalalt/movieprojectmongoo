import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productRoutes from "./routes/product.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import db from "./config/database.js";

const PORT = 9000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", productRoutes);
app.use("/api", movieRoutes);

// db.once db.error
db.once("open", () => {
  console.log("Connection successfully");
});
db.on("error", (err) => {
  console.log(err, " : conection error");
});


app.listen(PORT, () => {
  console.log("Server running ON and 3008 port");
});
