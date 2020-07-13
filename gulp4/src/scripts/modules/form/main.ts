import Form from './form'

export default class Forms {
	private forms: NodeList

	constructor() {
		this.forms = document.querySelectorAll('.js__form');
		this.init()
	}

	init(): void {
		const condition: boolean = this.forms.length !== 0 && typeof Form === 'function';
		if(condition) {
			this.forms.forEach( (form: HTMLFormElement) => new Form(form));
		}
	}
}