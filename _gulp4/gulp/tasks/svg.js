import gulp from 'gulp';
import config from '../config.js';

import svgSprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';

gulp.task('svg', function () {
	return gulp.src(config.src.svg + '/*.svg')
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
		// build svg sprite
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../../sprite.svg",
					render: {
						scss: {
							dest: '../../../sass/config/_sprite.scss',
							template: config.src.sass + "/config/_sprite_template.scss"
						}
					}
				}
			}
		}))
		.pipe(gulp.dest(config.src.svg))
});

const build = gulp => gulp.series('svg');
const watch = gulp => () => gulp.watch(config.src.svg + '/*.svg', gulp.parallel('svg'));

module.exports.build = build;
module.exports.watch = watch;
