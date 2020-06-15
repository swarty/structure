import gulp from 'gulp'
import sass from 'gulp-sass'
import nodeSass from 'node-sass'
import sourcemaps from 'gulp-sourcemaps'
import shorthand from 'gulp-shorthand'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import plumber from 'gulp-plumber'
import color from 'ansi-colors'

import config from '../config'


sass.compiler = nodeSass;

export default function () {
	return gulp.src(config.src.sass + '/*.{scss,sass}')
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(sass({ outputStyle: 'expanded', /* nested, expanded, compact, compressed */ }))
	.pipe(autoprefixer({ cascade: false }))
	.pipe(shorthand())
	.pipe(cleanCSS({
		debug: true,
		compatibility: '*'
	}, details => {
		console.log(color.green(`Styles: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`));
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(config.dest.css))
}