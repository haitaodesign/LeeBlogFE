const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack');
const ExtractEextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode: 'development',
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
            test: /\.scss$/,
            use: ExtractEextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                }, 'sass-loader']
            })
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
            'process.env.NODE_ENV': '"development"',
        }),
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}