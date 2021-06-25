import userModel from "../models/userModel.js";

export default async function userRegister(id) {
  return await userModel.findOne({ _id: id });
}
