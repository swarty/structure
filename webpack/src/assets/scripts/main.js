// polyfills


// libs
import inlineSVG from 'inline-svg';
import 'scripts/libs/fetch-polyfill';


// modules
import 'scripts/modules/lazy-load';
import 'scripts/modules/module1';
import 'scripts/modules/module2';



document.addEventListener('DOMContentLoaded', function () {
	inlineSVG.init({
		svgSelector: 'img.svg', // the class attached to all images that should be inlined
		initClass: 'js-inlinesvg', // class added to <html>
	});
})