const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

var webpackConfig = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd
    ? 'hidden-source-map'
    : 'cheap-module-source-map',
  entry: {
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
        ]
      }
      /*
        CSS loader for the module files (in
        app/stylesheets/components). These are intended to be
        styles for individual React components, which will have a
        unique name space.
      */
      , {
        test: /\.css$/
        , exclude: /global\.css$/
        , use: ['extracted-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader'
          , use: [
            {
              /* CSS Modules Code */
              loader: 'css-loader'
              , options: {
                modules: true
                , importLoaders: 1
                , localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          ]
        }))
      }
      /*
      Loader code for a universal SCSS file. These styles will
      be (as long as you remember to import them into
      app/index.js) loaded for every component and are not
      uniquely namespaced as the module SCSS code above is.
      This file lives in app/stylesheets/global.scss.
       */
      , {
        test: /\.css$/
        , include: /global\.css$/
        , use: ['extracted-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader'
          , use: [
            'css-loader'
          ]
        }))
      }
      /*
        SASS loader code for the module files (in
        app/stylesheets/components). These are intended to be
        styles for individual React components, which will have a
        unique name space.
      */
      , {
        test: /\.scss$/
        , exclude: /global\.scss$/
        , use: ['extracted-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader'
          , use: [
            {
              /* CSS Modules Code */
              loader: 'css-loader'
              , options: {
                modules: true
                , importLoaders: 1
                , localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
            , 'sass-loader'
          ]
        }))
      }
      /*
        Loader code for a universal SCSS file. These styles will
        be (as long as you remember to import them into
        app/index.js) loaded for every component and are not
        uniquely namespaced as the module SCSS code above is.
        This file lives in app/stylesheets/global.scss.
      */
      , {
        test: /\.scss$/
        , include: /global\.scss$/
        , use: ['extracted-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader'
          , use: [
            'css-loader'
            , 'sass-loader'
          ]
        }))
      }
    ]
  }
  , plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
      , allChunks: true
    })
    , new webpack.LoaderOptionsPlugin({
      test: /\.scss$/
      , options: {
        context: __dirname
        , sassLoader: {
          includePaths: [
            './node_modules'
            , './bower_components'
            , './app/stylesheets'
          ]
        }
      }
    })
    , new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    }) 
  ]
  , resolve: {
    extensions: [
      '.js', '.jsx'
    ]
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
