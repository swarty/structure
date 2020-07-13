import gulp from 'gulp';
import pug from './gulp/tasks/pug'
import styles from './gulp/tasks/styles'
import { scriptTask } from './gulp/tasks/scripts'
import { copy } from './gulp/tasks/copy'
import svgs from './gulp/tasks/svg'
import images from './gulp/tasks/images'
import clean from './gulp/tasks/clean'
import { startServer } from './gulp/tasks/server'
import { setDev, setProd } from './gulp/tasks/setEnv'
import watch from './gulp/tasks/watch'


// images
function media(done) {
	return gulp.series(
		images,
		svgs
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
export function build(done) {
	gulp.series([
		setProd,
		clean,
		init
	])(done)
}


// dev task
exports.default =  gulp.series([
	setDev, 
	clean,
	init,
	startServer,
	watch
])