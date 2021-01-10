import { merge } from "webpack-merge";
import nodeExternals from "webpack-node-externals";
import webpack from "webpack";
import { resolve } from "path";
const NodemonPlugin = require("nodemon-webpack-plugin");

import base from "../webpack.base";

module.exports = merge(base, {
  mode: "development",
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  target: "node",
  entry: "./server",
  output: {
    filename: "server.js",
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "null-loader",
      },
    ],
  },
  plugins: [
    new NodemonPlugin({
      watch: resolve("./dist"),
    }),
    new webpack.ProvidePlugin({
      // TODO: Здесь хорошо бы замокать window, local storage и пр.
    }),
  ],
});
