"use strict";

const path = require('path')

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve("dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  target: 'node',
  resolve: {
    alias: {
      "vdoc": path.resolve(__dirname, "src")
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader?modules",
            options: {
              url: false,
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  devServer: {
    open: true
  }
};