import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import type { RequestHandler } from "express";

import { App } from "app/components/App";
import { createStore, PreloadedState } from "app/store";
import { TEXT } from "server/constants/text";

export const handleRender: RequestHandler = (req, res) => {
  const indexFile = path.resolve("./dist/index.html");
  const preloadedState: PreloadedState = {
    auth: {
      isAuthenticated: false,
    },
  };
  const store = createStore(preloadedState);

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
