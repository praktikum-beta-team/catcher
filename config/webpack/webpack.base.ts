import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

import type { Configuration } from "webpack";

const config: Configuration = {
  entry: ["./src"],
  output: {
    path: path.resolve("dist"),
    filename: "[name].[fullhash].bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
    publicPath: "/",
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

export default config;
