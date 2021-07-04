import { watch, dest, series } from 'gulp'
import pug from './pug'
import scripts from './scripts'
import styles from './styles'
import svg from './svg'

import config from '../config'

export default function () {

	// images
	watch(config.src.svg + '/*.svg', series(svg))

	// pug
	watch([
		config.src.templates + '/*.pug',
		config.src.templates + '/parts/*.pug',
		config.src.templates + '/layout/*.pug'
	], series(pug))
	
	// scripts
	watch(config.src.js + '/**/*.(js|ts)', series(scripts))
	
	// styles
	watch(config.src.sass + '/**/*.{s[ca]ss}', series(styles))
}