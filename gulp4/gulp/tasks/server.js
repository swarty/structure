import browserSync from 'browser-sync'
import config from '../config'

export const server = browserSync.create();

export function initServer (cb) {
	server.init({
		server: {
			baseDir: config.dest.root,
		},
		online: false,
		port: 8080,
		open: true,
		logLevel: 'info',
		notify: false,
	});

	server.watch(config.dest.js, server.reload);
	// server.watch(config.dest.img, server.reload);
	cb();
}