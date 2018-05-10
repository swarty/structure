const gulp        = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass        = require('gulp-sass'),
      autoprefixer= require('gulp-autoprefixer'),
      cssmin      = require('gulp-cssnano'),
      imagemin = require('gulp-imagemin'),
      imageminJpegRecompress = require('imagemin-jpeg-recompress'),
      imageminPngquant = require('imagemin-pngquant'),
      debug = require('gulp-debug'),
      // plumber = require('gulp-plumber'),
      babel = require('gulp-babel'),
      minify = require('gulp-babel-minify'),
      pug = require('gulp-pug'),
      del = require('del'),
      wait = require('gulp-wait'),
      gutil = require('gulp-util');
// var gulpSequence = require('gulp-sequence').use(gulp);
// var shell = require('gulp-shell');


// Static Server + watching sass/html files
gulp.task('serve', ['sass', 'pug'], function() {
  browserSync.init({
    server: 'app'
  });

  gulp.watch("app/js/*.js", ['babel']);
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/pug/**/*.pug', ['pug']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('pug', function() {
    return gulp.src('app/pug/*.pug')
      // .pipe(plumber())
      .pipe(wait(1500))
      .pipe(pug({pretty: true}))
      .pipe(gulp.dest('app'))
      .pipe(browserSync.reload({stream: true}))
})

gulp.task('babel', function(){
    return gulp.src('app/js/*')
      // .pipe(plumber())
      .pipe(wait(1500))
      .pipe(babel({
          presets: ['es2015']
      }))
      .pipe(gulp.dest('dist/js'))
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/sass/**/*.sass")
      // .pipe(plumber())
      .pipe(wait(1500))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(autoprefixer({browsers: ['last 2 version', '> 2%', 'firefox 15', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}))
      .pipe(gulp.dest("app/css"))
      .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});


gulp.task('images', () =>
    gulp.src('app/img/*')
      // .pipe(plumber())
      .pipe(wait(1500))
      .pipe(imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 10,
        svgoPlugins: [{removeViewBox: true}]
        }))
      .pipe(gulp.dest('dist/img'))
);

// Таск для оптимизации изображений
gulp.task('img:prod', function () {
  return gulp.src('app/img/*') //Выберем наши картинки
    // .pipe(plumber())
    .pipe(wait(1500))
    .pipe(debug({title: 'building img:', showFiles: true}))
    .pipe(gulp.dest('dist/img')) //Копируем изображения заранее, imagemin может пропустить парочку )
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imageminJpegRecompress({
        progressive: true,
        max: 90,
        min: 80
      }),
      imageminPngquant({quality: '90'}),
      imagemin.svgo({plugins: [{removeViewBox: true}]})
    ]))
    .pipe(gulp.dest('dist/img')); //И бросим в prod отпимизированные изображения
});

gulp.task('default', ['serve']);


//  очищаем перед компиляцией папку продукта
gulp.task('clean', function(){
  return del.sync('dist');
})


gulp.task('build', function(){

  var buildCss = gulp.src('app/css/**/*.css')
  .pipe(gulp.dest('dist/css'))

  var buildHtml = gulp.src('app/*.html')
  .pipe(gulp.dest('dist'));

  var buildJs = gulp.src('app/js/**/*')
  .pipe(gulp.dest('dist/js'))

  var buildFonts = gulp.src('app/fonts/*')
  .pipe(gulp.dest('dist/fonts'))

  var buildImgs = gulp.src('app/img/*')
  .pipe(gulp.dest('dist/img'))

  var buildLibs = gulp.src('app/libs/*')
  .pipe(gulp.dest('dist/libs'))

})