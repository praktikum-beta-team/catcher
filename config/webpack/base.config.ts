import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import type { Configuration } from "webpack";

import { rootDir } from "../vars";

const config: Configuration = {
  entry: ["./src/app/index.tsx"],
  output: {
    path: path.join(rootDir, "dist"),
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
};

export default config;
