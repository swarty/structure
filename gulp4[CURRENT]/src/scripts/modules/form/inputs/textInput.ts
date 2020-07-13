interface IValidateSettings {
	readonly reg?: RegExp,
	readonly required: boolean
}


export default class Input {
	private input: HTMLInputElement
	private label: HTMLLabelElement
	private type: string
	private validateSettings: IValidateSettings

	constructor(input: HTMLInputElement, validator: IValidateSettings) {
		this.input = input;
		this.type = this.input.name;
		this.label = this.input.parentNode as HTMLLabelElement;
		this.validateSettings = validator;

		this.events();
	}

	events(): void {
		this.input.addEventListener('blur', this.onBlur.bind(this));
	}


	onBlur(): void {
		const value: string = this.input.value;

		if(value === '') {
			this.hideError();
			return;
		}

		this.validate(value)
			? this.hideError()
			: this.showError();
	}

	onSubmit(): boolean {
		const value: string = this.input.value;

		if(this.checkOnExistRules()) return true;
		if(!this.validateSettings.required && value === '') return true;

		const isValid: boolean = this.validate(value)
			isValid
				? this.hideError()
				: this.showError();
		return isValid;
	}

	showError(): void {
		this.label.classList.add('is-error');
	}

	hideError(): void {
		this.label.classList.remove('is-error');
	}

	validate(value: string | number): boolean {
		if(this.checkOnExistRules()) return true;
		return this.validateSettings.reg.test(value);
	}

	resetValue(): void {
		this.input.value = '';
	}

	checkOnExistRules(): boolean {
		return !this.validateSettings || !this.validateSettings.reg;
	}

	get getValue(): string {
		return this.input.value;
	}
	get getName(): string {
		return this.input.name;
	}
}