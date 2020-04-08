import bodyOverflow from "./bodyOverflow";


export default class Gallery {
	private gallerySliderNode: HTMLElement | null
	private galleryPopup: HTMLElement | null
	private galleryPopupSlider: HTMLElement | null

	constructor() {
		this.gallerySliderNode = document.querySelector('.js__gallery-slider') || null;
		this.galleryPopup = document.querySelector('.js__gallery-popup') || null;
		this.galleryPopupSlider = document.querySelector('.js__popup-gallery-slider') || null;
		this.init();
	}

	init() {
		if(this.gallerySliderNode && this.galleryPopupSlider) {
			this.initGallerySlider();
		 	this.initPopupSlider();
		}
	}
	initGallerySlider() {
		const prevButton = document.querySelector('.js__gallery-prev-button'),
					nextButton = document.querySelector('.js__gallery-next-button'),
					sliderNavigation = document.querySelector('.js__gallery-navigation') || null,
					that = this;
		let gallerySlider = null;

		gallerySlider = $(this.gallerySliderNode).slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			rows: 2,
			slidesPerRow: 1,
			prevArrow: prevButton,
			nextArrow: nextButton,
			waitForAnimate: true,
			infinite: false,
			draggable: false,
			responsive: [
				{
					breakpoint: 1023,
					settings: {
						slidesToShow: 3,
        		slidesToScroll: 3
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
        		slidesToScroll: 2
					}
				},
				{
					breakpoint: 414,
					settings: {
						slidesToShow: 1,
        		slidesToScroll: 1
					}
				},
			]
		})

		// tabs navigation of slider
		function navigation() {
			sliderNavigation && sliderNavigation.addEventListener('click', handler);

			function handler(e) {
				const target: HTMLElement = e.target;
				if(target.nodeName.toLowerCase() !== 'button') return;

				// add clear active class from buttons
				sliderNavigation.querySelectorAll('button').forEach( element => {
					element.classList.remove('is-active');
				})
				// add active class on target filter element
				target.classList.add('is-active');

				const filter = target.dataset.filter;
				$(gallerySlider).slick('slickUnfilter');
				$(gallerySlider).slick('slickFilter', (index, element) => {
					if(filter === '') return true;
					const slide = element.querySelector('[data-filter*=' + filter + ']') || null;
					if(slide) return true;
					return false;
				});
			}
		}

		// lightshot popup logic
		function lightshot() {
			const areas = document.querySelectorAll('.js__gallery-lightshot');

			areas.forEach( area => area.addEventListener('click', openLightshot));

			function openLightshot() {
				const index = +this.dataset.popupSlide;
				$(that.galleryPopupSlider).slick('slickSetOption', 'speed', 0);
				$(that.galleryPopupSlider).slick('slickGoTo', index);
				$(that.galleryPopupSlider).slick('refresh');
				bodyOverflow(that.galleryPopup, true);
				$(that.galleryPopupSlider).slick('slickSetOption', 'speed', 600)
			}
		}

		navigation();
		lightshot();
	}

	initPopupSlider() {
		const prevArrow = document.querySelector('.js__popup-gallery-prev'),
					nextArrow = document.querySelector('.js__popup-gallery-next');

		$(this.galleryPopupSlider).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			infinite: false
		})
	}
}