import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'
import del from 'del'
import { server } from './server'


import config from '../config.js'

export default function (done) {
	del(config.dest.img).then( _ => {
		const images = gulp.src(config.src.img + '/*.{jpg,png,jpeg,svg,gif}')

		if(config.production) {
			images
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
		}

		images.pipe(gulp.dest(config.dest.img))

		done();
		server && server.reload();
	})
	
}