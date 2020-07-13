import { watch, dest, series } from 'gulp'
import { fonts, media, api, docs } from './copy'
import { cleanImages,  images } from './images'
import pug from './pug'
import scripts from './scripts'
import styles from './styles'
import svg from './svg'

import config from '../config'

export default function () {
	// copy
	watch(config.src.fonts + '/*.{ttf,eot,woff,woff2}', series(fonts))
	watch(config.src.media + '/*', series(media))
	watch(config.src.root + '/api/*', series(api))
	watch(config.src.root + '/docs/*', series(docs))

	// images
	watch(config.src.svg + '/*.svg', series(svg))
	watch(config.src.img + '/*.{jpg,png,jpeg,svg,gif}', series(cleanImages, images))
	

	// pug
	watch([
		config.src.templates + '/*.pug',
		config.src.templates + '/parts/*.pug',
		config.src.templates + '/layout/*.pug'
	], series(pug))
	
	// scripts
	watch(config.src.js + '/**/*.{ts,js}', series(scripts))
	
	// styles
	watch(config.src.sass + '/**/*.{scss,sass}', series(styles))
}