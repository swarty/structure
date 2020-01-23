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
const plugins = require('../postcss.config');

// style loader
const styleLoaders = [
	// { loader: MiniCssExtractPlugin.loader, options: {hmr: true, reloadAll: true}},
	MiniCssExtractPlugin.loader,
	{
		loader: 'css-loader',
		options: {
			sourceMap: true,
			minimize: true,
		},
	}
];


// Configuration
module.exports = env => {


	// debug example;
	// console.log("Process --------------   ", env['NODE_ENV'])
	const environment = env['NODE_ENV'],
				isDev = environment === 'development',
				fileName = (src, ext) => isDev ? `${src}/[name].${ext}` : `${src}/[name].[hash:7].${ext}`,
				publicPath = environment === 'gitlabhost'
					? '/some-folder-name/'
					: '/';

  return {
		context: path.resolve(__dirname, '../src'),
    entry: {
      app: './app.js'
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: publicPath,
			filename: fileName('assets/js', 'js'),
    },
    devServer: {
			contentBase: path.resolve(__dirname, '../src'),
			watchContentBase: true,
			// hot: true
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        source: path.resolve(__dirname, '../src'), // Relative path of src
        images: path.resolve(__dirname, '../src/assets/images'), // Relative path of images
				fonts: path.resolve(__dirname, '../src/assets/fonts'), // Relative path of fonts
				// media: path.resolve(__dirname, '../src/assets/media'), // Relative path of mediacontent
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
              options: { presets: ['@babel/preset-env'] }
            }
          ]
				},
				
        {
          test: /\.css$/,
          use: styleLoaders
        },
        {
          test: /\.scss$/,
          use: [
            ...styleLoaders,
            'postcss-loader',
            'sass-loader', // compiles Sass to CSS
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
        // {
        //   test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        //   loader: 'file-loader',
        //   options: {
				// 		name: `assets/images/[name].[ext]`,
        //   }
        // },
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
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
      ],
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

    plugins: [
      new CopyWebpackPlugin([
				{ from: 'assets/images', to: 'assets/images' },
				// { from: 'assets/media', to: 'assets/media' }
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
    ]
  }
};
