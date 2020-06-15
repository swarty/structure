import gulp from 'gulp'

import config from '../config'


export function copyFonts() {
	return gulp
		.src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
		.pipe(gulp.dest(config.dest.fonts))
}

export function copyMedia() {
	return gulp
		.src(config.src.media + '/*')
		.pipe(gulp.dest(config.dest.media))
}


export function copyApi() {
	return gulp
		.src(config.src.root + '/api/*')
		.pipe(gulp.dest(config.dest.root + '/api'))
}

export function copyDocs() {
	return gulp
		.src(config.src.root + '/docs/*')
		.pipe(gulp.dest(config.dest.root + '/docs'))
}


export function copy (done) {
	return gulp.parallel([copyFonts, copyMedia, copyApi, copyDocs])(done);
}