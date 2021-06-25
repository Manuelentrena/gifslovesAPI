import validatedNotEmpty from "../helpers/validatedNotEmpty.js";
import userModel from "../data/registerData.js";
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
          console.log(values);
          reject("User hasn't been validated");
        } else {
          /* Guardamos nuevo User */
          const newUser = await userModel.newUser({
            username,
            email,
            password,
          });
          /* Devolvemos el token */
          resolve({ token: createToken(newUser._id) });
        }
      })
      .catch((error) => reject(error));
  });
}

export default { addUser };
