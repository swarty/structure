import gulp from 'gulp';
import pug from './gulp/tasks/pug'
import styles from './gulp/tasks/styles'
import { scriptTask } from './gulp/tasks/scripts'
import { copy } from './gulp/tasks/copy'
import images from './gulp/tasks/images'
import svgs from './gulp/tasks/svg'
import clean from './gulp/tasks/clean'
import { startServer } from './gulp/tasks/server'
import { setDev, setProd } from './gulp/tasks/setEnv'


// images
function media(done) {
	return gulp.series(
		svgs,
		images
	)(done)
}


// default tasks for work
function init (done) {
	return gulp.parallel([
		pug,
		styles,
		scriptTask,
		copy,
		media
	])(done)
}


// production task
export function build() {
	return gulp.series([
		setProd,
		clean,
		init
	])
}


// dev task
exports.default =  gulp.series([
	setDev, 
	clean,
	init,
	startServer
])