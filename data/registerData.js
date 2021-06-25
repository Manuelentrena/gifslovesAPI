import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";

async function newUser({ username, email, password }) {
  return new Promise(async (resolve, reject) => {
    /* Construimos el modelo de nuevoUsuario */
    const newUser = new userModel({
      username,
      email,
      date: new Date().toLocaleString(),
    });
    /* Encriptamos el password */
    const salt = await bcryptjs.genSalt(10);
    newUser.password = await bcryptjs.hash(password, salt);
    /* Guardamos */
    try {
      resolve(newUser.save());
    } catch (error) {
      reject(error);
    }
  });
}

export default { newUser };
