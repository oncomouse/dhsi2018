const path = require('path');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

var webpackConfig = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'hidden-source-map' : 'cheap-module-source-map'
  , entry: {
    js: [
			'index'
		]
  }
  , output: {
    path: path.resolve('./build/')
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
};

module.exports = webpackConfig;
