import gulp from 'gulp';
import config from '../config.js';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

gulp.task('images', () => gulp
  .src([
    config.src.img + '/*.{jpg,png,jpeg,svg,gif}'
	])
	.pipe(imagemin([
		imageminMozjpeg({
				quality: 85,
				progressive: true,
				buffer: true
		}),
		imageminPngquant({
			quality: [0.6, 0.8],
			input: 'Buffer'
		})
	]))
  .pipe(gulp.dest(config.dest.img))
);


const build = gulp => gulp.series('images');
const watch = gulp => () => gulp.watch(config.src.img + '/*', gulp.parallel('images'));

module.exports.build = build;
module.exports.watch = watch;