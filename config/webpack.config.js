"use strict";

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/client/index.html",
    filename: "./index.html"
});

module.exports = {
    mode: process.env.NODE_ENV,
    entry: "./src/client/index.js",
    output: {
        path: path.resolve("dist"),
        filename: "[name].js"
    },
    resolve: {
        alias: {
            "@utils": path.resolve("src/client/utils"),
            "@scss": path.resolve("src/client/scss")
        },
        extensions: [".scss", ".css", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
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
                    }]
            }
        ]
    },
    plugins: [htmlWebpackPlugin]
};