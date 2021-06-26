import express from "express";
import { error, success } from "../connection/responses.js";
import controller from "../controllers/favsController.js";
import auth from "../middleware/verifyToken.js";
import authUser from "../middleware/verifyUser.js";

const favs = express.Router();

favs.post("/:id", auth, authUser, async (req, res) => {
  const gifId = req.params.id;
  const favId = req.user.favs;
  try {
    const response = await controller.addToFavs({ gifId, favId });
    success({ req, res, data: response, status: 201, msg: "Fav Added" });
  } catch (info) {
    error({ req, res, error: "error", status: 500, info });
  }
});

favs.get("/", auth, authUser, async (req, res) => {
  const favId = req.user.favs;
  try {
    const response = await controller.listsFavs({ favId });
    success({ req, res, data: response, status: 201, msg: "List Favs" });
  } catch (info) {
    error({ req, res, error: "error", status: 500, info });
  }
});

favs.delete("/:id", auth, authUser, async (req, res) => {
  const gifId = req.params.id;
  const favId = req.user.favs;
  try {
    const response = await controller.deleteFav({ gifId, favId });
    response
      ? success({ req, res, data: response, status: 201, msg: "Fav Delete" })
      : error({
          req,
          res,
          error: "Gif No Exits",
          status: 500,
          info: "Params error",
        });
  } catch (info) {
    error({ req, res, error: "error", status: 500, info });
  }
});

export default favs;
