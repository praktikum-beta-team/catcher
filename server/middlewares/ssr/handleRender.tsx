/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
/** TODO: Пока используем готовый пакет, но лучше написать свою утилиту */
import isObject from "is-object";

import App from "components/App";
import { createStore, getInitialState, PreloadedState } from "store";
import { RequestHandler, Response } from "express";

import { isDevelopment } from "config/vars";
import { TEXT } from "constants/text";

type AssetPaths = Record<string, string>;

const getAssetsFromDevMiddleware = (res: Response) => {
  const { devMiddleware } = res.locals.webpack;
  const { assetsByChunkName } = devMiddleware.stats.toJson();

  return assetsByChunkName;
};

const getAssetsFromCompiledBundle = () => {
  try {
    const compilationStats = require("../../../dist/compilation-stats.json");
    const { assetsByChunkName } = compilationStats;

    return assetsByChunkName;
  } catch {
    throw new Error(TEXT.SERVER.ERROR_NO_APP_BUNDLE);
  }
};

const normalizeAssets = (assets: AssetPaths) => {
  if (isObject(assets)) {
    return Object.values(assets);
  }

  return Array.isArray(assets) ? assets : [assets];
};

const renderFullPage = (
  content: string,
  preloadedState: PreloadedState,
  assetsByChunkName: Record<string, AssetPaths>
) => {
  return renderToStaticMarkup(
    <html lang="ru">
      <body className="body">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {normalizeAssets(assetsByChunkName.main)
            .filter((assetPath) => assetPath.endsWith(".css"))
            .map((assetPath) => (
              <link rel="stylesheet" href={assetPath} />
            ))}
        </head>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              "\\u003c"
            )}`,
          }}
        />
        {normalizeAssets({ ...assetsByChunkName.main, ...assetsByChunkName.vendor })
          .filter((assetPath) => assetPath.endsWith(".js"))
          .map((assetFile) => (
            <script src={assetFile} />
          ))}
      </body>
    </html>
  );
};

export const handleRender: RequestHandler = ({ url }, res) => {
  const initialState = getInitialState();

  const store = createStore(
    Object.assign(initialState, {
      auth: res.locals.auth,
    })
  );

  const preloadedState = store.getState();

  const content = renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  const assetsByChunkName = isDevelopment
    ? getAssetsFromDevMiddleware(res)
    : getAssetsFromCompiledBundle();

  res.send(renderFullPage(content, preloadedState, assetsByChunkName));
};
