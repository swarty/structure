// libs
import './lib/lazy-load';
import './lib/svg4everybody';

// modules
import PhoneMask from './modules/phoneInput';
import Forms from './modules/forms';
import accessibleLables from './modules/labels';
import aosAnimation from './modules/aosAnimation';



export function onDomLoad() {
	// new PhoneMask();
	// new Forms();
	// accessibleLables();
	// aosAnimation();
	console.log('lala')
}

document.addEventListener('DOMContentLoaded', onDomLoad);