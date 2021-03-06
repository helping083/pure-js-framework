const webpack = require('webpack');
const path = require('path');
const HtmlWebpuckPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname,'dist')
  },
  devtool: 'eval',
  devServer: {
    port: 4200
  },
  plugins: [
    new HtmlWebpuckPlugin({
      template: './index.html'
    })
  ]
}