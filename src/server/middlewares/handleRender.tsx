import React from "react";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import type { RequestHandler } from "express";

import { App } from "app/components/App";
import { createStore, PreloadedState } from "app/store";
import _assets from "../../../dist/assets.json";

const assets = _assets;

const renderFullPage = (html: string, preloadedState: PreloadedState) =>
  renderToStaticMarkup(
    <html lang="ru">
      <head>
        <link rel="stylesheet" href={assets.main.css} />
      </head>
      <body className="body">
        <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              "\\u003c"
            )}`,
          }}
        />
        <script src={assets.main.js} />
        <script src={assets.vendor.js} />
      </body>
    </html>
  );

export const handleRender: RequestHandler = (req, res) => {
  const store = createStore({
    auth: {
      isAuthenticated: false,
    },
  });

  const html = renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
};
