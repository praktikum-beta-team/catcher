import express from "express";
import morgan from "morgan";

import ssr from "server/middlewares/ssr";

import TEXT from "server/constants/text";
import { PORT } from "config/vars";

const app = express();

app
  .use(morgan("tiny"))
  .use(express.static("./dist"))
  .use(ssr)
  .listen(PORT, () => {
    console.log(`${TEXT.SERVER_RUNNING_MESSAGE} ${PORT}`);
  });
