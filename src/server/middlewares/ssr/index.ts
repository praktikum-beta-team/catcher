/* eslint-disable global-require */

import { IS_DEVELOPMENT } from "config/vars";

import { handleRender } from "./handleRender";

export default IS_DEVELOPMENT ? [...require("./devMiddlewares"), handleRender] : handleRender;
