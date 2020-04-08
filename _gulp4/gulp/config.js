
import log from 'fancy-log';
import color from 'ansi-colors';
import argv from 'minimist';
const argvConverted = process.argv.slice(2);
const production = argvConverted.production || argvConverted.prod || argvConverted.indexOf('build') !== -1 || false;

const destPath = 'build';

const config = {
		env       : 'development',
		production: production,
		src: {
				root         : 'src',
				templates    : 'src/templates',
				templatesData: 'src/templates/data',
				sass         : 'src/sass',
				// path for sass files that will be generated automatically via some of tasks
				js           : 'src/js',
				img          : 'src/img',
				svg          : 'src/img/svg',
				// path to svg sources for iconfont task
				fonts        : 'src/fonts',
				lib          : 'src/lib',
				media        : 'src/video'
		},
		dest: {
				root : destPath,
				html : destPath,
				css  : destPath + '/css',
				js   : destPath + '/js',
				img  : destPath + '/img',
				fonts: destPath + '/fonts',
				lib  : destPath + '/lib',
				media: destPath + '/video'
		},

		setEnv: function(env) {
			if (typeof env !== 'string') return;
			this.env = env;
			this.production = env === 'production';
			process.env.NODE_ENV = env;
		},

		logEnv: function() {
				log(
					'Environment:',
					color.white.bgRed(' ' + process.env.NODE_ENV + ' ')
				);
		},

		errorHandler: require('./util/handle-errors')
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
