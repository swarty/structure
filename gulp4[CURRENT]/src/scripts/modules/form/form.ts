// import CustomSelect from './inputs/select'
// import FileInput from './inputs/file'
import TextInput from './inputs/textInput'
import Checkbox from './inputs/checkbox'
import bodyOverflow from '../bodyOverflow'

export default class Form {
	private form: HTMLFormElement
	// private selects?: Array<any> | null
	// private files?: Array<any> | null
	private checkboxes? : Array<any> | null
	private textInputs?: Array<any> | null
	private hiddenInputs: Array<any> | null
	private validatorRules: any
	private thanksPopup: HTMLElement | null

	constructor(form: HTMLFormElement) {
		this.form = form;
		this.thanksPopup = document.querySelector('.js__thanks-popup') || null;

		this.createValidatorRules();
		this.mountForm();
		this.onSubmitForm();
	}

	createValidatorRules() {
		const casualText = /^[a-zа-я\s\D]{2,}$/i, //eslint-disable-line
					tel = /^[\(\)\d\s\+\-\\\/]{6,}$/, //eslint-disable-line
					email = /([\w\S]){1,}\@{1}([\w\S]){1,}\.{1}([a-z0-9]+){2,3}/ //eslint-disable-line

		this.validatorRules = {
			"name": {
				"reg": casualText,
				"required": true
			},
			"email": {
				"reg": email,
				"required": true
			},
			"tel": {
				"reg": tel,
				"required": true
			},
			"phone": {
				"reg": tel,
				"required": true
			},
			"message": {
				"required": false
			},
			// "file": {
			// 	"required": false
			// },
			// "select": {
			// 	"required": false
			// },
			"agree": {
				"required": true
			}
		}
	}

	initTextInputs(): void {
		const inputs = this.form.querySelectorAll('input[type="text"], textarea[name]');
		if(!inputs.length) return;
		this.textInputs = Array.from(inputs).map( (input: HTMLInputElement) => new TextInput(input, this.validatorRules[input.name]));
	}

	// initSelectors() {
	// 	const selects = this.form.querySelectorAll('.js__select');
	// 	if(!selects.length) return;
	// 	this.selects = Array.from(selects).map( (select: HTMLElement) => new CustomSelect(select, this.validatorRules['select']));
	// }

	// mountFileInputs() {
	// 	const files = this.form.querySelectorAll('.js__file');
	// 	if(!files.length) return;
	// 	this.files = Array.from(files).map( (file: HTMLElement) => new FileInput(file));
	// }

	initCheckboxes(): void {
		const checkboxes = this.form.querySelectorAll('input[type="checkbox"]');
		if(checkboxes.length === 0) return;
		this.checkboxes = Array.from(checkboxes).map( (input : HTMLInputElement) => new Checkbox(input, this.validatorRules[input.name]));
	}

	initHiddenInputs(): void {
		const hiddenInputs = this.form.querySelectorAll('input[type="hidden"]');
		if(!hiddenInputs.length) return;
		this.hiddenInputs = Array.from(hiddenInputs);
	}

	mountForm(): void {
		this.initTextInputs();
		// this.initSelectors();
		// this.mountFileInputs();
		this.initCheckboxes();
		this.initHiddenInputs();
	}

	resetValues(): void {
		[...this.textInputs,
		// ...this.selects,
		// ...this.files,
		...this.checkboxes].forEach( input => {
			input.resetValue()
		});
	}


	onSubmitForm(): void {
		this.form.addEventListener('submit', (e: Event) => {
			e.preventDefault();
			
			const validates = [],
						data = [];


			// selects filter
			// this.selects && this.selects.forEach( (select) => {
			// 	const value = select.selectedValue;
			// 	// validate by rules
			// 	if(!that.validatorRules.select.required && !value) return;
			// 	if(value) {
			// 		validates.push(true);
			// 		data.push({name: select.name, value: value});
			// 	}
			// })


			// file filter
			// this.files && this.files.forEach( (file) => {
			// 	const fileIn = file,
			// 				value = fileIn.file,
			// 				name = fileIn.name;
			// 	if(!that.validatorRules.select.required && !value) return;
			// 	if(value) {
			// 		validates.push(true);
			// 		data.push({name: name, value: value});
			// 	}
			// })


			// inputs filter
			this.textInputs && this.textInputs.forEach( (textIn) => {
				const input = textIn,
							name = textIn.getName,
							value = textIn.getValue;
				
				if(this.validatorRules[name] && !this.validatorRules[name].required && value == '') {
					return;
				} else {
					const isValid = input.onSubmit();
					validates.push(isValid);
					if(isValid) data.push({name: name, value: value});
				}
			})


			// checkbox filter
			this.checkboxes && this.checkboxes.forEach( (checkbox) => {
				const checkIn = checkbox,
							name = checkIn.name;
				if(this.validatorRules[name] && !this.validatorRules[name].required) return;
				if(this.validatorRules[name] && this.validatorRules[name].required) {
					const isValid = checkIn.onSubmit();
					validates.push(isValid);
				}
				data.push({name: name, value: checkIn.checkbox.checked});
			})


			// hidden Inputs
			this.hiddenInputs && this.hiddenInputs.forEach( (input) => {
				if(!input.value) return;
				validates.push(true);
				data.push({name: input.name, value: input.value});
			})


			const isValidForm = validates.every(Boolean);
			if(!isValidForm) return;


			const route = this.form.dataset.route;
			const requestData = new FormData();
			data.forEach( prop => requestData.append(prop.name, prop.value));
			fetch(route, {
				method: 'POST',
				body: requestData
			})
			.then( response => {
				if(response.status >= 200 && response.status < 400) {
					this.form.classList.remove('is-error');
					document.querySelectorAll('.popup').forEach( (popup: HTMLElement) => bodyOverflow(popup, false));
					bodyOverflow(this.thanksPopup, true);
					setInterval( _ => bodyOverflow(this.thanksPopup, false), 10000)
					this.resetValues();
				} else {
					this.form.classList.add('is-error');
				}
			})
		})
	}
}