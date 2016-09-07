"use strict"
/**
 * webpack.DllPlugin 的选项中， path 是manifest文件的输出路径；
 * name 是dll暴露的对象名，要跟 output.library 保持一致； 
 * context 是解析包路径的上下文，这个要跟接下来配置的dll user一致。
 */
let path = require('path');
let webpack = require('webpack');

const vendors = [
  'babel-polyfill',
  'antd',
  'react',
  'react-dom',
  'react-redux',
  'redux',
  'pubsub-js',
  'autobind-decorator',
  'jquery'
];

module.exports = {
  // output: {
  //   path: 'build/dll',
  //   filename: '[name].[chunkhash].js',
  //   library: '[name]_[chunkhash]',
  // },
  output:{
    filename:'[name].dll.js',
    path:path.resolve( __dirname, './build/dll' ),
    library:"[name]"
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
       compress: {
           warnings: false
       },
       output: {
         comments: false,
       },
    }),
    new webpack.DllPlugin({
      path:path.resolve( __dirname, './build/dll/[name]-manifest.json'),
      name:"[name]"
    }),
  ],
};
