const HtmlWebpackPlugin = require("html-webpack-plugin");
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
           {
             test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
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
           template: "./src/index.html",
           filename: "index.html"
       })
   ]
}
