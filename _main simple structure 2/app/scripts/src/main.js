// your js

document.addEventListener('DOMContentLoaded', function () {

	// svg inliner 
	if(document.querySelector('.svg')){
        new SVGInliner(document.querySelectorAll(".svg"));
    }

   
	$('.js-open__selector').click( function() {
		let dropDown = $(this).parent().parent().next(),
			label = $(this).parent().parent();
		dropDown.toggleClass('payments__dropdown--active');
		label.toggleClass('payments__form__label--active');
	})

	$(document).ready(function() {
	  $('.js-payment__select').niceSelect();
	});


	// articles show more
	$('.js-article__show-more').click( function(e) {
		// add five first
		let nodes = $('.js-article__more .articles__new');
		
		let hideNodes = [];
		nodes.each( (index,element) => {
			if(!element.classList.contains('articles__new--open')){
				hideNodes.push(element);
			}
		})

		// display 5 elements every time
		hideNodes.forEach( (element, index) => {
			if(index < 5){
				$(element).addClass('articles__new--open');
				$(element).slideDown();
			}
		})

		// hide button
		if(hideNodes.length < 6){
			$(this).slideUp();
		}
	})


	// partners show more
	$('.js-partners__show-more').click( function(e) {
		// add five first
		let nodes = $('.js-partners__blocks .partners__block');
		
		let hideNodes = [];
		nodes.each( (index,element) => {
			if(!element.classList.contains('partners__block--open')){
				hideNodes.push(element);
			}
		})

		// display 5 elements every time
		hideNodes.forEach( (element, index) => {
			if(index < 8){
				$(element).addClass('partners__block--open');
				$(element).slideDown();
			}
		})

		// hide button
		if(hideNodes.length < 9){
			$(this).slideUp();
		}
	})


	// open popup articles
	$('.js-hash__open').click( function() {
		$(this).addClass('hash-wr--active');
		$('.articles__hashes__popup').addClass('articles__hashes__popup--open');
	})

	$('.js-articles__close').click( function() {
		if(!$(this).parent().find('.hash-wr--active')){
			$('.js-hash__open').removeClass('hash-wr--active');
		}
		$('.articles__hashes__popup').removeClass('articles__hashes__popup--open');
	})





	// calendar on page events logic
	let eventsInfo = [
		{
			// date in format 29/08/2018
			eventDate: '29/09/2018',
			eventInfo: 'Weekends with ovary laaaaaaaa',
			eventLink: 'https://www.google.com'
		},
		{
			// date in format 29/08/2018
			eventDate: '29/09/2018',
			eventInfo: 'Weekends with ovary laaaaaaaa',
			eventLink: 'https://www.google.com'
		},
		{
			// date in format 29/08/2018
			eventDate: '29/09/2018',
			eventInfo: 'Weekends with ovary laaaaaaaaa',
			eventLink: '#'
		},
		{
			eventDate: '10/10/2018',
			eventInfo: 'Hello from Highway on Hell',
			eventLink: '#'
		}
	];

	// request to base for get date
	// $.get('some url with info', function (data){
	// 	eventsInfo = data;
	// })


	// calendar
	$('#datepicker').datepicker({
		// minDate: new Date(),
		inline: true,
		language: {
			days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
		    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
		    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		    monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
		    today: 'Сегодня',
		    clear: 'Очистить',
		    dateFormat: 'dd.mm.yyyy',
		    timeFormat: 'hh:ii',
		    firstDay: 1
		},
		onRenderCell(date, cellType) {
			// date in format 29/08/2018
			let cellDate = moment(date).format("DD/MM/YYYY"),
				stringDate = `<p class="event__p">${moment(date).format("D")}</p>`,
				stringInfo = '',
				counter = 0,
				dataObj;

			eventsInfo.forEach( element => {
				// check if we have some event on mas events
				if(element.eventDate == cellDate){
					stringInfo += ` <a target="_blank" rel="nofollow" href="${element.eventLink}" class="event__p">${element.eventInfo}</a>`;
					counter++;
				}
			})

			if(counter > 0 && counter < 2){
				dataObj = {
					classes: 'some-event fw',
					html: `${stringDate} ${stringInfo}`
				}
				return dataObj;
			} else if(counter > 1){
				dataObj = {
					classes: 'some-event fw',
					html: `${stringDate} <div class="event__wrapper">${stringInfo}</div>`
				}
				return dataObj;
			}
			
			
		}
	})

	// open calendar tab and hide another tabs
	$('.js-calendar__open').click( function() {
		$('.events__content').slideToggle();
		$('.calendar__container').slideToggle();
		$('.js-calculator__events').slideToggle();
		$('.js-img__calendar').toggle();
		$('.js-img__close').toggle();
	})

	// custom scroll bar on events in datepicker
	enquire.register('screen and (min-width: 767px)', {
	    match : function() {
	        $('.event__wrapper').mCustomScrollbar();
	        $('.event__wrapper').mCustomScrollbar("update");
	    },
	    unmatch : function() {
	        $('.event__wrapper').mCustomScrollbar("destroy")
	    }
	});


	// tour page
	// slider
	$('.js-tour__slider').slick({
		arrows: false,
		draggable: false,
		infinite: false,
		fade: true
	})

	// slider nav
	setTimeout( function() {
		$('.js-slider__dot').click( function() {
			let dot = $(this).parent().data('slider-dot');
			$('.js-slider__dot').parent().removeClass('v-tour__slider__item--active');
			$(this).parent().addClass('v-tour__slider__item--active');

			$('.js-tour__slider')[0].slick.slickGoTo(parseInt(dot));
			changeDotText();
		})

		changeDotText();
	}, 0)

	function changeDotText() {
		let dotText = $('.v-tour__slider__item--active').find('p').html();
		$('.js-slider__text').html(dotText);
	}	
	
	

   
})