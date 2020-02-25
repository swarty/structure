export default class Burger {
	constructor() {
		this.openButton = document.querySelector('.js-burger');
		this.closeButton = document.querySelector('.js-close__burger');
		this.navigation = document.querySelector('.js-navigation__links')
		this.header = document.querySelector('.header');
		this.clickButtonFlag = false;

		this.init();
	}

	init() {
		this.openButton.addEventListener('click', this.openMenu.bind(this));
		this.closeButton.addEventListener('click', this.closeMenu.bind(this));
	}

	openMenu() {
		const that = this;
		that.header.classList.remove('menu-is-close');
		this.header.classList.add('menu-open');


		if(!this.clickButtonFlag) {
			this.clickButtonFlag = true;
			this.header.addEventListener('transitionend', burgerOpened)
		}

		function burgerOpened() {
			that.header.classList.add('menu-opened');
			that.header.removeEventListener('transitionend', burgerOpened);
		}
	}

	closeMenu() {
		const that = this;
		this.header.classList.add('menu-is-close');
		

		if(this.clickButtonFlag) {
			this.clickButtonFlag = false;
			
			that.header.classList.remove('menu-open');
			this.header.addEventListener('transitionend', burgerClose)
		}

		function burgerClose() {
			that.header.classList.remove('menu-opened');
			that.header.removeEventListener('transitionend', burgerClose);
		}
	}
}

new Burger();