import validatedNotEmpty from "../helpers/validatedNotEmpty.js";
import correctPassword from "../helpers/correctPassword.js";
import emailRegister from "../helpers/emailRegister.js";
import searchID from "../helpers/searchID.js";
import createToken from "../helpers/createToken.js";

function loginUser({ email, password }) {
  return new Promise((resolve, reject) => {
    const validations = [];

    validations.push(validatedNotEmpty(email));
    validations.push(validatedNotEmpty(password));
    validations.push(emailRegister(email));
    validations.push(correctPassword({ email, password }));

    Promise.all(validations)
      .then(async (values) => {
        if (values.includes(false)) {
          console.log(values);
          reject("Incorrect user account");
        } else {
          console.log(values);
          const id = await searchID(email);
          console.log(id);
          resolve({ token: createToken(id) });
        }
      })
      .catch((error) => reject(error));
  });
}

export default { loginUser };
