// libs
import './lib/lazy-load';
import './lib/svg4everybody';

// modules
import Header from './modules/header';
import Hero from './modules/hero';
import FeedbacksSlider from './modules/feedbacksSlider';
import GallerySlider from './modules/gallerySlider';
import popupCloseButton from './modules/popupCloseButton';
import SelectInputs from './modules/selectInputs';
import Popups from './modules/popups';
import PlayVideoButtons from './modules/playVideoButtons';
import PhoneMask from './modules/phoneInput';
import Forms from './modules/forms';
import smoothScroll from './modules/anchors';
import accessibleLables from './modules/labels';
import aosAnimation from './modules/aosAnimation';



function onDomLoad() {
	const header = new Header();
	const selects = new SelectInputs();
	const popups = new Popups(header, selects);
	new Hero();
	new FeedbacksSlider();
	new GallerySlider();
	new popupCloseButton(popups);
	new PlayVideoButtons();
	new PhoneMask();
	new Forms();
	accessibleLables();
	smoothScroll(header, popups);
	aosAnimation();
}

document.addEventListener('DOMContentLoaded', onDomLoad);