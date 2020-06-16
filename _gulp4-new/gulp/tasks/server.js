import gulp from 'gulp'
import browserSync from 'browser-sync'
import { copyFonts, copyMedia, copyApi, copyDocs } from './copy'
import images from './images'
import pug from './pug'
import { scriptsTaskWatch } from './scripts'
import styles from './styles'
import svg from './svg'


import config from '../config'
export const server = browserSync.create();


export function startServer (done) {
	server.init({
		server: {
			baseDir: !config.production ? [config.dest.root, config.src.root] : config.dest.root,
		},
		ui: false,
		port: 8080,
    logLevel: 'info',
    notify: false,
		open: true,
    cors: true
	});
	done();


	// copy
	gulp.watch(config.src.fonts + '/*.{ttf,eot,woff,woff2}', gulp.series(copyFonts)).on('change', server.reload)
	gulp.watch(config.src.media + '/*', gulp.series(copyMedia)).on('change', server.reload)
	gulp.watch(config.src.root + '/api/*', gulp.series(copyApi)).on('change', server.reload)
	gulp.watch(config.src.root + '/docs/*', gulp.series(copyDocs)).on('change', server.reload)

	// images
	gulp.watch(config.src.img + '/*.{jpg,png,jpeg,svg,gif}', gulp.series(images))
	gulp.watch(config.src.svg + '/*.svg', gulp.series(svg))

	// pug
	gulp.watch(config.src.templates + '/*.pug', gulp.series(pug)).on('change', server.reload) /* .on('change', server.reload) */
	
	// scripts
	gulp.watch(config.src.js + '/**/*.{ts,js}', gulp.series(scriptsTaskWatch))
	
	// styles
	gulp.watch(config.src.sass + '/**/*.{scss,sass}', gulp.series(styles)).on('change', server.reload)
}