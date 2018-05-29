const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "production",
  entry: { main: "./app/app.js" },
  output: {
    path: path.resolve("dist"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["es2015", "react", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        loader:
          "style-loader!css-loader?minimize=true&modules=false!postcss-loader"
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
    new StatsWriterPlugin("webpack.stats.json", {
      source: false,
      modules: false
    }),
    new ExtractTextPlugin("[name]-[hash].min.css"),

    new WebpackMd5Hash()
  ]
};
