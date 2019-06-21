// your js

// lazyload
(function(w, d){
	var b = d.getElementsByTagName('body')[0];
	var s = d.createElement("script"); 
	var v = !("IntersectionObserver" in w) ? "8.16.0" : "10.19.0";
	s.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" + v + "/dist/lazyload.min.js";
	b.appendChild(s); 
	s.onload = function(){
			w.lazy = new LazyLoad({
					elements_selector: ".lazy"
			});
	}
}(window, document)); 


document.addEventListener('DOMContentLoaded', function () {
	// svg inliner 
	if(document.querySelector('.svg')){
		new SVGInliner(document.querySelectorAll('.svg'));
	}
})