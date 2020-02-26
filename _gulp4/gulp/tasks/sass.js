import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import config from '../config';
import csso from 'postcss-csso';
import gcmq from 'gulp-group-css-media-queries';
import plumber from 'gulp-plumber';
import wait from 'gulp-wait';

const isMax = mq => /max-width/.test(mq);
const isMin = mq => /min-width/.test(mq);

const sortMediaQueries = (a, b) => {
    A = a.replace(/\D/g, '');
    B = b.replace(/\D/g, '');

    if (isMax(a) && isMax(b)) {
        return B - A;
    } else if (isMin(a) && isMin(b)) {
        return A - B;
    } else if (isMax(a) && isMin(b)) {
        return 1;
    } else if (isMin(a) && isMax(b)) {
        return -1;
    }
    return 1;
}

const processors = [
  autoprefixer({
    Browserslist: {
			"production": [
				">0.2%",
				"not dead",
				"not op_mini all"
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

gulp.task('sass', () => gulp
	.src(config.src.sass + '/*.{sass,scss}')
	.pipe(wait(300))
	.pipe(plumber({
		errorHandler: config.errorHandler
	}))
  .pipe(sourcemaps.init())
  .pipe(sass({
      outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
      precision: 5
	}))
	.pipe(gcmq())
  .on('error', config.errorHandler)
  .pipe(postcss(processors))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.dest.css))
);

const build = gulp => gulp.parallel('sass');
const watch = gulp => () => gulp.watch(config.src.sass + '/**/*.{sass,scss}', gulp.parallel('sass'));

module.exports.build = build;
module.exports.watch = watch;
