var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var helpers = require('./helpers');

var webpackCommon = {
	extractStyles: {
		demo: new ExtractTextPlugin( 'bundles/demo.bundle.css?[contenthash]' )
	},
	sourcePath: helpers.root('src'),
	tsconfig: helpers.root('tsconfig.json')
};

// demo
webpackCommon.common = {

	module: {
		rules: [

			// typescript
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'awesome-typescript-loader',
						options: { configFileName: webpackCommon.tsconfig }
					}, 'angular2-template-loader'
				]
			},

			// html
			{
				test: /\.html$/,
				use: 'html-loader',
				exclude: /index\.html$/
			},

			// component scss
			{
				test: /\.scss$/,
				use: ['to-string-loader', 'css-loader', 'sass-loader'],
				include: /\.component\.scss$/
			}

		]
	},

	plugins: [
		webpackCommon.extractStyles.demo
	]

};

// angularWorkaround
webpackCommon.angularWorkaround = {

	plugins: [

		// Workaround for angular/angular#11580
		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			// location of src
			webpackCommon.sourcePath,
			// Angular Async Route paths relative to this root directory
			{ }
		),

		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)@angular/,
			// location of src
			webpackCommon.sourcePath,
			// Angular Async Route paths relative to this root directory
			{ }
		)

	]

};

// defaultDefinePlugin
webpackCommon.defaultDefinePlugin = {

	plugins: [

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify( process.env.NODE_ENV )
			}
		}),

	]

};

// resolve
webpackCommon.resolve = {

	resolve: {
		extensions: ['.ts', '.js']
	}

};

module.exports = webpackCommon;
