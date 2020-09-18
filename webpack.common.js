const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           },
           //saya pisah webpack untuk png dan jpg karena saat dibuild jadi satu, ada salah satu file yang error.
           {
             test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
             include: /images/,
             use: [
               {
                 loader: 'file-loader',
                 options: {
                  name: '[name].[ext]',
                  outputPath: 'images/',
                  publicPath: 'images/'
                  }
                },
               {
                 loader: "image-webpack-loader",
                 options: {
                   bypassOnDebug: true,
                   disable: true
                 }
               }
             ]
           },
           //saya pisah webpack untuk png dan jpg karena saat dibuild jadi satu, ada salah satu file yang error.
           {
               test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/gi,
               include: /images/,
               use: [
                 {
                   loader: 'file-loader',
                   options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images/'
                    }
                  },
                 {
                   loader: "image-webpack-loader",
                   options: {
                     bypassOnDebug: true,
                     disable: true
                   }
                 }
               ]
             }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: path.resolve(__dirname, "src/index.html"),
           filename: path.resolve(__dirname, "dist/index.html")
       }),
       new CopyWebpackPlugin({
         patterns: [{
           from: path.resolve(__dirname, "src/images"),
           to: path.resolve(__dirname, "dist/images")
         }]
       })
   ]
}
