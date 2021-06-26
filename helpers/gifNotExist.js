import favsModel from "../models/favsModel.js";

export default function gifNotExist({ gifId, favId }) {
  return new Promise(async (resolve) => {
    const { favs } = await favsModel.findById({ _id: favId });
    const index = favs.indexOf(gifId);
    ~index ? resolve(false) : resolve(true);
  });
}
