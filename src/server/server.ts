import express from "express";
import morgan from "morgan";
import open from "open";
import cookieParser from "cookie-parser";
import fs from "fs";
import https from "https";
import path from "path";

import { ROUTES } from "app/constants/routes";
import ssr from "server/middlewares/ssr";
import { yandexOAuth } from "server/middlewares/yandexOAuth";
import { apiProxy } from "server/middlewares/apiProxy";
import { fetchData } from "server/middlewares/fetchData";

import TEXT from "server/constants/text";
import { isDevelopment, port } from "config/vars";

const key = fs.readFileSync(path.resolve("./config/ssl/localhost.key"));
const cert = fs.readFileSync(path.resolve("./config/ssl/localhost.crt"));

const app = express();
const server = https.createServer({ key, cert }, app);

app
  .use(express.static("./dist"))
  .use("/api", apiProxy)
  .get(ROUTES.OAUTH, yandexOAuth)
  .use(cookieParser())
  .use(fetchData)
  .use(ssr)
  .use(morgan("tiny"));

server.listen(port, () => {
  console.log(`${TEXT.SERVER_RUNNING_MESSAGE} ${port}`);
  if (isDevelopment) open(`https://localhost:${port}`);
});
