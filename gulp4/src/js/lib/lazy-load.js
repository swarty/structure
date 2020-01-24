// lazyload
function lazyLoad(){
	const body = document.querySelector('body');
	const scr = document.createElement("script");
	const version = !("IntersectionObserver" in window) ? "8.16.0" : "10.19.0";
	scr.src = `https://cdn.jsdelivr.net/npm/vanilla-lazyload@${  version  }/dist/lazyload.min.js`;
	body.appendChild(scr);

	function onLoad() {
		/* eslint-disable */
		window.lazy = new LazyLoad({
			elements_selector: ".lazy",
			load_delay: 0,
			threshold: 300
		});
		/* eslint-enable */
	}

	scr.addEventListener('load', onLoad);
}

lazyLoad();