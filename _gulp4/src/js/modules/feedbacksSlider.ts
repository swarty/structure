export default class FeedbacksSlider {
	private slider: HTMLElement | null
	private prevButton: HTMLElement
	private nextButton: HTMLElement
	
	constructor() {
		this.slider = document.querySelector('.js__feedbacks-slider') || null;
		this.prevButton = document.querySelector('.js__feedbacks-prev-button') || null;
		this.nextButton = document.querySelector('.js__feedbacks-next-button') || null;

		this.slider && this.init()
	}

	init() {
		$(this.slider).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: this.prevButton,
			nextArrow: this.nextButton,
			infinite: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 639,
					settings: {
						slidesToShow: 1
					}
				}
			]
		})
	}
}