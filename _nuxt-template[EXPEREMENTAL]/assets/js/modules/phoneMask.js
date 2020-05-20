import Inputmask from "inputmask";

export class PhoneMask {
	constructor() {
		this.phones = document.querySelectorAll('input[type="tel"]') || [];

		this.init();
	}

	init() {
		this.checkForSelector();
		this.addMask();
	}

	checkForSelector() {
		if(this.phones.length === 0) return false;
		return true;
	}

	addMask() {
		this.phones.forEach( input => {
			// $(input).inputmask("+38(099)-99-99-999");
			const mask = new Inputmask("+38(099)-99-99-999");
			mask.mask(input);
		})
	}
}

new PhoneMask();