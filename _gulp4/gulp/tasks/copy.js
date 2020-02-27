import gulp from 'gulp';
import config from '../config.js';


gulp.task('copy:fonts', () => gulp
  .src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
  .pipe(gulp.dest(config.dest.fonts))
);


gulp.task('copy:media', () => gulp
  .src(
		[
			config.src.media + '/*'
			// "!" + config.src.templates + '/*',
			// "!" + config.src.sass + '/*',
			// "!" + config.src.js + '/*',
			// "!" + config.src.img + '/*',
			// "!" + config.src.icons + '/*',
			// "!" + config.src.fonts + '/*',
			// "!" + config.src.lib + '/*',
			// "!" + config.src.data + '/*.*',
		])
  .pipe(gulp.dest(config.dest.media))
);

// gulp.task('copy:data', () => gulp
//   .src(config.src.data + '/**/*.*')
//   .pipe(gulp.dest(config.dest.data))
// );

const build = gulp => gulp.series('copy:fonts', 'copy:media');
const watch = gulp => () => gulp.watch(config.src.img + '/*', gulp.parallel('copy:fonts', 'copy:media'));

module.exports.build = build;
module.exports.watch = watch;
