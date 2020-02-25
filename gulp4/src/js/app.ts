// libs
import './lib/lazy-load';

import test from './modules/test';
import './modules/vue';
import './modules/datefns.ts'



function onDomLoad() {
	console.log(test('lal'));
}

document.addEventListener('DOMContentLoaded', onDomLoad);