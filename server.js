import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import db from "./config/database.js";

const PORT = 3008;
const app = express();

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

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
