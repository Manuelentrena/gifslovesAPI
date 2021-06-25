import validatedNotEmpty from "../helpers/validatedNotEmpty.js";
import userData from "../data/userData.js";
import favsData from "../data/favsData.js";
import emailNotRegister from "../helpers/emailNotRegister.js";
import createToken from "../helpers/createToken.js";

/* Que email no este ya registrado */

function addUser({ username, email, password }) {
  return new Promise((resolve, reject) => {
    const validations = [];

    validations.push(validatedNotEmpty(username));
    validations.push(validatedNotEmpty(email));
    validations.push(validatedNotEmpty(password));
    validations.push(emailNotRegister(email));

    Promise.all(validations)
      .then(async (values) => {
        if (values.includes(false)) {
          reject("User hasn't been validated");
        } else {
          /* Crear un favs */
          const newFavs = await favsData.newFavs();
          /* Guardamos nuevo User */
          const newUser = await userData.newUser({
            username,
            email,
            password,
            favs: newFavs._id,
          });
          /* Devolvemos el token */
          resolve({ token: createToken(newUser._id) });
        }
      })
      .catch((error) => reject(error));
  });
}

export default { addUser };
