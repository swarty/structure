// versions browser
var autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 11', 'opera 12.1', 'ios 6', 'android 4'];

//load all of our dependencies
//add more here if you want to include more libraries
import gulp from 'gulp';
import pug from 'gulp-pug';
import gutil from 'gulp-util';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import babelPreset from 'babel-preset-env';
import minify from 'gulp-babel-minify';
import sass from 'gulp-sass';
import sourceMaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import cleanCSS from 'gulp-clean-css';
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import gulpSequence from 'gulp-sequence';
import shell from 'gulp-shell';
import plumber from 'gulp-plumber';
import wait from 'gulp-wait';
import fileInclude from 'gulp-file-include';
import connect from 'gulp-connect';

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "app/"
        },
        options: {
            reloadDelay: 250
        },
        notify: false
    });
});


// new task babel
gulp.task('babel', function () {
    return gulp.src('dist/scripts/app.js')
    // .pipe(plumber())
    .pipe(babel({
        "presets": [["minify", {
          "mangle": {
            "exclude": ["ParserError", "NetworkError"]
          }
        }]]
      }))
  .pipe(gulp.dest('dist/scripts'))
});

gulp.task('css', function() {
    return gulp.src('dist/styles/*.css')
    .pipe(plumber())
    .pipe(cleanCSS({
			inline: ['all'] // enables all inlining, same as ['local', 'remote']
		}))
    .pipe(gulp.dest('dist/styles/'));
})


//compressing images & handle SVG files
gulp.task('images', function(tmp) {
    gulp.src(['app/images/*.jpg', 'app/images/*.png'])
    //prevent pipe breaking caused by errors from gulp plugins
    .pipe(plumber())
		// .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
		.pipe(webp({
			quality: 80,
			preset: 'photo',
			method: 6
		}))
    .pipe(gulp.dest('app/images'));
});

//compressing images & handle SVG files
gulp.task('images-deploy', function() {
    gulp.src(['app/images/**/*', '!app/images/README'])
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest('dist/images'));
});


gulp.task('pug', function () {
  return gulp.src('app/pug/*.pug')
	.pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('app'))
    // .pipe(browserSync.reload({
    //   stream: true
    // }))
})


//compiling our Javascripts
gulp.task('scripts', function() {
    //this is where our dev JS scripts are
    return gulp.src(['app/scripts/src/_libs/**/*.js', 'app/scripts/src/**/*.js', '!app/scripts/**/reame.md'])
		//prevent pipe breaking caused by errors from gulp plugins
		.pipe(plumber())
		//this is the filename of the compressed version of our JS
		.pipe(concat('app.js'))
		// babel
		.pipe(babel())
		//catch errors
		.on('error', gutil.log)
		//where we will store our finalized, compressed script
		.pipe(gulp.dest('app/scripts'))
		//notify browserSync to refresh
		.pipe(browserSync.reload({stream: true}));
});

//compiling our Javascripts for deployment
gulp.task('scripts-deploy', function() {
    //this is where our dev JS scripts are
    return gulp.src(['app/scripts/src/_libs/**/*.js', 'app/scripts/src/**/*.js', '!app/scripts/**/reame.md'])
		//prevent pipe breaking caused by errors from gulp plugins
		.pipe(plumber())
		//this is the filename of the compressed version of our JS
		.pipe(concat('app.js'))
		//compress :D
		.pipe(babel())
		// cath errors
		.on('error', gutil.log)
		//where we will store our finalized, compressed script
		.pipe(gulp.dest('dist/scripts'));
});

gulp.task('pug', function () {
	return gulp.src('app/pug/*.pug')
	.pipe(plumber())
	.pipe(pug({
	pretty: true
	}))
	.pipe(gulp.dest('app'))
	// .pipe(browserSync.reload({
	//   stream: true
	// }))
  })

//compiling our SCSS files
gulp.task('styles', function() {
    //the initializer / master SCSS file, which will just be a file that imports everything
    return gulp.src('app/styles/sass/*.sass')
		//prevent pipe breaking caused by errors from gulp plugins
		.pipe(wait(500))
		.pipe(plumber({
			errorHandler: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		//get sourceMaps ready
		.pipe(sourceMaps.init())
		//include SCSS and list every "include" folder
		.pipe(sass({
					errLogToConsole: true,
					includePaths: [
							'app/styles/sass/'
					],
					outputStyle: 'compact'
		}))
		.pipe(autoprefixer({
				browsers: autoPrefixBrowserList,
				cascade:  true
		}))
		//catch errors
		.on('error', gutil.log)
		//the final filename of our combined css file
		// .pipe(concat('styles.css'))
		//get our sources via sourceMaps
		.pipe(sourceMaps.write())
		//where to save our final, compressed css file
		.pipe(gulp.dest('app/styles/'))
		//notify browserSync to refresh
		.pipe(browserSync.reload({stream: true}));
});

//compiling our SCSS files for deployment
gulp.task('styles-deploy', function() {
    //the initializer / master SCSS file, which will just be a file that imports everything
    return gulp.src('app/styles/sass/*.sass')
		.pipe(plumber())
		//include SCSS includes folder
		.pipe(sass({
					includePaths: [
							'app/styles/sass/',
					],
					outputStyle: 'compact'
		}))
		.pipe(autoprefixer({
			browsers: autoPrefixBrowserList,
			cascade:  true,
			
		}))
		//the final filename of our combined css file
		//where to save our final, compressed css file
		.pipe(gulp.dest('dist/styles/'));
});


//basically just keeping an eye on all HTML files
gulp.task('html', function() {
    //watch any and all HTML files and refresh when something changes
    return gulp.src('app/*.html')
		.pipe(plumber())
		.pipe(browserSync.reload({stream: true}))
		//catch errors
		.on('error', gutil.log);
});

gulp.task('html-parts', function() {
    //watch any and all HTML files and refresh when something changes
    return gulp.src('app/html/*.html')
		.pipe(fileInclude({
				prefix: '@@',
				basepath: '@file'
		}))
		.pipe(gulp.dest('app/'))
		.pipe(browserSync.reload({stream: true}))
});

//migrating over all HTML files for deployment
gulp.task('html-deploy', function() {
    //grab everything, which should include htaccess, robots, etc
    gulp.src('app/*')
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest('dist'));

    //grab any hidden files too
    gulp.src('app/.*')
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest('dist'));

    gulp.src('app/fonts/**/*')
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest('dist/fonts'));

    //grab all of the styles
    gulp.src(['app/styles/*.css', '!app/styles/styles.css'])
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest('dist/styles'));
});

//cleans our dist directory in case things got deleted
gulp.task('clean', function() {
    return shell.task([
      'rm -rf dist'
    ]);
});

//create folders using shell
gulp.task('scaffold', function() {
  return shell.task([
      'mkdir dist',
      'mkdir dist/fonts',
      'mkdir dist/images',
      'mkdir dist/scripts',
      'mkdir dist/styles'
    ]
  );
});

//this is our master task when you run `gulp` in CLI / Terminal
//this is the main watcher to use when in active development
//  this will:
//  startup the web server,
//  start up browserSync
//  compress all scripts and SCSS files
gulp.task('default', ['browserSync', 'scripts', 'pug', 'html-parts', 'styles'], function() {
	//a list of watchers, so it will watch all of the following files waiting for changes
    gulp.watch('app/scripts/src/**', ['scripts']);
    gulp.watch('app/styles/sass/**', ['styles']);
	gulp.watch('app/images/**', ['images']);
	gulp.watch('app/pug/*.pug', ['pug']);
	gulp.watch('app/html/*.html', ['html-parts']);
    gulp.watch('app/*.html', ['html']);
});

//this is our deployment task, it will set everything for deployment-ready files
gulp.task('deploy', gulpSequence('clean', 'scaffold', ['scripts-deploy', 'styles-deploy', 'images-deploy'], 'babel', 'html-deploy'));
