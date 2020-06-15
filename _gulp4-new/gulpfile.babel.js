import gulp from 'gulp';
import pug from './gulp/tasks/pug'
import styles from './gulp/tasks/styles'
import { scriptTask } from './gulp/tasks/scripts'
import { copy } from './gulp/tasks/copy'
import images from './gulp/tasks/images'
import svgs from './gulp/tasks/svg'
import clean from './gulp/tasks/clean'
import { serverFunc } from './gulp/tasks/server'
import { setDev, setProd } from './gulp/tasks/setEnv'


// images
gulp.task('images', gulp.series([svgs, images]))

// default tasks for work
gulp.task('init', gulp.parallel([pug, styles, scriptTask, copy, 'images']))

// dev task
gulp.task('default', gulp.series([setDev, clean, 'init', serverFunc]))
// prod task
gulp.task('build', gulp.series([setProd, clean, 'init']))

// const argvConverted = process.argv;
// const production = argvConverted.production || argvConverted.prod || argvConverted.indexOf('build') !== -1 || false;

// console.log(process)
// console.log(module)