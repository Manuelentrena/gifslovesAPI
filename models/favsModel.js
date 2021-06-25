import mongoose from "mongoose";

const favsSchema = new mongoose.Schema({
  /* user: { type: mongoose.Schema.ObjectId, ref: "gifsLoves_users" }, */
  favs: { type: Array },
});

const favsModel = mongoose.model("gifsLoves_favs", favsSchema);
export default favsModel;
