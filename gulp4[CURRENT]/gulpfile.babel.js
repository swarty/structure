import { src, dest, series, parallel } from 'gulp'

import { setDev, setProd } from './gulp/tasks/setEnv'
import clean from './gulp/tasks/clean'
import { fonts, media, api, docs } from './gulp/tasks/copy'
import { images } from './gulp/tasks/images'
import pug from './gulp/tasks/pug'
import scripts from './gulp/tasks/scripts'
import styles from './gulp/tasks/styles'
import svg from './gulp/tasks/svg'
import server from './gulp/tasks/server'
import watch from './gulp/tasks/watch'



exports.default = series(
	parallel(setDev, clean),
	parallel(fonts, media, api, docs, 
		images,
		pug,
		scripts,
		styles,
		svg),
	server,
	watch
);


exports.build = series(
	parallel(setProd, clean),
	parallel(fonts, media, api, docs, 
		images,
		pug,
		scripts,
		styles,
		svg)
);