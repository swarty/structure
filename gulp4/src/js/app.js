import test from './modules/test';
import {One, Two} from './modules/test2';



function onDomLoad() {
	console.log(test());
	console.log(new One(), new Two())
}

document.addEventListener('DOMContentLoaded', onDomLoad);
