var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './components/index.js');
var BUILD_PATH = path.resolve(__dirname, './build');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    APP_PATH
  ],
  plugins:[
    new ExtractTextPlugin('styles/index.css')
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader?presets[]=es2015,presets[]=react']
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=50000'
    }]
  }
}
