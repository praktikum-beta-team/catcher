/* eslint-disable import/no-extraneous-dependencies */

import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotmiddleware from "webpack-hot-middleware";

import webpackConfig from "config/webpack/app.dev.config";

const compiler = webpack(webpackConfig);

export = [
  webpackHotmiddleware(compiler),
  webpackDevMiddleware(compiler, { serverSideRender: true }),
];
