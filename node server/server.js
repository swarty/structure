var browserSync = require('browser-sync')
// connect().use(serveStatic(__dirname)).listen(3000, function(){
//     console.log('Server running on 3000...');
// });


browserSync({
	server: {
			baseDir: "./"
	},
	options: {
			reloadDelay: 250
	},
	notify: false
});