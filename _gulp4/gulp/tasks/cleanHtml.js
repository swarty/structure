import del from 'del';
import color from 'ansi-colors';
import log from 'fancy-log';
import config from '../config';

const build = () => {
  return function () {
    return del([
			config.dest.root + '/data',
			config.dest.root + '/mixins',
		])
		.then(paths => log('Deleted:', color.magenta(paths.join('\n'))))
  };
};

module.exports.build = build;