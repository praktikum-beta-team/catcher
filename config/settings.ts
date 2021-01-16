const _defaults = require("lodash/fp/defaults");

import { settingsEnv } from "./vars";

export const defaults = {
  baseDomain: "localhost",
  port: 3001,
  apiBaseUrl: "https://ya-praktikum.tech",
  apiBase: "/api",
  publicPath: "/",
};

export const settings: typeof defaults = _defaults(settingsEnv, defaults);

export const yandexOAuthSettings = {
  /**
   * TODO: ключи нельзя хранить в репозитории
   */
  clientId: "3bd97dc79c8a4398aecda914461a2c2a",
  clientSecret: "caee736bc0d2469f9ce683b424293f22",
};
