/* eslint-disable global-require */

import { environment } from "config/vars";

import { handleRender } from "./render";

export default [
  ...(environment === "development" ? require("./dev-middlewares") : []),
  handleRender,
];
