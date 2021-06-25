import validatedNotEmpty from "../helpers/validatedNotEmpty.js";
import favsData from "../data/favsData.js";

function addToFavs({ gifId, favId }) {
  return new Promise((resolve, reject) => {
    const validations = [];
    /* Verificar segun lo que haya en la base de datos de ghypy (numeros only*) */
    validations.push(validatedNotEmpty(gifId));
    Promise.all(validations)
      .then(async (values) => {
        if (values.includes(false)) {
          reject("Incorrect Id Gif");
        } else {
          await favsData.addFav({ gifId, favId });
          resolve([]);
        }
      })
      .catch((error) => reject(error));
  });
}

export default { addToFavs };
