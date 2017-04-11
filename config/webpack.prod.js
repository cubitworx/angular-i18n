var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {

  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true // https://github.com/angular/angular/issues/10618
      }
    }),

    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })

  ]

});