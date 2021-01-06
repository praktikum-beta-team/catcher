import { merge } from "webpack-merge";
import nodeExternals from "webpack-node-externals";
import webpack from "webpack";

import base from "./base.config";

module.exports = merge(base, {
  mode: "production",
  target: "node",
  entry: "./server/app.ts",
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
    new webpack.ProvidePlugin({
      // TODO: Здесь хорошо бы замокать window, local storage и пр.
    }),
  ],
});
