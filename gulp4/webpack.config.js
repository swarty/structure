const webpack = require('webpack');
const path = require('path');
const config = require('./gulp/config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const supportedLocales = ['en', 'uk', 'ru'];


function createConfig(env) {
  let isProduction,
		webpackConfig;

  if (env === undefined) {
    env = process.env.NODE_ENV;
  }

	isProduction = env === 'production';

  webpackConfig = {
    mode: isProduction? 'production' : 'development',
    context: path.join(__dirname, config.src.js),
    entry: {
      app: './app.js',
    },
    output: {
      path: path.join(__dirname, config.dest.js),
      filename: '[name].js',
      publicPath: 'js/',
    },
    devtool: isProduction ?
      'source-map' : '',
		stats: 'minimal',
    plugins: [
			new webpack.NoEmitOnErrorsPlugin(),
			new webpack.ContextReplacementPlugin(
				/date\-fns[\/\\]/,
				new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]`)
			)
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
								presets: [
									'@babel/preset-env'
								]
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
									'@babel/preset-env',
									'@babel/preset-typescript'
								]
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
