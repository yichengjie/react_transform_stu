"use strict" 
let path = require('path');
let webpack = require('webpack');

const vendors = [
  'antd',
  'react',
  'react-dom',
  'react-redux',
  'redux'
];

module.exports = {
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
