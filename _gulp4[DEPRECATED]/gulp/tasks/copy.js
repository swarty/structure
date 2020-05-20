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
		])
	.pipe(gulp.dest(config.dest.media))
);

// gulp.task('copy:styles', () => gulp
// 	.src(
// 		[
// 			config.src.sass + '/*.css',
// 			config.src.sass + '/*.map'
// 		])
// 	.pipe(gulp.dest(config.dest.css))
// );

// gulp.task('copy:api', () => gulp
// 	.src(config.src.root + '/api/*')
// 	.pipe(gulp.dest(config.dest.root + '/api'))
// );

const build = gulp => gulp.series('copy:fonts', 'copy:media');
const watch = gulp => () => gulp.watch(config.src.img + '/*', gulp.parallel('copy:fonts', 'copy:media'));

module.exports.build = build;
module.exports.watch = watch;
