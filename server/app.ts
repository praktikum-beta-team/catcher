import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import fs from "fs";
import https from "https";
import path from "path";

import { ROUTES } from "constants/routes";
import ssr from "server/middlewares/ssr";
import { yandexOAuth } from "server/middlewares/yandexOAuth";
import { apiProxy } from "server/middlewares/apiProxy";
import { fetchData } from "server/middlewares/fetchData";

import { TEXT } from "constants/text";
import { port } from "config/vars";
import { baseURL } from "constants/api";

const key = fs.readFileSync(path.resolve("./config/ssl/localhost.key"));
const cert = fs.readFileSync(path.resolve("./config/ssl/localhost.crt"));

const app = express();
const server = https.createServer({ key, cert }, app);

const middlewares = [morgan("tiny"), cookieParser(), fetchData, ...ssr];

app
  .use(express.static("./dist"))
  .use(baseURL, apiProxy)
  .get(ROUTES.OAUTH, yandexOAuth)
  .use(middlewares);

server.listen(port, () => {
  console.log(`${TEXT.SERVER.SERVER_RUNNING_MESSAGE} ${port}`);
});
