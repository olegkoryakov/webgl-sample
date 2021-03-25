const webpack = require('webpack')
const { merge } = require('webpack-merge')
const config = require('./webpack.config')
const paths = require('./paths')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.src,
    open: true,
    compress: true,
    port: 3030
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})