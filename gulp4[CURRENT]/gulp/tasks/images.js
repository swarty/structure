import { src, dest } from 'gulp'
import imagemin from 'gulp-imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'
import wait from 'gulp-wait'
import del from 'del'
import config from '../config.js'


export function cleanImages (cb) {
	del([
		config.dest.img,
		!config.dest.img + '/sprite.svg'
	]).then(cb)
}

export function images (cb) {
	const images = src(config.src.img + '/*.{jpg,png,jpeg,svg,gif}')
		.pipe(dest(config.dest.img));

	if(config.production) {
		images.pipe(imagemin([
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
	}

	cb();
}