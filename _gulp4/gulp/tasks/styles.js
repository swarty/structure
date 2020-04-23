import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import config from '../config';
import csso from 'postcss-csso';
import gcmq from 'gulp-group-css-media-queries';


const processors = [
  autoprefixer({
    Browserslist: {
			"production": [
				">0.2%",
				"not dead"
			],
			"development": [
				"last 1 chrome version",
				"last 1 firefox version",
				"last 1 safari version",
				"last 1 ie version"
			]
		},
    cascade: false
  }),
  csso
];



gulp.task('styles', () => gulp
	.src(config.src.sass + '/*.css')
	.pipe(postcss(processors))
	.pipe(gcmq())
	.pipe(gulp.dest(config.dest.css))
);

const build = gulp => gulp.series('styles');
const watch = gulp => () => gulp.watch(config.src.sass + '/*.css$', gulp.series('styles'));

module.exports.build = build;
module.exports.watch = watch;
