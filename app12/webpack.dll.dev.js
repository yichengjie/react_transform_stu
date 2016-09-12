"use strict"
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
    new webpack.DllPlugin({
     path:path.resolve( __dirname, './build/dll/[name]-manifest.json'),
     name:"[name]"
   }),
  ],
};
