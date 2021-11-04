const path = require("path");
//const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "reactApp", "index.js"),
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.png|svg|jpg|gif$/,
            use: ["file-loader"],
          },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/"
    }, 
    plugins: [
        new NodemonPlugin({
            script: './server.js',
            watch: path.resolve('./public'),
        })
    ],
    
};