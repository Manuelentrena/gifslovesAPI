import express from "express";
import { error, success } from "../connection/responses.js";
import controller from "../controllers/registerController.js";

const register = express.Router();

register.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const response = await controller.addUser({ username, email, password });
    success({ req, res, data: response, status: 201, msg: "Registered User" });
  } catch (info) {
    error({ req, res, error: "error", status: 500, info });
  }
});

export default register;
