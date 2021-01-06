/* eslint-disable import/no-extraneous-dependencies */

import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import webpackConfig from "config/webpack/app.dev.config";

const compiler = webpack(webpackConfig);

export = [
  webpackHotMiddleware(compiler),
  webpackDevMiddleware(compiler, { serverSideRender: true }),
];
