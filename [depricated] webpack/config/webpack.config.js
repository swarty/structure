// Libraries
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const babelOptions = require('./babel');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Files
const utils = require('./utils')
const plugins = require('../postcss.config');


// Configuration
module.exports = env => {


	// debug example;
	// console.log("Process --------------   ", process)
	const environment = env['NODE_ENV'],
				isDev = environment === 'development',
				fileName = (src, ext) => isDev ? `${src}/[name].${ext}` : `${src}/[name].[hash:7].${ext}`,
				publicPath = environment === 'gitlabhost'
					? '/some-folder-name/'
					: '/';

	// style loader
	const styleLoaders = _ => {
		return [
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					sourceMap: isDev,
					hmr: true,
					reloadAll: true,
					minimize: true
				},
			},
			{
				loader: 'css-loader',
				options: {
					sourceMap: isDev
				}
			}
		];
	}


	const jsLoaders = _ => {
		const loaders = [
			{
				loader: 'babel-loader',
				options: babelOptions(false)
			}
		];

		if(isDev) loaders.push('eslint-loader');

		return loaders;
	}


	const plugins = _ => {
		const base = [
			new CopyWebpackPlugin([
				{ from: 'assets/images', to: 'assets/images' }
			]),
			new MiniCssExtractPlugin({
				filename: fileName('assets/css', 'css'),
				chunkFilename: isDev ? 'assets/css/vendor.css' : 'assets/css/vendor.[hash:7].css',
			}),
	
	
			// // Desktop page
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'views/index.pug',
				inject: true
			}),
	
			...utils.pages(env),
	
			new WebpackNotifierPlugin({
				title: 'Your project'
			})
		];

		if(!isDev) base.push(new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
		}));
		

		return base;
	}


  return {
		context: path.resolve(__dirname, '../src'),
    entry: {
			app: ['@babel/polyfill', './app.js']
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: publicPath,
			filename: fileName('assets/js', 'js'),
    },
    devServer: {
			contentBase: path.resolve(__dirname, '../src'),
			watchContentBase: true,
			hot: true
		},
		devtool: isDev ? 'source-map': '',
		stats: 'minimal',
    resolve: {
      extensions: ['.js', '.ts'],
      alias: {
        source: path.resolve(__dirname, '../src'), // Relative path of src
        images: path.resolve(__dirname, '../src/assets/images'), // Relative path of images
				fonts: path.resolve(__dirname, '../src/assets/fonts'), // Relative path of fonts
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
					use: jsLoaders()
				},
				{
          test: /\.ts$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions(true)
            }
          ]
				},
        {
          test: /\.css$/,
          use: styleLoaders()
        },
        {
          test: /\.scss$/,
          use: [
						...styleLoaders(),
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: isDev
							}
						},
            {
							loader: 'sass-loader',
							options: {
								sourceMap: isDev
							}
						}
          ],
				},
        {
          test: /\.pug$/,
          use: [
            {
							loader: 'pug-loader',
							query: {
								pretty: true,
							},
            }
          ]
				},
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'file-loader',
          options: {
						name: 'assets/fonts/[name].[ext]',
          }
        },
        {
          test: /\.(mp4)(\?.*)?$/,
          loader: 'file-loader',
          options: {
						name: 'assets/videos/[name].[ext]',
          }
				},
				{
					test: /\.glsl$/,
					exclude: /node_modules/,
					use: [
						'raw-loader',
						'glslify-loader'
					]
				}
      ]
    },
    optimization: {
      splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						// cacheGroupKey here is `commons` as the key of the cacheGroup
						name: 'vendors',
						chunks: 'all',
						automaticNameDelimiter: '.',
					}
				}
      }
    },

    plugins: plugins()
  }
};
