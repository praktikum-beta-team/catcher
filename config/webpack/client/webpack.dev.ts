import { HotModuleReplacementPlugin, EnvironmentPlugin } from "webpack";
import { merge } from "webpack-merge";
import type { Configuration } from "webpack";

import base from "../webpack.base";
import { defaults } from "../../settings";

const { baseDomain, port, publicPath } = defaults;

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
  plugins: [
    new HotModuleReplacementPlugin(),
    new EnvironmentPlugin({
      BASE_DOMAIN: baseDomain,
      PORT: port,
      PUBLIC_PATH: publicPath,
    }),
  ],
});

export default config;
