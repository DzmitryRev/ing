const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode,
  target,
  //   plugins,
  devtool: "source-map",
  entry: "./src/main.js",
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    port: 9000,
    compress: true,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name][ext][query]",
    clean: true,
  },

  module: {
    rules: [
      { test: /\.(html)$/, use: ["html-loader"] },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        type: mode === "production" ? "asset" : "asset/resource",
      },
      {
        test: /\.(png)$/,
        type: mode === "production" ? "asset" : "asset/inline",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: "[name].[contenthash].css",
    // }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
