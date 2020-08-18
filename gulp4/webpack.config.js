import webpack from 'webpack'
import path from 'path'
import config from './gulp/config'
import webpackBundleAnalyzer from 'webpack-bundle-analyzer'

const BundleAnalyzerPlugin = webpackBundleAnalyzer.BundleAnalyzerPlugin;


const babelPlugins = [
	"@babel/transform-runtime",
	"date-fns"
];
const babelPresets = [
	'@babel/preset-env'
];


export default function createConfig() {
	let isProduction, webpackConfig,
			env = process.argv[process.argv.length - 1].split('--')[1];

	if (env === undefined) env = process.env.NODE_ENV;
	isProduction = env === 'production';


	webpackConfig = {
		mode: env,
		context: path.join(__dirname, config.src.js),
		entry: {
			app: './app.js',
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
			)
		],
		resolve: {
			extensions: ['.js']
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
		
		// webpackConfig.plugins.push(
		// 	new BundleAnalyzerPlugin({
		// 		analyzerMode: 'static',
		// 		openAnalyzer: false,
		// 	})
		// )
	}

	return webpackConfig;
}
