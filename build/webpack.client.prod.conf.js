'use strict'
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractEextWebpackPlugin = require('extract-text-webpack-plugin')
const env = require('../config/prod.env')
const baseWebpackConfig = require('./webpack.base.conf')
const VueClientConfig = require('vue-server-renderer/client-plugin')

const prodWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [{
      test: /\.styl$/,
      use: ExtractEextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }, 'stylus-loader']
      })
    }]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new HtmlWebpackPlugin({}),
    // contenthash报错
    new ExtractEextWebpackPlugin({
      filename: 'styles.[id].[name].css',
      allChunks: true
    }),
    new VueClientConfig()
  ]
})
prodWebpackConfig.resolve = {
  alias: {
    '@model': path.join(__dirname, '../client/model/client-model.js')
  }
}

module.exports = prodWebpackConfig
