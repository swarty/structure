$(document).ready(function () {
	jQuery('.list-menu .list-name').click(function () {
		var $this = jQuery(this).parent().find('.main-menu');
		var bar = 0;
		jQuery(this).toggleClass('open');
		jQuery('.list-menu').removeClass('active');

		if (jQuery(this).hasClass('open'))
			jQuery(this).parent().addClass('active');

		if (jQuery(this).hasClass('open')) bar = 1;
		jQuery('.list-menu .list-name').removeClass('open');
		jQuery('.main-menu').hide();
		if (bar) {
			$this.show();
			jQuery(this).addClass('open');
		} else {
			jQuery(this).removeClass('open');
		}
	});



	// function open popups
	function openPopup(selector, popupId) {
		$(selector).click(function () {
			$('body').addClass('body-overflow');
			$(popupId).fadeIn();
		})
	}

	// function close popups
	function popupsClose() {
		$('.js-popup__close').click(function () {
			$('.popup').fadeOut();
			$('body').removeClass('body-overflow');
		})
	}
	popupsClose();

	// open request popup
	if (document.querySelector('.js-open__request-popup')) {
		openPopup('.js-open__request-popup', '.js-popup__request');
	}

	// open request popup
	if (document.querySelector('.js-open__tender-popup')) {
		openPopup(selector, '.js-popup__tender')
	}


	// validator forms
	$.validator.addMethod("notnumbers", function (value, element) {
        var Reg61 = new RegExp("^.*[^A-zА-яЁёіЇїЄєҐґ ].*$");
        return !Reg61.test(value);
    });
    //add validation rules
    var rules = {
        email: {
            required: true,
            email: true,
        },
        name: {
            required: true,
            notnumbers: true,
            minlength: 2,
            maxlength: 32,
		},
		orgname: {
			required: true,
            minlength: 2,
            maxlength: 32,
		},
        password: {
            required: true,
            minlength: 4,
        },
        message: {
            required: true,
            minlength: 1,
        },
        surname: {
            required: true,
            notnumbers: true,
            minlength: 2,
            maxlength: 32,
        },
        phone: {
            required: true,
            digits: true,
		},
		field: {
			required: true,
		}
    }
    var messages = {
        email: {
            required: $('input[name="email"]').attr('data-error'),
            email: $('input[name="email"]').attr('data-error'),
        },
        name: {
            required: $('input[name="name"]').attr('data-error'),
            minlength: $('input[name="name"]').attr('data-error'),
            maxlength: $('input[name="name"]').attr('data-error'),
            notnumbers: $('input[name="name"]').attr('data-error'),
		},
		orgname:{
			required: $('input[name="name"]').attr('data-error'),
            minlength: $('input[name="name"]').attr('data-error'),
            maxlength: $('input[name="name"]').attr('data-error'),
		},
        surname: {
            required: $('input[name="surname"]').attr('data-error'),
            minlength: $('input[name="surname"]').attr('data-error'),
            maxlength: $('input[name="surname"]').attr('data-error'),
            notnumbers: $('input[name="surname"]').attr('data-error'),
        },
        phone: {
            required: $('input[name="phone"]').attr('data-error'),
            digits: $('input[name="phone"]').attr('data-error'),
        },
        message: {
            required: $('textarea[name="message"]').attr('data-error'),
            minlength: $('textarea[name="message"]').attr('data-error'),
            notnumbers: $('textarea[name="message"]').attr('data-error'),
		},
		field: {
			required: $('input[name="field"]').attr('data-error'),
		}
	};
	

	// request form validate
	if (document.querySelector('.js-form__request')) {

        var nameForm = $('.js-form__request');

        nameForm.validate({
            rules: rules,
            highlight: function (element, errorClass) {
                $(element).addClass('input--error');
            },
            unhighlight: function (element, errorClass) {
                $(element).removeClass('input--error');
            },
            messages: messages,
            submitHandler: function submitHandler(nameForm) {

				var data = new FormData();
					data.append('name',$(nameForm).find('input[name="name"]').val());
					data.append('email',$(nameForm).find('input[name="email"]').val());
					data.append('phone', $(nameForm).find('input[name="phone"]').val());
					data.append('theme', $(nameForm).find('.current').text());
					data.append('message', $(nameForm).find('input[name="message"]').val());
					data.append('file', $(nameForm).find('input[name="field"]').prop('files')[0]);

                $.post('/wp-admin/admin-ajax.php?action=callback', {
                    
                }).done(function (data) {
                    var validator = $(nameForm).validate();
                    validator.resetForm();
					nameForm.reset();
					// thanks popup open if good
                    $('.js-popup__thanks').fadeIn();
                }).always(function () {
                    // preloader
                });
            }

        })
	}
	

	// tender form validate
	if (document.querySelector('.js-form__tender')) {

        var nameForm = $('.js-form__tender');

        nameForm.validate({
            rules: rules,
            highlight: function (element, errorClass) {
                $(element).addClass('input--error');
            },
            unhighlight: function (element, errorClass) {
                $(element).removeClass('input--error');
            },
            messages: messages,
            submitHandler: function submitHandler(nameForm) {

				var data = new FormData();
					data.append('name',$(nameForm).find('input[name="name"]').val());
					data.append('email',$(nameForm).find('input[name="email"]').val());
					data.append('phone', $(nameForm).find('input[name="phone"]').val());
					data.append('theme', $(nameForm).find('input[name="orgname"]').val());
					data.append('message', $(nameForm).find('input[name="message"]').val());
					data.append('file', $(nameForm).find('input[name="field"]').prop('files')[0]);

                $.post('/wp-admin/admin-ajax.php?action=callback', {
                    
                }).done(function (data) {
                    var validator = $(nameForm).validate();
                    validator.resetForm();
					nameForm.reset();
					// thanks popup open if good
                    $('.js-popup__thanks').fadeIn();
                }).always(function () {
                    // preloader
                });
            }

        })
	}
	

	// review form validate
	if (document.querySelector('.js-form__review')) {

        var nameForm = $('.js-form__review');

        nameForm.validate({
            rules: rules,
            highlight: function (element, errorClass) {
                $(element).addClass('input--error');
            },
            unhighlight: function (element, errorClass) {
                $(element).removeClass('input--error');
            },
            messages: messages,
            submitHandler: function submitHandler(nameForm) {

				var data = new FormData();
					data.append('name',$(nameForm).find('input[name="name"]').val());
					data.append('email',$(nameForm).find('input[name="email"]').val());
					data.append('phone', $(nameForm).find('input[name="phone"]').val());
					data.append('message', $(nameForm).find('input[name="message"]').val());
					data.append('file', $(nameForm).find('input[name="field"]').prop('files')[0]);

                $.post('/wp-admin/admin-ajax.php?action=callback', {
                    
                }).done(function (data) {
                    var validator = $(nameForm).validate();
                    validator.resetForm();
					nameForm.reset();
					// thanks popup open if good
					$('.js-reviews__form').hide();
                    $('.js-reviews__thanks').show();
                }).always(function () {
                    // preloader
                });
            }

        })
	}
	

	// contacts form validate
	if (document.querySelector('.js-form__contacts')) {

        var nameForm = $('.js-form__contacts');

        nameForm.validate({
            rules: rules,
            highlight: function (element, errorClass) {
                $(element).addClass('input--error');
            },
            unhighlight: function (element, errorClass) {
                $(element).removeClass('input--error');
            },
            messages: messages,
            submitHandler: function submitHandler(nameForm) {

				var data = new FormData();
					data.append('name',$(nameForm).find('input[name="name"]').val());
					data.append('email',$(nameForm).find('input[name="email"]').val());
					data.append('phone', $(nameForm).find('input[name="phone"]').val());
					data.append('message', $(nameForm).find('input[name="message"]').val());
					data.append('file', $(nameForm).find('input[name="field"]').prop('files')[0]);

                $.post('/wp-admin/admin-ajax.php?action=callback', {
                    
                }).done(function (data) {
                    var validator = $(nameForm).validate();
                    validator.resetForm();
					nameForm.reset();
					// thanks popup open if good
					$('.js-reviews__form').hide();
                    $('.js-reviews__thanks').show();
                }).always(function () {
                    // preloader
                });
            }

        })
    }



	if(document.querySelector('select')){
		$('select').niceSelect();
	}

	if(document.querySelector('.js-map__details')){
		$('.js-map__details').click( function() {
			that = $(this);
			$('.js-map__from').toggleClass('map-form__col--32');
			$('.js-map__to').toggleClass('map-form__col--32');
			$('.js-map__to').toggle();			
		})
	}

	if(document.querySelector('.js-map__details')){
		$('.js-map__drop').click( function() {
			$(this).find('.map-form__inputs--select').toggleClass('map-form__inputs--active');
			$('.map-form__dropdown').toggleClass('map-form__dropdown--show');
		})
	}



});
$(document).ready(function () {
	$(".burger").click(function () {
		$("aside").toggle();
		$('.burger').toggleClass('open');
		$('body').toggleClass('scroll-hide');
	});
});




initMap();
function initMap() {
    var map,
		markers = [],
		directionService,
		directionsDisplay,
		routeBoxer;
    $(function () {
		directionService = new google.maps.DirectionsService();
		directionsDisplay = new google.maps.DirectionsRenderer();
		routeBoxer = new RouteBoxer();
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 50.446761,
                lng: 30.444613
            },
            zoom: 10,
            styles: [{
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [{
                        "saturation": "-100"
                    }]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                            "saturation": -100
                        },
                        {
                            "lightness": 65
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                            "saturation": -100
                        },
                        {
                            "lightness": "50"
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                        "saturation": "-100"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "all",
                    "stylers": [{
                        "lightness": "30"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "all",
                    "stylers": [{
                        "lightness": "40"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                            "saturation": -100
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                            "hue": "#ffff00"
                        },
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -97
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{
                            "lightness": -25
                        },
                        {
                            "saturation": -100
                        }
                    ]
                }
            ]
        });
        

    });

    // render vue app
    window['mapApp'] = new Vue({
        el: '#map-searcher',
        data: {
            points: [],
            markers: [],
            fuelTypes: [],
            services: [],
            dots: [],
            selected_service: [],
            selected_fuel: [],
            region_filter: '', //the same is region_start
            region_end: '',
            routesFromTo: false,
            region_placeholder: '',
            filterOpened: false,
            region_placeholder_to: '',
            request: {
                origin: '',
                destination: '',
                travelMode: 'DRIVING'
            }
        },
        methods:{
            hideAllMarkers () {
                this.markers.forEach(marker => marker.setVisible(false));
            },

            showAllMarkers () {
                this.markers.forEach(marker => marker.setVisible(true));
            },

            clearFilter () {
                this.selected_fuel.splice(0, this.selected_fuel.length); 
                this.selected_service.splice(0, this.selected_service.length);
                // this.filterPins();
            },
            loadList () {
                $.post('/ajax-handler-wp.php', {action: 'get_map_fuel_types'}).then(r => {
                    return this.fuelTypes = r.items;
                });

                $.post('/ajax-handler-wp.php', {action: 'get_map_services'}).then(r => {
                    return this.services = r.items
                });

                $.post('/ajax-handler-wp.php', {action: 'get_maps_points'}).then(r => {
                    this.dots = r.items;
                    this.loadPins();
                });
            },

            loadPins () {
                this.dots.forEach( point => {
                    var marker = new google.maps.Marker({
                      position: {lat: point.lat, lng: point.lng},
					  map: map,
					  icon: 'images/pin-y.svg',
                    //   icon: '../wp-content/themes/brsm/images/pin-y.svg',
                      title: point.title,
                      fuel_types: point.fuel_types,
                      services: point.services
                    });

                    this.markers.push(marker);
                });
            },

            filterPins() {
                // check if enable route mod
                if (this.routesFromTo) {
                    this.paintPinBlocks();
                    console.log('1')
                    return;
                } 

                // показываем все пины если фильтр "чистый"
                if (this.selected_service.length === 0 && this.selected_fuel.length === 0 && this.region_filter === '') {
                    return this.showAllMarkers();
                }


                if(!this.filterOpened){
                    this.markers.forEach(marker => {
                        var visible = true;
                        if (this.selected_fuel.length > 0) {
                            visible = this.selected_fuel.some(a => marker.fuel_types.includes(a));
                        }
                        
                        if (this.selected_service.length > 0) {
                            visible = this.selected_service.some(a => marker.services.includes(a));
                        }

                        if (this.region_filter.length > 0) {

                            let reg = new RegExp('' + this.region_filter.toLowerCase(), 'i');
                            if (marker.title.toLowerCase().search(reg) >= 0){
                                visible = true;
                            } else if(marker.title.toLowerCase().search(reg) < 0) {
                                visible = false;
                            }
                        }
                        marker.setVisible(visible);
                    });
                }
                
            },
            paintPinBlocks(){



			},
			createRoute() {
				if(this.routesFromTo){
					


				}

			},

            routesEnable() {
                // очищаем фильтры при переключении режима
                console.log('filter enable')
                this.clearFilter();
                this.routesFromTo = true;

                this.region_filter = '';
                this.region_end = '';
            },

            routesDisable() {
                // очищаем фильтры при переключении режима
                console.log('filter disable')
                this.clearFilter();
                this.routesFromTo = false;

                this.region_filter = '';
                this.region_end = '';
            },
        
            initSelectorFrom(){
                const input = document.querySelector('.js-google__from');
                if(this.routesFromTo){
					let autocomplete = new google.maps.places.Autocomplete(input, {placeIdOnly: true});
                }
                google.maps.event.clearInstanceListeners(input);
            },
            initSelectorTo(){
                const input = document.querySelector('.js-google__to');
                if(this.routesFromTo){
					let autocomplete = new google.maps.places.Autocomplete(input, {placeIdOnly: true});
                }
                google.maps.event.clearInstanceListeners(input);
            }

        },
        computed: {
            regionHint() {
                return this.routesFromTo ? this.region_placeholder_to : this.region_placeholder;
            },

        },
        mounted () {
            // данные для переменных берем из data из-за локализации сайта
            this.region_placeholder = $('#map-searcher .map-form__input--region').data('back');
            this.region_placeholder_to = $('#map-searcher .map-form__input--region').data('text');

            this.loadList();
        },
        watch : {

        }
    });

    Vue.config.devtools = true;
}


