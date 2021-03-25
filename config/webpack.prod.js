const paths = require('./paths')
const { merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.app,
    publicPath: '/',
    filename: 'js/[name].js'
  },
  optimization: {
    mininize: true,
    runtimeChunks: {
      name: 'runtime'
    }
  }
})