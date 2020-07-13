import del from 'del'
import color from 'ansi-colors'
import log from 'fancy-log'


import config from '../config'

export default function (cb) {
	del([
		config.dest.root
	])
	.then(paths => {
		log(color.magenta.bgWhite(' Deleted: DIST! '));
		cb();
	})
};