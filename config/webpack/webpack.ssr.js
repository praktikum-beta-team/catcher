const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  target: "node",
  entry: "./src/server/index.tsx",
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
