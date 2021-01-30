import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { settings } from "config/settings";
import ssr from "server/middlewares/ssr";
import { apiProxy } from "server/middlewares/api-proxy";
import { fetchData } from "server/middlewares/fetch-data";
import { session } from "server/middlewares/session";
import { router } from "server/router";

const { port, apiBase } = settings;

const app = express();
const middlewares = [morgan("tiny"), cookieParser(), fetchData, ...ssr];

app.use(express.static("./dist")).use(router).use(apiBase, apiProxy).use(session).use(middlewares);

/**
 * TODO: можно попробовать на бою генерировать сертификат с помощью
 * https://git.coolaj86.com/coolaj86/greenlock-express.js
 */

if (require.main === module) {
  app.listen(port, () => console.log(`✅ ${port}`));
}

module.exports = app;
