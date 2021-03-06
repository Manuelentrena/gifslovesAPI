import express from "express";
import http from "http";
import router from "./connection/routers.js";
import chalk from "chalk";
import cors from "cors";
import { connectedBD, createURI, getPort, getHostname } from "./config/db.js";

/* Crear Servidor */
const app = express();
const server = http.createServer(app);

/* Conected to DATABASE */
connectedBD(createURI("variables.env"));
/* Habilitar CORS */
app.use(cors());
/* JSON */
app.use(express.json());
/* Router del server */
router(app);
/* Escuchar por el puerto */
server.listen(getPort(), "0.0.0.0", () => {
  console.log(chalk.yellowBright(`Server is listenning on port ${getPort()}`));
});
