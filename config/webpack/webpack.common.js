const path = require("path");

module.exports = {
  entry: "./src/app/index.tsx",
  output: {
    path: path.resolve(__dirname, "../..", "dist"),
    filename: "[name].[fullhash].bundle.js",
  },
  resolve: {
    modules: ["node_modules", path.join(__dirname, "../..", "src")],
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
};
