interface IValidateSettings {
	readonly reg?: RegExp,
	readonly required: boolean
}

export default class Checkbox {
	private checkbox: HTMLInputElement
	private label: HTMLLabelElement
	private validateSettings: IValidateSettings
	
	constructor(checkbox: HTMLInputElement, validator: IValidateSettings) {
		this.checkbox = checkbox;
		this.label = this.checkbox.parentNode as HTMLLabelElement;

		if(validator) this.validateSettings = validator;
		this.eventOnChange();
	}

	eventOnChange(): void {
		this.checkbox.addEventListener('change', () => {
			if(this.checkbox.checked) this.hideError();
		})
	}

	onSubmit(): boolean {
		const isValid = this.validate();
		isValid
			? this.hideError()
			: this.showError();
		return isValid;
	}

	validate(): boolean {
		return this.validateSettings.required === this.checkbox.checked;
	}

	showError(): void {
		this.label.classList.add('is-error');
	}

	hideError(): void {
		this.label.classList.remove('is-error');
	}

	resetValue(): void {
		this.checkbox.checked = false;
	}

	get name(): string {
		return this.checkbox.name;
	}
}