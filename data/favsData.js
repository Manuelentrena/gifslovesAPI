import favsModel from "../models/favsModel.js";

async function newFavs() {
  return new Promise(async (resolve, reject) => {
    /* Construimos el modelo de nuevoUsuario */
    const newFavs = new favsModel({ favs: [] }, { _id: { unique: true } });
    console.log(newFavs);
    /* Guardamos */
    try {
      const result = await newFavs.save();
      resolve(result);
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

async function deleteFav({ gifId, favId }) {
  return new Promise(async (resolve, reject) => {
    favsModel.findOne({ _id: favId }).then((fav) => {
      const index = fav.favs.indexOf(gifId); //Sacamos el indice
      if (index !== -1) {
        fav.favs.splice(index, 1); //Lo borramos
        fav
          .save()
          .then((favDeleted) => resolve(favDeleted))
          .catch((error) => reject(error));
      } else {
        resolve(null);
      }
    });
  });
}

async function listFavs({ favId }) {
  return new Promise(async (resolve, reject) => {
    try {
      const listFavs = await favsModel.findById({ _id: favId });
      listFavs ? resolve(listFavs.favs) : reject([]);
    } catch (error) {
      reject(error);
    }
  });
}

export default { newFavs, addFav, listFavs, deleteFav };
