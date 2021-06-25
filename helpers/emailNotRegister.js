import userModel from "../models/userModel.js";

export default async function emailNotRegister(email) {
  const result = await userModel.exists({ email: email });
  return !result;
}
