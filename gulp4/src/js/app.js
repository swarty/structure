// libs
import './lib/lazy-load';

// import test from './modules/test';
import {One, Two} from './modules/test2';
// import './modules/vue';
import './modules/datefnc';




function onDomLoad() {
	// console.log(test('lal'));
	console.log(new One(), new Two())
}

document.addEventListener('DOMContentLoaded', onDomLoad);