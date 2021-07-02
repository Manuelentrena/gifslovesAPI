import express from "express";
import { error, success } from "../connection/responses.js";
import controller from "../controllers/loginController.js";
import auth from "../middleware/verifyToken.js";
import authUser from "../middleware/verifyUser.js";

const login = express.Router();

login.post("/", async (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });
  try {
    const response = await controller.loginUser({ email, password });
    success({ req, res, data: response, status: 201, msg: "Logged User" });
  } catch (info) {
    error({ req, res, error: "error", status: 500, info });
  }
});

login.get("/", auth, authUser, async (req, res) => {
  const user = req.user;
  console.log("DENTRO");
  try {
    success({ req, res, data: user, status: 201, msg: "Username" });
  } catch (info) {
    error({ req, res, error: "error", status: 500, info });
  }
});

export default login;
