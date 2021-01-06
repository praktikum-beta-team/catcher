/* eslint-disable global-require */

import { isDevelopment } from "config/vars";

import { handleRender } from "./handleRender";

export default [...(isDevelopment ? require("./devMiddlewares") : []), handleRender];
