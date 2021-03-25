const paths = require('./paths')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: `${paths.src}/index.js`
  },
  output: {
    path: `${paths.app}`,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'webgl sample page',
      template: `${paths.src}/index.html`
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      'earcut': 'earcut'
    })
  ]
}