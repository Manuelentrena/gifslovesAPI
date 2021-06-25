import DB from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";

DB.Promise = global.Promise;

export async function connectedBD(URI) {
  await DB.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
    .then(() => console.log(chalk.yellowBright("[DB] successfully connected")))
    .catch((error) => console.error(chalk.redBright("[DB]", error)));
}

export function createURI(nameFileEnv) {
  dotenv.config({ path: nameFileEnv });
  const { USERNAME, PASSWORD, CLUSTER, DATABASE } = process.env;
  return `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}/${DATABASE}`;
}

export function getPort() {
  const { PORT } = process.env;
  return PORT;
}

export function getHostname() {
  const { HOSTNAME } = process.env;
  return HOSTNAME;
}
