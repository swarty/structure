import gulp from 'gulp';
import config from '../config';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';

const renderHtml = bool => {
	return gulp
		.src(config.src.templates + '/*.pug')
		.pipe(plumber({
			errorHandler: config.errorHandler
		}))
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest(config.dest.html))
}

gulp.task('pug', () => renderHtml());
gulp.task('pug:changed', () => renderHtml(true));

const build = gulp => gulp.parallel('pug');
const watch = gulp => {
  return function() {
    gulp.watch([
      config.src.templates + '/**/*.pug'
    ], gulp.parallel('pug:changed'));
    // gulp.watch([
    //   config.src.templates + '/**/*.pug'
    // ], gulp.parallel('pug'));
  }
};

module.exports.build = build;
module.exports.watch = watch;