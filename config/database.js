import mongoose from "mongoose";

const db = mongoose.connect(
  "mongodb+srv://aqua2022yalaltgandush:t7Zg4gQrdwhd75BG@cluster0.uqiga9k.mongodb.net/sample_mflix?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log("MongoDB Remote Server connected....");
}).catch((err) => {
  console.log(err);
});

export default mongoose.connection;