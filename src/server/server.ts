import express from "express";
import morgan from "morgan";
import open from "open";

import ssr from "server/middlewares/ssr";
import { oAuthYandex } from "server/middlewares/oAuth";

import TEXT from "server/constants/text";
import { IS_DEVELOPMENT, PORT } from "config/vars";

const app = express();

app
  .use(morgan("tiny"))
  .use(express.static("./dist"))
  .get("/oAuth", oAuthYandex)
  .use(ssr)
  .listen(PORT, () => {
    console.log(`${TEXT.SERVER_RUNNING_MESSAGE} ${PORT}`);
    if (IS_DEVELOPMENT) open(`http://localhost:${PORT}`);
  });
