import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export default async function correctPassword({ email, password }) {
  let response;
  const user = await userModel.findOne({ email });
  user
    ? (response = await bcryptjs.compare(password, user.password))
    : (response = false);
  return response;
}
