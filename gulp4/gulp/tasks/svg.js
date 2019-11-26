import gulp from 'gulp';
import config from '../config.js';

import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';


gulp.task('svg', () => gulp
	.src([
		config.src.templates + '/svg/*.svg'
	])
	.pipe(imagemin([
		imagemin.svgo({
			plugins: [
				{removeViewBox: false},
				{removeEditorsNSData: true},
				{cleanupIDs: true},
				{removeEmptyAttrs: true},
				{removeXMLNS: true},
				{removeDoctype: true},
				{inlineStyles: true}
			]
		})
	]))
  .pipe(gulp.dest(config.src.templates + '/svg/'))
)


const build = gulp => gulp.series('svg');
const watch = gulp => () => gulp.watch(config.src.img + '/*', gulp.parallel('svg'));

module.exports.build = build;
module.exports.watch = watch;
