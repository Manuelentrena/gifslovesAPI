import favsModel from "../models/favsModel.js";

async function newFavs() {
  return new Promise(async (resolve, reject) => {
    /* Construimos el modelo de nuevoUsuario */
    const newFavs = new favsModel({ favs: [] });

    /* Guardamos */
    try {
      resolve(newFavs.save());
    } catch (error) {
      reject(error);
    }
  });
}

async function addFav({ gifId, favId }) {
  return new Promise(async (resolve, reject) => {
    favsModel.findOne({ _id: favId }).then((fav) => {
      fav.favs.push(gifId);
      fav
        .save()
        .then((newFavs) => {
          resolve(newFavs);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

export default { newFavs, addFav };
