const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack');
const ExtractEextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    target: 'web',
    entry: {
        app: path.join(__dirname, '../client/main.js')
    },
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader',
        }, {
            test: /\.(gif|jpg|jpeg|png|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'resources/[path][name].[hash:8].[ext]'
                }
            }]
        }]
    },
}