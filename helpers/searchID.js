import userModel from "../models/userModel.js";

export default async function searchID(email) {
  const user = await userModel.findOne({ email });
  return user._id;
}
