import Inputmask from "inputmask";

export default class PhoneMask {
	private phone: HTMLInputElement

	constructor(phone) {
		this.phone = phone;
		this.addMask();
	}

	addMask() {
		const mask = new Inputmask("+7 999 999 99");
		mask.mask(this.phone);
	}
}