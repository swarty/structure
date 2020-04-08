export default class Hero {
	private photoSlider: HTMLElement
	private videoSlider: HTMLElement
	private prevArrow: HTMLButtonElement
	private nextArrow: HTMLButtonElement
	private positionOFSlider: HTMLElement

	constructor() {
		this.photoSlider = document.querySelector('.js__hero-img-slider');
		this.videoSlider = document.querySelector('.js__hero-small-slider');
		this.prevArrow = document.querySelector('.js__hero-slide-prev');
		this.nextArrow = document.querySelector('.js__hero-slide-next');
		this.positionOFSlider = document.querySelector('.js__hero-slider-step span');

		this.photoSlider && this.videoSlider && this.init();
	}

	init() {
		this.slidersInit();
	}

	slidersInit() {
		const sliderSettings = {
			draggable: false,
			initialSlide: 0,
			infinite: false,
			waitForAnimate: true,
			speed: 500
		};

		$(this.photoSlider).slick({
			...sliderSettings,
			asNavFor: this.videoSlider,
			prevArrow: this.prevArrow,
			nextArrow: this.nextArrow,
		});

		$(this.photoSlider).on('afterChange', (_, {currentSlide}) => {
			let str = '';
			if(currentSlide <= 9) str = '0' + (currentSlide + 1);
			this.positionOFSlider.innerHTML = str;
		})

		$(this.videoSlider).slick({
			...sliderSettings,
			arrows: false,
			asNavFor: this.photoSlider
		});
	}
}