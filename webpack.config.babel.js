import webpack from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './public/index.ejs')
    })
  ]
};
