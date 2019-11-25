export default function bodyOverflow(modal, status) {
	const body = document.querySelector('body'),
				html = document.querySelector('html');

	if(status) {
		// add overflow to body
		body.style.width = body.clientWidth + 'px';
		modal.classList.add('is-opened');
		body.classList.add('body-overflow');
		body.style.overflow = 'hidden';
		body.style.height = '100%';
		html.style.height = '100%';
	} else {
		// remove overflow from body
		modal.classList.remove('is-opened');
		body.classList.remove('body-overflow');
		body.style.removeProperty('width');
		body.style.removeProperty('overflow');
		body.style.removeProperty('height');
		// html.style.removeProperty('overflow');
		html.style.removeProperty('height');
	}
}