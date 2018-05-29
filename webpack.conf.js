const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
			}
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		stats: 'errors-only',
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'App',
			template: './src/index.html',
			filename: 'index.html',
			chunks: ['app'],
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	],
};