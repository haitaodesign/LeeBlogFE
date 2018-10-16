'use stirct'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueServerRendererPlugin = require('vue-server-renderer/server-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

let serverWebpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: path.join(__dirname, '../client/server-entry.js'),
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [{
      test: /\.styl(us)?$/,
      use: [ {
        loader: 'vue-style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'stylus-loader'
      }]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueServerRendererPlugin(),
    new VueLoaderPlugin()
  ]
})

serverWebpackConfig.resolve.alias['@model'] = path.join(__dirname, '../client/model/server-model.js')
module.exports = serverWebpackConfig
