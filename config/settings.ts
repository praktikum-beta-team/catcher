const _defaults = require("lodash/fp/defaults");

import { settingsEnv } from "./vars";

export const defaults = {
  baseUrl: "https://localhost",
  port: 3001,
  apiBaseUrl: "https://ya-praktikum.tech",
  apiBase: "/api",
  publicPath: "/",
};

export const settings = _defaults(settingsEnv, defaults);
