import webpack from 'webpack'
import webpackConfig from '../../webpack.config'
import notify from 'gulp-notify'

const webpackRunnner = webpackConfig();
const handler = (err, stats, cb) => {
	const { errors } = stats.compilation;
	if (err) throw new gutil.PluginError('webpack', err);
	if (errors.length > 0) {
		notify.onError({
			title: 'Webpack Error',
			message: '<%= error.message %>',
		}).call(null, errors[0]);
	}

	if (typeof cb === 'function') cb();
}



export default function scripts () { 
	return new Promise(resolve => 
		webpack(webpackRunnner, (err, stats) => handler(err, stats, resolve))
	) 
};