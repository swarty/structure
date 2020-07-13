import { src, dest } from 'gulp'
import pug from 'gulp-pug'
import plumber from 'gulp-plumber'
import pugLinter from 'gulp-pug-linter'

import config from '../config'


export default function () {
	const templ = src(config.src.templates + '/*.pug')
		.pipe(plumber())
		.pipe(pugLinter({ reporter: 'default' }))
		.pipe(pug({pretty: true}))
		.pipe(dest(config.dest.html))

	return templ;
}