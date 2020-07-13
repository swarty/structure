import browserSync from 'browser-sync'
import config from '../config'

const server = browserSync.create();

export default function (cb) {
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

	server.watch(config.dest.root, server.reload);
	cb();
}