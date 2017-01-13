var webpack = require('webpack');
var path = require('path');
var WrapperPlugin = require('wrapper-webpack-plugin');

var APP_DIR = path.resolve(__dirname, './src');
var NPM_DIR = path.resolve(__dirname, './node_modules');

var config = {
	entry: [APP_DIR + '/index.jsx'],
	output: {
		library: ['PSLIB','ReactDNDBug'],
		libraryTarget: 'umd',
		path: './build',
		filename: 'react_dnd_bug.js'
	},
	debug: true,
	devtool: "source-map",
	externals: {
	},
	module : {
		loaders: [
			{
			  test: /\.css$/,
			  loader: 'style-loader!css-loader'
			},
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					"plugins": [
						"transform-class-properties",
						"transform-es3-member-expression-literals",
						"transform-es3-property-literals",
						"transform-runtime",
						"transform-decorators-legacy"
					],
					"presets": [
						"babel-preset-es2015",
						"babel-preset-react",
						"babel-preset-stage-2"
					]
				}
			}
		],
		postLoaders: [
			{ test: /\.js$/, loader: 'es3ify-loader' }
		]
	},
	plugins: [
		// Interate with PSLIB module wait support
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;