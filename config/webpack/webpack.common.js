const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "../..", "dist"),
    filename: "[name].[fullhash].bundle.js",
  },
  resolve: {
    modules: ["node_modules", path.join(__dirname, "../..", "src/app")],
    extensions: [".tsx", ".ts", ".js", ".jsx"],
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
    new HtmlWebPackPlugin({
      template: "./www/index.html",
      title: "Catcher",
    }),
  ],
};
