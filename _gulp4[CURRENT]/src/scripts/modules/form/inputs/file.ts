export default class FileInput {
	private fileWr: HTMLLabelElement
	private input: HTMLInputElement
	private textHolder: HTMLElement
	private rules: string
	private file: File | null
	private readonly maxSize: number

	constructor(fileWr) {
		this.fileWr = fileWr;
		this.input = this.fileWr.querySelector('input[type="file"]');
		this.file = null;
		this.maxSize = 30000;
		this.textHolder = this.fileWr.querySelector('.js__text');
		this.rules = this.input.accept;
		this.input.addEventListener('change', this.onLoadFile.bind(this, this.input));
	}

	onLoadFile(file) {
		this.file = file.files[0] || null;
		
		if(!this.file && this.textHolder) {
			this.resetPlaceholder();
			this.hideError();
			return;
		}
		
		if(this.validate()) {
			this.textHolder.textContent = this.file.name;
			this.fileWr.classList.add('is-loaded');
			this.hideError();
		} else {
			this.file = null;
			this.resetPlaceholder();
			this.showError();
		}
		
	}

	resetPlaceholder() {
		this.textHolder.textContent = this.textHolder.dataset.placeholder;
		this.fileWr.classList.remove('is-loaded');
	}

	showError() {
		this.fileWr.classList.add('is-error');
	}

	hideError() {
		this.fileWr.classList.remove('is-error');
	}

	validate() {
		// create regexp from accept field on input
		const reg = new RegExp(`(${this.rules.split(', ').join('|')})$`, 'i')
		const valid = 
			// check for regexp match
			reg.test(this.file.name) &&
			// check for size 30mb match
			Number((this.file.size / 1000).toFixed(0)) < this.maxSize;
		return valid;
	}

	resetValue() {
		this.file = null;
		this.resetPlaceholder();
	}

	get name() {
		return this.input.name;
	}
}