import validatedNotEmpty from "../helpers/validatedNotEmpty.js";

/* Que email no este ya registrado */

function addUser({ username, email, password }) {
  return new Promise((resolve, reject) => {
    const validations = [];

    validations.push(validatedNotEmpty(username));
    validations.push(validatedNotEmpty(email));
    validations.push(validatedNotEmpty(password));

    Promise.all(validations)
      .then((values) => {
        if (values.includes(false)) {
          console.log(values);
          reject("User hasn't been validated");
        } else {
          /* const resMsg = messageData.add(fullMessage); */
          resolve({ username, email, password });
        }
      })
      .catch((error) => reject(error));
  });
}

export default { addUser };
