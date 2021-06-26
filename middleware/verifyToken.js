import jwt from "jsonwebtoken";
import { error } from "../connection/responses.js";

export default function auth(req, res, next) {
  //Leer el token
  const tokenBearer = req.header("authorization");
  let token = "";

  if (!tokenBearer) {
    return error({
      req,
      res,
      error: "Invalid Token",
      status: 403,
      info: "No token",
    });
  }

  token = tokenBearer.substring(7);
  //Validar el token
  try {
    const cifrado = jwt.verify(token, process.env.SECRET);
    req.userId = cifrado.id;
    next();
  } catch (info) {
    error({ req, res, error: "Invalid Token", status: 403, info });
  }
}
