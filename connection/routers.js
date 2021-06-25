import register from "../routes/registerRouter.js";
import login from "../routes/loginRouter.js";

const router = (server) => {
  server.use("/register", register);
  server.use("/login", login);
};

export default router;
