import { error } from "../connection/responses.js";
import userRegister from "../helpers/userRegister.js";

export default async function authUser(req, res, next) {
  const { userId } = req;
  const user = await userRegister(userId);

  if (user) {
    req.user = user;
    next();
  } else {
    return error({
      req,
      res,
      error: "Unregistered User",
      status: 401,
      info: "Unregistered User",
    });
  }
}
