import gulp from 'gulp'
import { copyFonts, copyMedia, copyApi, copyDocs } from './copy'
import images from './images'
import pug from './pug'
import { scriptTask } from './scripts'
import styles from './styles'
import svg from './svg'

import config from '../config'

export default function watch () {
	// copy
	gulp.watch(config.src.fonts + '/*.{ttf,eot,woff,woff2}', gulp.series(copyFonts))
	gulp.watch(config.src.media + '/*', gulp.series(copyMedia))
	gulp.watch(config.src.root + '/api/*', gulp.series(copyApi))
	gulp.watch(config.src.root + '/docs/*', gulp.series(copyDocs))

	// images
	gulp.watch(config.src.svg + '/*.svg', gulp.series([svg]))
	gulp.watch(config.src.img + '/*.{jpg,png,jpeg,svg,gif}', gulp.series(images))
	

	// pug
	gulp.watch([
		config.src.templates + '/*.pug',
		config.src.templates + '/parts/*.pug',
		config.src.templates + '/layout/*.pug'
	], gulp.series(pug))
	
	// scripts
	gulp.watch(config.src.js + '/**/*.{ts,js}', gulp.series(scriptTask))
	
	// styles
	gulp.watch(config.src.sass + '/**/*.{scss,sass}', gulp.series(styles))
}