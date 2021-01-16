import { readFileSync } from "fs";
import { resolve } from "path";
import https from "https";

import { settings } from "config/settings";
import { TEXT } from "constants/text";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const app = require("./app");

const key = readFileSync(resolve("./config/ssl/localhost.key"));
const cert = readFileSync(resolve("./config/ssl/localhost.crt"));

const server = https.createServer({ key, cert }, app);

server.listen(settings.port, () => {
  console.log(`${TEXT.SERVER.SERVER_RUNNING_MESSAGE} ${settings.port}`);
});
