const path = require('path');
const nodeExternals = require('webpack-node-externals');

const isCoverage = process.env.NODE_ENV === 'coverage';

const config = {}
config.mode = 'development';
config.module = {
    rules: [
		isCoverage ? {
		  test: /\.(js|jsx)$/
		  , include: path.resolve('app') // instrument only testing sources with Istanbul, after ts-loader runs
		  , loader: 'istanbul-instrumenter-loader'
	  }: {}
		, {
			test: /\.scss$/
			, use: ['style-loader', 'css-loader?modules', 'sass-loader']
		}
		, {
			test: /\.css$/
			, use: ['style-loader', 'css-loader?modules']
		}
		, {
			test: /\.(js|jsx)$/
			, use: [
				{
					loader: 'babel-loader'
		            , options: {
		              cacheDirectory: true
		            }
				}
			]
		}
	]
}
config.target = 'node'
config.externals = [nodeExternals()]
config.devtool = "cheap-module-source-map"
config.resolve = {
    extensions: ['.js', '.jsx']
    , modules: [
      path.resolve('./app/')
      , path.resolve('./test/')
      , path.resolve('./node_modules')
    ]
}

module.exports = config
