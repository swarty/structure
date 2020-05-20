const webpack = require('webpack');
const path = require('path');
const config = require('./gulp/config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const babelPlugins = [
	"@babel/transform-runtime",
	"date-fns"
];
const babelPresets = [
	'@babel/preset-env'
];


function createConfig(env) {
	let isProduction, webpackConfig;

	if (env === undefined) env = process.env.NODE_ENV;
	isProduction = env === 'production';

	webpackConfig = {
		// mode: isProduction ? 'production' : 'development',
		mode: env,
		context: path.join(__dirname, config.src.js),
		entry: {
			app: './app.ts',
		},
		output: {
			path: path.join(__dirname, config.dest.js),
			filename: '[name].js',
			publicPath: 'js/',
		},
		devtool: isProduction ? '' : 'source-map',
		stats: 'minimal',
		plugins: [
			new webpack.NoEmitOnErrorsPlugin(),
			// exclude to much languages from package, try to include needed languages
			new webpack.ContextReplacementPlugin(
				/date\-fns\/locale/,
				/ru/
			),
			// new BundleAnalyzerPlugin({
			// 	analyzerMode: 'static',
			// 	openAnalyzer: true,
			// })
		],
		resolve: {
			extensions: ['.js', '.ts'],
			alias: {
				// TweenLite: path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js')
			},
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: [
						path.resolve(__dirname, 'node_modules')
					],
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: babelPresets,
								plugins: babelPlugins
							}
						},
						{
							loader: 'eslint-loader'
						}
					]
				},
				{
					test: /\.ts$/,
					exclude: [
						path.resolve(__dirname, 'node_modules')
					],
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									...babelPresets,
									'@babel/preset-typescript'
								],
								plugins: babelPlugins
							}
						}
					]
				},
				{ test: /\.(glsl|frag|vert)$/, loader: 'raw-loader', exclude: /node_modules/ },
				{ test: /\.(glsl|frag|vert)$/, loader: 'glslify-loader', exclude: /node_modules/ }
			]
		}
	};

	if (isProduction) {
		webpackConfig.plugins.push(
			new webpack.LoaderOptionsPlugin({
				minimize: true,
			})
		);
		
		webpackConfig.plugins.push(
			new BundleAnalyzerPlugin({
				analyzerMode: 'static',
				openAnalyzer: false,
			})
		)
	}

	return webpackConfig;
}

module.exports = createConfig();
module.exports.createConfig = createConfig;
