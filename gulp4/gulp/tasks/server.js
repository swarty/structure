import gulp from 'gulp';
import browseeSync from 'browser-sync';
import config  from '../config';


// import argv from 'minimist';
// const lal = argv;
// console.dir(argv)

const server = browseeSync.create();

// in CL 'gulp server --open' to open current project in browser
// in CL 'gulp server --tunnel siteName' to make project available over http://siteName.localtunnel.me

gulp.task('server', done => {
  server.init({
    server: {
      baseDir: !config.production ? [config.dest.root, config.src.root] : config.dest.root,
      directory: false,
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    files: [
      config.dest.html + '/*.html',
      config.dest.css + '/*.css',
      config.dest.img + '/**/*'
    ],
		ui: false,
		port: 8080,
    logLevel: 'info', // 'debug', 'info', 'silent', 'warn'
    logConnections: false,
    logFileChanges: true,
    // 
    notify: false,
		ghostMode: false,
		// if need to make connection by wifi
		open: 'local',  // 'tunnel' or 'local' or 'external
    online: false, // true
    tunnel: false // true
  });
  done();
});

const build = gulp => gulp.parallel('server');

module.exports.build = build;
module.exports.server = server;
