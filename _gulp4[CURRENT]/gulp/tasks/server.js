import browserSync from 'browser-sync'


import config from '../config'
export const server = browserSync.create();


export function startServer (done) {
	server.init({
		server: {
			baseDir: config.dest.root,
		},
		ui: false,
		port: 8080,
    logLevel: 'info',
    notify: false,
		open: false,
    cors: true
	});

	server.watch(config.dest.root, server.reload);

	done();
}