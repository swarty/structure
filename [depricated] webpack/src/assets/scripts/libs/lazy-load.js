// lazyload
(function(w, d){
	var b = d.getElementsByTagName('body')[0];
	var s = d.createElement("script"); 
	var v = !("IntersectionObserver" in w) ? "8.16.0" : "10.19.0";
	s.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" + v + "/dist/lazyload.min.js";
	b.appendChild(s); 
	s.onload = function(){
		/* eslint-disable */
			w.lazy = window.LazyLoad && new LazyLoad({
					elements_selector: ".lazy"
			});
		/* eslint-enable */
	}
}(window, document));