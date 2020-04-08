import bodyOverflow from './bodyOverflow';

export default class Header {
	private header: HTMLElement
	private menuOpen: HTMLButtonElement
	private menuClose: HTMLButtonElement
	private menuOpened: boolean

	constructor() {
		this.header = document.querySelector('.header');
		this.menuOpen = document.querySelector('.js__menu-open');
		this.menuClose = document.querySelector('.js__menu-close');
		this.menuOpened = false;

		this.init();
	}

	init() {
		this.menuOpen && this.menuOpen.addEventListener('click', this.openMenu.bind(this));
		this.menuClose && this.menuClose.addEventListener('click', this.closeMenuOnButton.bind(this));
	}

	openMenu() {
		this.menuOpened = true;
		this.toggleButtons();
		bodyOverflow(this.header, this.menuOpened);
	}

	closeMenuOnButton() {
		this.menuOpened = false;
		this.toggleButtons();
		bodyOverflow(this.header, this.menuOpened);
	}

	toggleButtons() {
		this.menuOpen.classList.toggle('is-hidden');
		this.menuClose.classList.toggle('is-hidden');
	}

	closeMenu() {
		this.menuOpened = false;
		this.menuOpen.classList.remove('is-hidden');
		this.menuClose.classList.add('is-hidden');
		bodyOverflow(this.header, this.menuOpened);
	}
}