import express from "express";
import { values } from "lodash/fp";
import cookieParser from "cookie-parser";

import { yandexOAuthController } from "server/controllers";
import { ssr, fetchData } from "server/middlewares";
import { ROUTES } from "constants/routes";

export const router = express.Router();

// prettier-ignore
router
  .get("/oauth", yandexOAuthController)
  .use(values(ROUTES), [
    cookieParser(),
    fetchData,
    ...ssr
  ]);
