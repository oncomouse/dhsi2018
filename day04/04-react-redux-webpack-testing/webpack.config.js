const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const noop = require('noop-webpack-plugin');

// Read in package.json:
const packageJSON = JSON.parse(
  fs.readFileSync(
    path.join('.', 'package.json')
  )
);

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

// Extract APP_TITLE from package.json:
const APP_TITLE = (
  Object.prototype.hasOwnProperty.call(packageJSON, 'title')
) ? packageJSON['title'] : 'My Sample App';

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
                , importLoaders: 0
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
            {
              /* CSS Modules Code */
              loader: 'css-loader'
              , options: {
                modules: false
                , importLoaders: 1
              }
            }
            , 'sass-loader'
          ]
        }))
      }
    ]
  }
  , plugins: [
    // Generate style.css file:
    new ExtractTextPlugin({
      filename: 'style.css'
      , allChunks: true
    })
    // Build the HTML file without having to include it in the app:
    , new HtmlWebpackPlugin({
      files: {
        css: isProd ? ['style.css'] : []
        , js: ['bundle.js']
      }
      , title: APP_TITLE
      , template: path.join('.','app','template','index.html')
      , chunksSortMode: 'dependency'
      , chunks: {
        head: {
          css: isProd ? ['style.css'] : []
        }
        , main: {
          entry: ['bundle.js']
        }
      }
    })
    // Enable HMR:
    , isProd ? noop() : new webpack.HotModuleReplacementPlugin()
    // Configure SASS:
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
    // Define global variables:
    , new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
      , 'APP_TITLE': JSON.stringify(APP_TITLE)
    })
    // Optimization & Build Plugins:
    , isProd ? new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
        , output: {
          comments: false
        }
      }
      , sourceMap: false
    }) : noop()
    , isProd ? new webpack.optimize.AggressiveMergingPlugin() : noop()
    , isProd ? new webpack.optimize.OccurrenceOrderPlugin : noop()
  ]
  // Recommended Webpack optimizations:
  , optimization: {
    noEmitOnErrors: !isProd
    , concatenateModules: isProd
    , namedModules: !isProd
  }
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
    , hot: true
  }
};

  module.exports = webpackConfig;
