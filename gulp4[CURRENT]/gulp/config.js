import log from 'fancy-log'
import color from 'ansi-colors'

const destPath = 'dist'

export default {
	env       : 'development',
	production: true,
	src: {
			root         : 'src',
			templates    : 'src/templates',
			templatesData: 'src/templates/data',
			sass         : 'src/sass',
			// path for sass files that will be generated automatically via some of tasks
			js           : 'src/scripts',
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
			js   : destPath + '/scripts',
			img  : destPath + '/img',
			fonts: destPath + '/fonts',
			lib  : destPath + '/lib',
			media: destPath + '/video'
	},
	setEnv: function(env) {
		if (typeof env !== 'string') {
			this.env = 'development';
			return;
		}
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
}