"use strict"
let path = require('path');
let webpack = require('webpack');

const vendors = [
  'antd',
  'react',
  'react-dom',
  'react-redux',
  'redux',
  'pubsub-js',
  'autobind-decorator'
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
