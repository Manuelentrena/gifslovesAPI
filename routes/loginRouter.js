import express from "express";
import { error, success } from "../connection/responses.js";
import controller from "../controllers/loginController.js";

const login = express.Router();

login.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await controller.loginUser({ email, password });
    success({ req, res, data: response, status: 201, msg: "Logged User" });
  } catch (info) {
    error({ req, res, error: "error", status: 500, info });
  }
});

export default login;
