import { HotModuleReplacementPlugin, EnvironmentPlugin } from "webpack";
import { merge } from "webpack-merge";
import type { Configuration } from "webpack";

import base from "./base.config";

const config: Configuration = merge(base, {
  entry: ["webpack-hot-middleware/client?path=__webpack_hmr&reload=true"],
  mode: "development",
  target: "web",
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new HotModuleReplacementPlugin()],
});

export default config;
