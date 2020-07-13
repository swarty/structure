import del from 'del';
import color from 'ansi-colors';
import log from 'fancy-log';
import config from '../config';

export default function () {
	return del([
		config.dest.root + '/data',
		config.dest.root + '/mixins',
		// config.dest.root + '/api',
	])
	.then(paths => log('Deleted:', color.magenta(paths.join('\n'))))
};

// module.exports.build = build;