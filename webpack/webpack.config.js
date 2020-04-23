const path = require('path'),
			CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin,
			CopyWebpackPlugin = require('copy-webpack-plugin'),
			MiniCssExtractPlugin = require('mini-css-extract-plugin'),
			OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin'),
			TerserWebpackPlugin = require('terser-webpack-plugin'),
			HtmlWebpackPlugin = require('html-webpack-plugin');

// cross-env кроссплатформенно указывать переменные
// console.log(process.argv)
// console.log(module)
// const mode = process.argv[2];
// const isDev = process.env.NODE_ENV;

module.exports = () => {
	const environment = process.env['NODE_ENV'];
	const publicPath = environment === 'gitlabhost'
		? '/some-public-path/'
		: '';
	const localSrc= environment !== 'gitlabhost' ? './' : '';
	const isDev = environment === 'development',
				isProd = !isDev;

	const stylesCommon = () => {
		return [
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					hmr: isDev,
					reloadAll: true,
					publicPath: '../'
				}
			},
			{
				loader: 'css-loader',
				options: {
					sourceMap: isDev
				}
			}
		]
	}

	const babelSettings = (type = 'js') => {
		const config = {
			exclude: /node_modules/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						sourceMaps: type === 'js' ? false : true,
						presets: [
							'@babel/preset-env',
							...(type === 'ts' ? ['@babel/preset-typescript'] : []),
						],
						plugins: []
					}
				},
				...(isDev ? ['eslint-loader'] : [])
			]
		}
		return config;
	}

	const fileLoader = () => {
		return {
			loader: 'file-loader',
			options: {
				name: '[path][name].[ext]',
			}
		}
	}

	return {
		context: path.resolve(__dirname, './src'),
		entry: {
			app: ['@babel/polyfill', './app.js']
		},
		output: {
			path: path.resolve(__dirname, './build/'),
			publicPath: publicPath,
			filename: localSrc + 'js/[name].js'
		},
		devtool: isDev ? 'source-map' : false,
		stats: 'minimal',
		resolve: {
			extensions: ['.js', '.ts'],
			alias: {
				// aliases with relative path to "centext" property of obj
				img: './images', // Relative path of images
				fonts: './fonts', // Relative path of fonts
				styles: './styles', // Relative path of styles
				scripts: './scripts', // Relative path of scripts
				views: './views', // Relative path of template: pug/html
			}
		},
		optimization: {
			splitChunks: {
				chunks: 'all'
			},
			...(isProd && {
				minimizer: [
					new OptimizeCssAssetWebpackPlugin(),
					new TerserWebpackPlugin()
				]
			})
		},
		devServer: {
			port: 8080,
			hot: isDev,
			// remove for hot reloading styles and js
			// watchContentBase: true
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './index.html',
				minify: false
			}),
			new CleanWebpackPlugin(),
			new CopyWebpackPlugin(
				[
					{ from: './data', to: path.resolve(__dirname, './build/data/') },
					// { from: './video', to: path.resolve(__dirname, './build/video/') },
				]
			),
			new MiniCssExtractPlugin({
				filename: localSrc + 'css/[name].css'
			})
		],
		module: {
			rules: [
				// simple styles
				{
					test: /\.css$/,
					use: stylesCommon()
				},
				// style preprocessors
				{
					test: /\.s[ac]ss$/,
					use: [
						...stylesCommon(),
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: isDev,
								plugins: [
									require('autoprefixer'),
									require('css-mqpacker'),
									require('cssnano')({
										preset: [
											'default', {
												discardComments: {
													removeAll: true
												}
											}
										]
									})
								]
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: isDev
							}
						}
					]
				},
				// js scripts
				{
					test: /\.js$/,
					...babelSettings()
				},
				// ts scripts
				{
					test: /\.ts$/,
					...babelSettings('ts')
				},
				// images
				{
					test: /\.(png|jpg|jpeg|pdf|gif|svg)$/,
					...fileLoader()
				},
				// fonts
				{
					test: /\.(woff|woff2|ttf|eof)$/,
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]'
					}
				},
				// data files
				{
					test: /\.xml$/,
					use: ['xml-loader']
				},
				{
					test: /\.csv$/,
					use: ['csv-loader']
				},
				// graphic loaders
				{
					test: /\.glsl$/,
					exclude: /node_modules/,
					use: [
						'raw-loader',
						'glslify-loader'
					]
				}
			]
		}
	}
}