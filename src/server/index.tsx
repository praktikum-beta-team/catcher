import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import morgan from "morgan";

import { App } from "app/components/App";
import { TEXT } from "server/constants/text";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("./dist"));

app.use(morgan("tiny"));

app.get("*", (req, res) => {
  const indexFile = path.resolve("./dist/index.html");

  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(TEXT.ERROR_500);
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
  });
});

app.listen(PORT, () => {
  console.log(TEXT.SERVER_START_MESSEGE.replace("%s", String(PORT)));
});
