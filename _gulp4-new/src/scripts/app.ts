// libs
import './lib/lazy-load'
import './lib/svg4everybody'

// modules
import PhoneMask from './modules/phoneInput'
// import accessibleLables from './modules/labels'
// import aosAnimation from './modules/aosAnimation'
// import './modules/datefns'

function onDomLoad() {
	new PhoneMask();
	// new Forms();
	// accessibleLables();
	// aosAnimation();
}

document.addEventListener('DOMContentLoaded', onDomLoad);