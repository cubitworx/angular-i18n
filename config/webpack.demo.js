var fs  = require('fs');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var helpers = require('./helpers');
var webpackCommon = require('./webpack.common.js');

const PACKAGE = JSON.parse( fs.readFileSync('./package.json').toString() );
const METADATA = {
	title: PACKAGE.name,
	description: PACKAGE.description,
	baseUrl: '/',
	isDevServer: helpers.isWebpackDevServer()
};

module.exports = webpackMerge(
	webpackCommon.angularWorkaround,
	webpackCommon.defaultDefinePlugin,
	webpackCommon.imageLoader,
	webpackCommon.resolve,
	webpackCommon.stylesExtracted,
	webpackCommon.common,
	{

		devtool: 'cheap-module-eval-source-map',

		entry: [
			'./demo/polyfills.ts', './demo/main.ts'
		],

    module: {
			rules: [

				{
						test: /\.scss$/,
						use: [ 'css-loader', 'sass-loader' ],
						include: /demo(\\|\/)main\.scss$/
				},

			]
		},

		output: {
			path: helpers.root('demo'),
			publicPath: '/',
			filename: '[name].bundle.js',
			chunkFilename: '[id].chunk.js'
		},

		plugins: [

			new HtmlWebpackPlugin({
				template: 'demo/index.html',
				chunksSortMode: 'dependency',
				metadata: METADATA,
				inject: 'body'
			})

		],

		devServer: {
			historyApiFallback: true,
			stats: 'minimal'
		}

	}
);
