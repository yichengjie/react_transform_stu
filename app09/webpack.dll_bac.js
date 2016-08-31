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
  output: {
    path: 'build/dll',
    filename: '[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]_[chunkhash]',
      context: __dirname,
    }),
  ],
};