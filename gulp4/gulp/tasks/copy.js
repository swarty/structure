const { src, dest, series, parallel } = require('gulp');

import config from '../config'


export function fonts() {
	return src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
		.pipe(dest(config.dest.fonts))
}

export function media() {
	return src(config.src.media + '/*')
		.pipe(dest(config.dest.media))
}


export function api() {
	return src(config.src.root + '/api/*')
		.pipe(dest(config.dest.root + '/api'))
}

export function docs() {
	return src(config.src.root + '/docs/*')
		.pipe(dest(config.dest.root + '/docs'))
}