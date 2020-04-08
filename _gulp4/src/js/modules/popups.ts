import bodyOverflow from "./bodyOverflow";
import '../../../node_modules/jquery-nice-select/js/jquery.nice-select';

export default class ClosePopups {
	private popups: NodeList
	private contactPopup: HTMLElement
	private requestPopup: HTMLElement
	private contactButtons: NodeList
	private requestButtons: NodeList
	private header: any
	private selects: any
	

	constructor(header, selects) {
		this.popups = document.querySelectorAll('.popup');
		this.contactPopup = Array.from(this.popups).find( (popup: HTMLElement) => popup.classList.contains('js__contact-popup')) as HTMLElement;
		this.requestPopup = Array.from(this.popups).find( (popup: HTMLElement) => popup.classList.contains('js__request-popup')) as HTMLElement;
		this.contactButtons = document.querySelectorAll('.js__contact');
		this.requestButtons = document.querySelectorAll('.js__request');
		this.header = header;
		this.selects = selects;

		this.init();
	}

	init() {
		this.contactButtons.length !== 0 && this.openContactPopup();
		this.requestButtons.length !== 0 && this.openRequestPopup();
	}

	openContactPopup() {
		const that = this;
		this.contactButtons
			.forEach( button => button.addEventListener('click', contactPopup));
		function contactPopup() { bodyOverflow(that.contactPopup, true)}
	}

	openRequestPopup() {
		const that = this;
		this.requestButtons
			.forEach( button => button.addEventListener('click', requestPopup));
		function requestPopup() {
			const requestType = this.dataset.type,
						options = that.requestPopup.querySelectorAll('option'),
						activeOption: HTMLOptionElement | null = that.requestPopup.querySelector(`option[data-type="${requestType}"]`) || null;
			
			if(activeOption) {
				options.forEach( option => option.removeAttribute('selected'));
				activeOption.setAttribute('selected', '');

				const select = that.requestPopup.querySelector('select');
				that.selects.update();
			}
			
			bodyOverflow(that.requestPopup, true)
		}
	}

	closePopups() {
		if(!this.header.menuOpened) {
			this.popups.forEach( (popup: Element) => bodyOverflow(popup, false));
		} else {
			this.popups.forEach( (popup: Element) => popup.classList.remove('is-opened'));
		}
	}
}