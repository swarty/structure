import test from './modules/test.ts';
import {One, Two} from './modules/test2';
import './modules/vue';


import './lib/lazy-load';




function onDomLoad() {
	console.log(test('lal'));
	console.log(new One(), new Two())
}

document.addEventListener('DOMContentLoaded', onDomLoad);



// prevent scale window on safari
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
  window.document.addEventListener('touchmove', e => {
    if(e.scale !== 1) {
      e.preventDefault();
    }
	}, false);
	
	const testNew = 'lalla';
}