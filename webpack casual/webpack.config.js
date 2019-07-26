// Libraries
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// Files
const utils = require('./utils')
const plugins = require('./postcss.config');

// Configuration
module.exports = env => {

	return {
		context: path.resolve(__dirname, './src'),
		entry: {
			app: './app.js'
		},
		output: {
			path: path.resolve(__dirname, './dist'),
			publicPath: '/',
			filename: 'js/[name].[hash:7].js'
		},
		devServer: {
			contentBase: path.resolve(__dirname, './src'),
		},
		resolve: {
			extensions: ['.js'],
			alias: {
				source: path.resolve(__dirname, './src'), // Relative path of src
				images: path.resolve(__dirname, './src/assets/images'), // Relative path of images
				fonts: path.resolve(__dirname, './src/assets/fonts'), // Relative path of fonts
			}
		},

		/*
			Loaders with configurations
		*/
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: [/node_modules/],
					use: [
						{
							loader: 'babel-loader',
							options: { 
								presets: ['@babel/preset-env'],
								cacheDirectory: true,
							}
						}
					]
				},
				{
					test: /\.css$/,
					use: [
						env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								importLoaders: 0,
								sourceMap: true,
								minimize: true,
								colormin: false,
							},
						},
					],
				},
				{
					test: /\.scss$/,
					use: [
						env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
						{ loader: 'css-loader', options: { importLoaders: 2, minimize: true, sourceMap: true, colormin: false } }, // translates CSS into CommonJS
						'postcss-loader',
						'sass-loader', // compiles Sass to CSS
					],
				},
				{
					test: /\.sass$/,
					use: [
						env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
						{ loader: 'css-loader', options: { importLoaders: 2, minimize: true, sourceMap: true, colormin: false } }, // translates CSS into CommonJS
						'postcss-loader',
						'sass-loader', // compiles Sass to CSS
					],
				},
				{
					test: /\.pug$/,
					use: [
						{
							loader: 'pug-loader',
							options: {
								pretty: true
							}
						}
					]
				},
				{
					test: /\.(png|svg|jpg|gif|ico)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
									name: 'assets/images/[name].[ext]'
							}
						}
					]
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
									name: 'assets/fonts/[name].[ext]'
							}
						}
					]
				}
			]
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					cache: true,
					parallel: true,
					sourceMap: true,
				}),
			],
			splitChunks: {
				cacheGroups: {
					default: false,
					vendors: false,
					// vendor chunk
					vendor: {
						filename: 'js/vendor.[hash:7].js',
						// sync + async chunks
						chunks: 'all',
						// import file path containing node_modules
						test: /node_modules/
					}
				}
			}
		},

		plugins: [
			new CopyWebpackPlugin([
				{ from: 'assets/images/favicons/', to: 'images/' },
				{ from: 'assets/fonts/', to: 'fonts/' },
				// { from: 'assets/videos/', to: 'videos/' }
			]),
			new MiniCssExtractPlugin({
				filename: 'css/[name].[hash:7].css',
				chunkFilename: '[id].css',
			}),

			/*
				Pages
			*/

			// // Desktop page
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'views/index.pug',
				inject: true
			}),

			...utils.pages(env),
			// ...utils.pages(env, 'blog'),
			new WebpackNotifierPlugin({
				title: 'Your project'
			})
		]
	}
};
