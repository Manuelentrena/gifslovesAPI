import register from "../routes/registerRouter.js";
import login from "../routes/loginRouter.js";
import favs from "../routes/favsRouter.js";

const router = (server) => {
  server.use("/register", register);
  server.use("/login", login);
  server.use("/favs", favs);
};

export default router;
