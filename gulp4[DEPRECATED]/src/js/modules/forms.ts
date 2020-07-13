import bodyOverflow from './bodyOverflow';

interface IRules {
	[name: string]: string
}

export default class Forms {
	private forms: Array<HTMLFormElement>;
	private inputs: Array<HTMLInputElement>;
	private validationRules: IRules;
	private thanks: HTMLElement;

	constructor() {
		this.forms = Array.from(document.forms || document.querySelectorAll('form'));
		this.inputs = Array.from(document.querySelectorAll('form input, form textarea'));
		this.thanks = document.querySelector('.js__thanks-popup');
		this.validationRules = {
			"name": '[a-zA-Zа-яА-Я]{2,}',
			// "request": '[a-zA-Zа-яА-Я]{2,}',
			"tel": '^\\+3?8?\\(0{1}[1-9]{1}\\d{1}\\)-\\d{2}-\\d{2}-\\d{3}$',
			"email": '([\\w\\S]){1,}\\@{1}([\\w\\S]){1,}\\.{1}([a-z0-9]+){2,3}'
		}

		if(this.forms.length !== 0) this.init();
	}

	init() {
		this.forms.forEach( form => {
			form.addEventListener('submit', this.submitForm.bind(null, form, this));
		});
		this.validateInputsOnBlur();
	}

	validateInputsOnBlur() {
		this.inputs.forEach( input => {
			input.addEventListener('blur', validateInput.bind(this, input))
			function validateInput(input) {
				const isValid = this.inputChecker(input);
				this.showInputError(isValid, input);
			}
		})
	}

	showInputError(isValid, input) {
		const label = input.parentNode as HTMLLabelElement;
		if(!isValid) label.classList.add('is-error');
		if(isValid) label.classList.remove('is-error');
	}

	inputChecker(input) {
		if(this.validationRules[input.name] == null) return true;
		const value = input.value || '',
					rule = new RegExp(this.validationRules[input.name], 'i'),
					result = rule.test(value);
		return result;
	}

	submitForm(currentform: HTMLElement, that: any, e: Event) {
		e.preventDefault();
		const inputs: Array<HTMLElement> = Array.from(currentform.querySelectorAll('input, textarea, select'));

		const checkInputs = inputs.map( (input: HTMLInputElement) => {
			const valid = that.inputChecker(input);
			that.showInputError(valid, input);
			return valid;
		});

		if(!checkInputs.every(Boolean)) return;
		const route: string = currentform.dataset.route || '',
					data = new FormData(),
					fetchSettings: any = {
						method: 'POST',
						body: data
					};

		inputs.forEach( (input: HTMLInputElement) => {
			data.append(input.name, input.value !== '' ? input.value : '');
		});

		fetch(route, fetchSettings)
		.then( response => {
			if(response.status >= 200 && response.status < 400) {
				bodyOverflow(that.thanks, true);
				inputs.forEach( (input: HTMLInputElement) => {
					input.blur();
					that.showInputError(true, input);
					if(input.type !== 'hidden') input.value = '';
				});
			}
			return response.json();
		})
		.catch( error => {
			console.error(error);
		})
	}
}