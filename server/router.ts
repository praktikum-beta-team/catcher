import express from "express";

import { yandexOAuthController } from "server/controllers";
import { ROUTES } from "constants/routes";

export const router = express.Router();

router.get(ROUTES.OAUTH, yandexOAuthController);
