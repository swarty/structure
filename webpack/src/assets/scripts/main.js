// polyfills


// libs
import inlineSVG from 'inline-svg';

// modules
import 'scripts/libs/lazy-load';
import 'scripts/modules/module1';
import 'scripts/modules/module2';



document.addEventListener('DOMContentLoaded', function () {
	async function start() {
		return await Promise.resolve('async is working');
	}

	start().then(console.log);

	inlineSVG.init({
		svgSelector: 'img.svg', // the class attached to all images that should be inlined
		initClass: 'js-inlinesvg', // class added to <html>
	});
})