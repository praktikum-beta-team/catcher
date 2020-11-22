import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import morgan from "morgan";

import { App } from "app/components/App";
import { TEXT } from "server/constants/text";
import { createStore } from "app/store";

const PORT = process.env.PORT || 3001;
const app = express();

const handleRender: express.RequestHandler = (req, res) => {
  const indexFile = path.resolve("./dist/index.html");
  const store = createStore();

  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(TEXT.ERROR_500);
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
  });
};

const handleStartup = () => {
  // TODO: Кажется, в этот коллбэк должна передаваться ошибка, но TS говорит, что у него нет параметров

  // if (error) {
  //   console.error(error)
  //   return
  //  }
  console.log(TEXT.RUNNING_ON.replace("%s", PORT.toString()));
};

app
  .use(morgan("tiny"))
  .use(express.static("./dist"))
  .get("/*", handleRender)
  .listen(PORT, handleStartup);
