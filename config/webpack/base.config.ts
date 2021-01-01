import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { EnvironmentPlugin } from "webpack";
import type { Configuration } from "webpack";

import { DEFAULT_SETTINGS } from "../vars";

const { BASE_URL, PORT } = DEFAULT_SETTINGS;

const config: Configuration = {
  entry: ["./src/app/index.tsx"],
  output: {
    path: path.resolve("dist"),
    filename: "[name].[fullhash].bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new EnvironmentPlugin({
      BASE_URL,
      PORT,
    }),
  ],
};

export default config;
