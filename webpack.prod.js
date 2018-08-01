const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
//获取环境变量
function getENV(param) {
  return (process.env[param] || '').trim();
}

module.exports = {
  entry: {
    app: path.join(__dirname, './src/main.js'),
    vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'prop-types', 'redux-thunk'],
    // lib: ['antd-mobile']
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash:5].js',
    publicPath: './',
  },

  devServer: {
    port: 9528,
    open: false
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(less|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          }]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]',
          // outputPath: './css/img/'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },

  resolve: {
    // 现在你import文件的时候可以直接使用import Func from './file'，不用再使用import Func from './file.js'
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/inedx.html'),
      inject: true
    }),
    new ExtractTextPlugin('css/style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      // names: ['vendor', 'lib', 'manifest']
      names: ['vendor', 'manifest']
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      Util: [path.resolve(__dirname,'./src/Util/index.js'),'default'],
      UrlCfg: [path.resolve(__dirname,'./src/config/UrlCfg.js'),'default'],
      Request: [path.resolve(__dirname,'./src/Util/request.js'),'default']
    }),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify(getENV('NODE_ENV'))
      }
    }),
  ]

}
