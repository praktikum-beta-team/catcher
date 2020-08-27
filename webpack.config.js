const path = require("path");
const MiniCss = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[hash].bundle.js",
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: "dist",
    compress: true,
    port: 3000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader", "eslint-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        use: [
          MiniCss.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      title: "Catcher",
      template: "./www/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCss({ filename: "style.[hash].bundle.css", disable: false, allChunks: true }),
  ],
};
