const path = require('path')
module.exports = {
  mode: process.env.NODE_ENV || 'production', // development || production
  target: 'web',
  entry: {
    app: path.join(__dirname, '../client/client-entry.js')
  },
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../public'),
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '..', 'client/components')
    }
  },
  module: {
    rules: [{
      test: /\.(vue|js|jsx)/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader'
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
  }
}
