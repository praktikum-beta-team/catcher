import express from "express";

import { yandexOAuthController } from "server/controllers";

export const router = express.Router();

router.get("/oauth", yandexOAuthController);
