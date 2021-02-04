import express from "express";
import pino from "express-pino-logger";

import { settings } from "config/settings";
import { apiProxy } from "server/middlewares";
import { router } from "server/router";
import { TEXT } from "constants/text";

const { port } = settings;
const app = express();

// prettier-ignore
app
  .use([
    express.static("./dist"),
    pino({
      prettyPrint: true,
    }),
    apiProxy,
    router,
  ])

/**
 * TODO: можно попробовать на бою генерировать сертификат с помощью
 * https://git.coolaj86.com/coolaj86/greenlock-express.js
 */

if (require.main === module) {
  app.listen(port, () => {
    console.info(TEXT.SERVER.SERVER_RUNNING_MESSAGE, port);
  });
}

module.exports = app;
