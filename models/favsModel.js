import mongoose from "mongoose";

const favsSchema = new mongoose.Schema({
  favs: { type: Array },
});

const favsModel = mongoose.model("gifsLoves_favs", favsSchema);
export default favsModel;
