/* eslint-disable global-require */

import { environment } from "config/vars";

import { handleRender } from "./handleRender";

export default [
  ...(environment === "development" ? require("./devMiddlewares") : []),
  handleRender,
];
