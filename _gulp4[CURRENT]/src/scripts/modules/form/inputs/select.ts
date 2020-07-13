import navigateAnchorTo from '../../anchors/natigateAnchorTo'

interface IValidateSettings {
	readonly required: boolean
}


export default class CustomSelect {
	private selectWrapper: HTMLElement
	private isOpened: boolean
	private textHolder: HTMLElement
	private variants: NodeList
	private validateSettings: IValidateSettings

	constructor(select, validator) {
		this.selectWrapper = select;
		this.variants = this.selectWrapper.querySelectorAll('.js__variant input');
		this.isOpened = false;
		this.textHolder = this.selectWrapper.querySelector('.js__text');
		this.validateSettings = validator;

		this.selectWrapper.addEventListener('click', this.toggleDropdown.bind(this));
		this.onSelect();
		this.changeValueByAnchor();
	}

	toggleDropdown() {
		if(!this.isOpened) {
			this.selectWrapper.classList.add('is-opened');
			this.isOpened = true;
		} else {
			this.closeDropDown();
		}
	}

	closeDropDown() {
		this.selectWrapper.classList.remove('is-opened');
		this.isOpened = false;
	}

	onSelect() {
		if(this.variants.length === 0 ) return;
		this.variants.forEach( (input: HTMLLabelElement) => {
			input.addEventListener('change', this.selectItem.bind(input, this));
		})
	}

	selectItem(context) {
		const that = context;
		that.textHolder.textContent = (this as HTMLInputElement).value;
		that.closeDropDown();
	}

	changeValueByAnchor() {
		const links = document.querySelectorAll('.js__select-change'),
					that = this;
		if(!links.length) return;


		links.forEach( (link: HTMLElement) => {
			link.addEventListener('click', changeSelect);
		})

		function changeSelect(e) {
			navigateAnchorTo(this);

			that.variants.forEach( (input: HTMLInputElement) => {
				if(this.dataset.selectValue === input.value) {
					input.checked = true;
					that.textHolder.textContent = input.value;
				} else {
					input.checked = false;
				}
			})
		}
	}

	resetValue() {
		this.variants.forEach( (input:HTMLInputElement) => input.checked = false );
		this.textHolder.textContent = this.textHolder.dataset.placeholder.toString();
	}

	get name() {
		const name = (this.variants[0] as HTMLInputElement).name;
		return name;
	}
	get selectedValue() {
		const val = Array.from(this.variants).find( (input: HTMLInputElement) => input.checked) as HTMLInputElement;
		return val ? val.value : null;
	}
}