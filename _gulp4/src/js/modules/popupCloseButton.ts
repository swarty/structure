export default class popupCloseButton {
	private closeButtons: NodeList | null
	private popupsObj: any
	private header: any
	
	constructor(popups) {
		this.closeButtons = document.querySelectorAll('.js__popup-close');
		this.popupsObj = popups;
		this.closeButtons.length !== 0 && this.init();
	}

	init() {
		this.closeButtons
			.forEach( button => button.addEventListener('click', _ => this.popupsObj.closePopups()));
	}
}