const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  target: "web",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    open: true,
    historyApiFallback: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
});
