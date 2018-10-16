'use strict'
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const env = require('../config/prod.env')
const baseWebpackConfig = require('./webpack.base.conf')
const VueClientConfig = require('vue-server-renderer/client-plugin')
const prodWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [{
      test: /\.styl(us)?$/,
      use: [ MiniCssExtractPlugin.loader, {
        loader: 'css-loader'
      }, {
        loader: 'stylus-loader'
      }]
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
    new MiniCssExtractPlugin({
      filename: 'styles.[name].[hash].css',
      allChunks: true
    }),
    new VueClientConfig(),
    new VueLoaderPlugin()
  ]
})
prodWebpackConfig.resolve.alias['@model'] = path.join(__dirname, '../client/model/client-model.js')
module.exports = prodWebpackConfig
