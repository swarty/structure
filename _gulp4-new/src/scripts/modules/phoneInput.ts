import Inputmask from "inputmask";

export default class PhoneMask {
	private phones: NodeList

	constructor() {
		this.phones = document.querySelectorAll('input[type="tel"]');
		this.phones.length !== 0 && this.init();
	}

	init(): void {
		this.addMask();
	}

	addMask(): void {
		this.phones.forEach( input => {
			const mask = new Inputmask("+38(099)-99-99-999");
			mask.mask(input);
		})
	}
}

new PhoneMask();