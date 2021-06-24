import register from "../routes/registerRouter.js";

const router = (server) => {
  server.use("/register", register);
};

export default router;
