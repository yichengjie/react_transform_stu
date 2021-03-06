"use strict"
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports= {
  entry:{
    index:['./src/index.jsx'],
    edit:'./src/edit.jsx',
    editGroup:'./src/editGroup.jsx'
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js'
  },
  //enable dev source map
  devtool: 'source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
        src:APP_PATH
      }
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
      },
      {
         test: /\.(jpg|png|gif)$/, 
         loader: "url?limit=8192&name=images/[name].[hash:8].[ext]"
      },
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: './src/template/index.html',
      chunks: ['index']
    }),
    new HtmlwebpackPlugin({
      filename: 'edit.html',
      template: './src/template/index.html',
      chunks: ['edit']
    }),
    new HtmlwebpackPlugin({
      filename: 'editGroup.html',
      template: './src/template/index.html',
      chunks: ['editGroup']
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
    /*new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify( options.dev ? 'development' : 'production' )
      },
      "__SERVER__": isServer ? true : false
    })*/
  ]
}
