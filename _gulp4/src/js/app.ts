// libs
import './lib/lazy-load';
import './lib/svg4everybody';


// modules
import test from './modules/test';
// import './modules/vue';
// import './modules/datefns'



function onDomLoad() {
	console.log(test('lalal'))
}

document.addEventListener('DOMContentLoaded', onDomLoad);