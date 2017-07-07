var webpack = require('webpack');
var path = require('path');

var nodeEnv = process.env.NODE_ENV || 'development';
var isProd = nodeEnv === 'production';

// Plugins we only need in production:
var productionPlugins = [
	new webpack.LoaderOptionsPlugin({
		minimize: true,
		debug: false
	}),
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		output: {
			comments: false
		},
		sourceMap: false
	})
];

var webpackConfig = {
	devtool: isProd ? 'hidden-source-map' : 'eval',
	entry: {
		js: [
			'index'
		]
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js'],
		modules: [
			path.resolve('./app/'),
			path.resolve('./node_modules')
		]
	},
	module: {
		loaders:[
			{
				test: /\.(js)$/,
				exclude: /(node_modules|bower_components)/,
				loaders: [
					{
						loader: 'babel-loader',
						query: {
							cacheDirectory: true,
							presets: [['es2015', { "modules": false }], 'stage-0'],
							plugins: ['transform-runtime']
						},
					
					}
				],

			}
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin,
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
		})
	],
	devServer: {
		contentBase: './app',
		noInfo: false,
		historyApiFallback: true
	}
}

// Load production plugins:
if(isProd) {
	webpackConfig.plugins = webpackConfig.plugins.concat(productionPlugins)
}

module.exports = webpackConfig;