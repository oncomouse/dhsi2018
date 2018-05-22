const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const { ANALYZE } = process.env

const nodeEnv = process.env.NODE_ENV || 'development'
const isProd = nodeEnv === 'production'

var webpackConfig = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-module-source-map'
  , entry: {
    js: [
			'index'
		]
  }
  , output: {
    path: path.join(__dirname, 'build')
    , filename: 'bundle.js'
  }
  , module: {
    rules: [
      {
        test: /\.(jsx|js)$/
        , exclude: /(node_modules|bower_components)/
        , use: [
          {
            loader: 'babel-loader'
            , options: {
              cacheDirectory: true
            }
          }
        ],
      }
    ],
  }
  , resolve: {
    extensions: ['.js', '.jsx']
    , modules: [
      path.resolve('./app/')
      , path.resolve('./node_modules')
    ]
  }
  , devServer: {
    contentBase: './app'
    , noInfo: false
  }
}

module.exports = webpackConfig
