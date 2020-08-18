import { series, parallel } from 'gulp'

import { setDev, setProd } from './gulp/tasks/setEnv'
import { images } from './gulp/tasks/images'
import pug from './gulp/tasks/pug'
import scripts from './gulp/tasks/scripts'
import styles from './gulp/tasks/styles'
import svg from './gulp/tasks/svg'
import { initServer } from './gulp/tasks/server'
import watch from './gulp/tasks/watch'



exports.default = series(
	setDev,
	svg,
	parallel(
		pug,
		scripts,
		styles),
	initServer,
	watch
);


exports.build = parallel(
	setProd,
	svg,
	parallel(images,
		pug,
		scripts,
		styles)
);