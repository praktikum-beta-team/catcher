import express from "express";
import morgan from "morgan";
import open from "open";

import { ROUTES } from "app/constants/routes";
import ssr from "server/middlewares/ssr";
import { yandexOAuth } from "server/middlewares/yandexOAuth";

import TEXT from "server/constants/text";
import { IS_DEVELOPMENT, PORT } from "config/vars";

const app = express();

app
  .use(morgan("tiny"))
  .use(express.static("./dist"))
  .get(ROUTES.OAUTH, yandexOAuth)
  .use(ssr)
  .listen(PORT, () => {
    console.log(`${TEXT.SERVER_RUNNING_MESSAGE} ${PORT}`);
    if (IS_DEVELOPMENT) open(`http://localhost:${PORT}`);
  });
