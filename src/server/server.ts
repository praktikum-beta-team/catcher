import express from "express";
import morgan from "morgan";
import open from "open";
import { createProxyMiddleware } from "http-proxy-middleware";

import { ROUTES } from "app/constants/routes";
import ssr from "server/middlewares/ssr";
import { yandexOAuth } from "server/middlewares/yandexOAuth";

import TEXT from "server/constants/text";
import { IS_DEVELOPMENT, PORT } from "config/vars";

const proxyMiddleware = createProxyMiddleware({
  target: "https://ya-praktikum.tech",
  changeOrigin: true,
});

const app = express();

app
  .use(express.static("./dist"))
  .use("/api", proxyMiddleware)
  .get(ROUTES.OAUTH, yandexOAuth)
  .use(ssr)
  .use(morgan("tiny"))
  .listen(PORT, () => {
    console.log(`${TEXT.SERVER_RUNNING_MESSAGE} ${PORT}`);
    if (IS_DEVELOPMENT) open(`http://localhost:${PORT}`);
  });
