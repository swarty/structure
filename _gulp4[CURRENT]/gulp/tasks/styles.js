import gulp from 'gulp'
import sass from 'gulp-sass'
import nodeSass from 'node-sass'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import plumber from 'gulp-plumber'
import wait from 'gulp-wait'
import color from 'ansi-colors'

import config from '../config'

sass.compiler = nodeSass;

export default function (done) {
	const styles = gulp.src(config.src.sass + '/*.{scss,sass}')
		.pipe(plumber())
		.pipe(wait(300))
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compact', /* nested, expanded, compact, compressed */ }))
		.pipe(autoprefixer({ cascade: false }))

	if(config.production) {
		styles
			.pipe(cleanCSS({
				debug: false,
				compatibility: '*'
			}, details => {
				console.log(color.green(`Styles: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`));
			}))
	}

	styles
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.dest.css))
	
	done();
	// return styles;
}