import { src, dest } from 'gulp'
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

export default function (cb) {
	const styles = src(config.src.sass + '/*.{scss,sass}')
		.pipe(plumber())
		.pipe(wait(300))
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: config.production ? 'compressed' : 'compact', /* nested, expanded, compact, compressed */ }))
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
		.pipe(dest(config.dest.css))
	
	cb();
}