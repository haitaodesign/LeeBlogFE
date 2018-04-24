'use stirct'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractEextWebpackPlugin = require('extract-text-webpack-plugin');
const env = require('../config/dev.env')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: process.env.NODE_ENV,
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            }, 'sass-loader']
        }]
    },
    devServer: {
        port: 8081,
        host: '0.0.0.0',
        // 页面上显示编译错误
        overlay: {
            errors: true
        },
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': env,
        }),
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractEextWebpackPlugin('styles.[contentHash:8].css'),
    ]

})

module.exports = devWebpackConfig