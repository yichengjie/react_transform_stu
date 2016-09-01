"use strict"
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports= {
  entry:{
    index:['babel-polyfill','./src/index.jsx']
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  //enable dev source map
  //devtool: 'source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  //babel重要的loader在这里
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: './src/template/index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
    }),
    new webpack.DllReferencePlugin({
      context:__dirname,
      manifest: require( './build/dll/vendor-manifest.json' )
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
          comments: false,
        },
    }),
    /*new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify( options.dev ? 'development' : 'production' )
      },
      "__SERVER__": isServer ? true : false
    })*/
  ]
}
