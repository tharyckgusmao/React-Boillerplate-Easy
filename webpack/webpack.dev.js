const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: { main: "./app/app.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["es2015", "react", "stage-0"],
          plugins: ["react-hot-loader/babel"]
        }
      },
      {
        test: /\.css$/,
        loader:
          "style-loader!css-loader?modules=false"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader"
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./app/index.tpl.html",
      filename: "index.html"
    }),
    new WebpackMd5Hash()
  ]
};
