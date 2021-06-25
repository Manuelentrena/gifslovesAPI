import userModel from "../models/userModel.js";

export default async function emailRegister(email) {
  return await userModel.exists({ email: email });
}
