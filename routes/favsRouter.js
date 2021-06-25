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

export default favs;
