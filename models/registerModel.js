import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  registro: {
    type: Date,
    default: Date.now(),
  },
});

const registerModel = mongoose.model("gifsLoves_users", registerSchema);
export default registerModel;
