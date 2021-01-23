import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { settings } from "config/settings";
import { ROUTES } from "constants/routes";
import ssr from "server/middlewares/ssr";
import { yandexOAuth } from "server/middlewares/yandex-oauth";
import { apiProxy } from "server/middlewares/api-proxy";
import { fetchData } from "server/middlewares/fetch-data";

const { port, apiBase } = settings;

const app = express();

const middlewares = [morgan("tiny"), cookieParser(), fetchData, ...ssr];

app
  .use(express.static("./dist"))
  .use(apiBase, apiProxy)
  .get(ROUTES.OAUTH, yandexOAuth)
  .use(middlewares);

/**
 * TODO: можно попробовать на бою генерировать сертификат с помощью
 * https://git.coolaj86.com/coolaj86/greenlock-express.js
 */

if (require.main === module) {
  app.listen(port, () => console.log(`✅ ${port}`));
}

module.exports = app;
