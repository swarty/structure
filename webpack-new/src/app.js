
// svg inliner 
// if(document.querySelector('.svg')){
// 	new SVGInliner(document.querySelectorAll('.svg'));
// }

// Styles
import 'styles/app.scss';


// polyfills


// libs
import inlineSVG from 'inline-svg'


// modules
import 'scripts/modules/lazy-load'


// pages
import 'scripts/index'


document.addEventListener('DOMContentLoaded', function () {
	inlineSVG.init({
		svgSelector: 'img.svg', // the class attached to all images that should be inlined
		initClass: 'js-inlinesvg', // class added to <html>
	});
})