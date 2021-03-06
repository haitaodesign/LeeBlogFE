'use stirct'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const env = require('../config/dev.env')
const baseWebpackConfig = require('./webpack.base.conf')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [{
      test: /\.styl(us)?$/,
      use: ['vue-style-loader', 'css-loader', {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }, 'stylus-loader']
    }]
  },
  devServer: {
    port: 8089,
    host: '0.0.0.0',
    headers: {'Access-Control-Allow-Origin': '*'},
    // 页面上显示编译错误
    overlay: {
      errors: true
    },
    hot: true,
    // history 模式
    historyApiFallback: {
      index: '/public/index.html'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('./client', `index.html`),
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueClientPlugin(),
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false // 默认不打开
    })
  ]
})

devWebpackConfig.resolve.alias['@model'] = path.join(__dirname, '../client/model/client-model.js')
module.exports = devWebpackConfig
