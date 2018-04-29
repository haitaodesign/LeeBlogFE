'use stirct'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractEextWebpackPlugin = require('extract-text-webpack-plugin')
const VueServerRendererPlugin = require('vue-server-renderer/server-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
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
  plugins: [
    new ExtractEextWebpackPlugin({
      filename: 'styles.[id].[name].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueServerRendererPlugin()
  ]
})
