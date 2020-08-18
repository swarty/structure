import { src, dest } from 'gulp'
import imagemin from 'gulp-imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'
import config from '../config.js'


export function images (cb) {
	src(config.dest.img + '/*.{jpg,png,jpeg,gif}')
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
	.pipe(dest(config.dest.img));
	
	cb();
}