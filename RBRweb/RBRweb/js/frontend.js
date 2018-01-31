var factoryplusShortCode = factoryplusShortCode || {},
	factoryplus = factoryplus || {};

( function ( $ ) {
	'use strict';

	$( function() {

		/**
		 * Filter project category
		 */
		$(window).load(function () {
			$('.fp-latest-project').find('.list-project').isotope({
				itemSelector: '.project',
				layoutMode  : 'fitRows'
			});
			$('ul.filter li.active').trigger('click');
		});

		$('ul.filter').on('click', 'li', function (e) {
			e.preventDefault();

			var $this = $( this ),
				selector = $this.attr('data-option-value');

			if ( $this.hasClass( 'active' ) ) {
				return;
			}

			// Shortcode
			$this.parents( '.fp-latest-project' ).find('.list-project').isotope({
				filter: selector,
				layoutMode  : 'fitRows'
			});

		});

		// Counter
		function count($this) {
			var current = parseInt($this.html(), 10);
			current = current + 10;
			$this.html(++current);
			if (current > $this.data('count')) {
				$this.html($this.data('count'));
			}
			else {
				setTimeout(function () {
					count($this);
				}, 5);
			}
		}

		//Section Parallax
		var $parallaxsRow = $('.vc_row.parallax');
		for (var i = 0; i < $parallaxsRow.length; i++) {
			$($parallaxsRow[i]).parallax('50%', 0.6);
		}

		/**
		 * Partner
		 */
		$('.fp-partner .list-item').owlCarousel({
			direction: factoryplus.direction,
            items: 5,
            navigation: false,
            autoPlay: false,
            pagination: false
        });

		/*
		 *  FAQs
		 */
		$( '.fp-faq' ).on( 'click', 'h2', function() {
			var $faq = $( this ).closest( '.fp-faq' );

			$faq.find( '.toggle-content' ).slideToggle( 500, function() {
				$faq.toggleClass( 'active' );
			} );
		} );

		$( '.fp-accordion' ).on( 'click', 'h2, .icons', function() {
			var $faq = $( this ).closest( '.fp-accordion' );

			$faq.find( '.toggle-content' ).slideToggle( 500, function() {
				$faq.toggleClass( 'active' );
			} );
		} );

		$('.counter .value').each(function () {
			$(this).data('count', parseInt($(this).html(), 10));
			$(this).html('0');
			count($(this));
		});

		testimonialCarousel();
		testimonialCarousel2();
		testimonialCarousel3();
		productCarousel();

        /**
         * Init testimonials carousel
         */
        function testimonialCarousel() {
            if (factoryplusShortCode.length === 0 || typeof factoryplusShortCode.testimonial === 'undefined') {
                return;
            }
            $.each(factoryplusShortCode.testimonial, function (id, testimonialData) {
                $(document.getElementById(id)).owlCarousel({
                    direction: factoryplus.direction,
					singleItem: true,
					autoPlay: testimonialData.autoplay,
					pagination: false,
					navigation : true,
					slideSpeed : 300,
					paginationSpeed : 500,
					navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
					itemsTablet: [768, 1],
	                itemsDesktopSmall: [991, 1],
	                itemsDesktop: [1199, 1]
                });
            });
        }

        /**
         * Init testimonials carousel
         */
        function testimonialCarousel2() {
            if (factoryplusShortCode.length === 0 || typeof factoryplusShortCode.testimonial2 === 'undefined') {
                return;
            }
            $.each(factoryplusShortCode.testimonial2, function (id, testimonialData) {
                $(document.getElementById(id)).owlCarousel({
                    direction: factoryplus.direction,
					singleItem: true,
					autoPlay: testimonialData.autoplay,
					pagination: true,
					navigation : false,
					slideSpeed : 300,
					paginationSpeed : 500,
					navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
					itemsTablet: [768, 1],
	                itemsDesktopSmall: [991, 1],
	                itemsDesktop: [1199, 1]
                });
            });
        }

        /**
         * Init testimonials carousel
         */
        function testimonialCarousel3() {
            if (factoryplusShortCode.length === 0 || typeof factoryplusShortCode.testimonial3 === 'undefined') {
                return;
            }
            $.each(factoryplusShortCode.testimonial3, function (id, testimonialData) {
                $(document.getElementById(id)).owlCarousel({
                    direction: factoryplus.direction,
					items: 2,
					autoPlay: testimonialData.autoplay,
					pagination: true,
					navigation : false,
					slideSpeed : 300,
					paginationSpeed : 500,
					navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
					itemsTablet: [768, 1],
	                itemsDesktopSmall: [991, 1],
	                itemsDesktop: [1199, 1]
                });
            });
        }

        /**
         * Init product carousel
         */
        function productCarousel() {
            if (factoryplusShortCode.length === 0 || typeof factoryplusShortCode.product === 'undefined') {
                return;
            }
            $.each(factoryplusShortCode.product, function (id, productData) {
            	var columns = 4;
				if (productData.columns < 4) {
					columns = productData.columns;
				}

                $(document.getElementById(id)).find('ul.products').owlCarousel({
                    direction: factoryplus.direction,
					items: productData.columns,
					autoPlay: productData.autoplay,
					pagination: false,
					navigation : true,
					slideSpeed : 300,
					paginationSpeed : 500,
					navigationText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
                });
            });
        }


		$( '.fp-related-project .related-project' ).owlCarousel( {
			direction: factoryplus.direction,
			singleItem: false,
			items: 4,
			slideSpeed : 800,
			navigation: true,
			pagination: false,
			autoPlay: true,
			paginationSpeed : 1000,
			navigationText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
		} );

		$( '.fp-project-carousel' ).each( function(){
			var $this = $( this);

			$this.find( '.list-project' ).owlCarousel({
				direction: factoryplus.direction,
				singleItem: false,
				items: 4,
				autoPlay: 5000,
				pagination: false,
				navigation : true,
				slideSpeed : 300,
				paginationSpeed : 500,
				navigationText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>']
			} );
		} );

		factoryplusMaps();

		/**
         * Init Google maps
         */
        function factoryplusMaps() {
            if (factoryplusShortCode.length === 0 || typeof factoryplusShortCode.map === 'undefined') {
                return;
            }
            var styles =
            	[
                    {
				        'featureType': 'landscape',
				        'elementType': 'all',
				        'stylers': [
				            { 'saturation': -100 },
				            { 'lightness': 65 },
				            { 'visibility': 'on' }
				        ]
				    },
				    {
						'featureType': 'water',
						'elementType': 'geometry',
						'stylers': [
							{ 'hue': '#fde18b' },
							{ 'saturation': 94 },
							{ 'lightness': 4 },
							{ 'visibility': 'on' }
						]
					},{
						'featureType': 'water',
						'elementType': 'labels',
						'stylers': [
							{ 'hue': '#444444' },
							{ 'saturation': -100 },
							{ 'lightness': -65 },
							{ 'visibility': 'off' }
						]
					},{
						'featureType': 'road',
						'elementType': 'geometry',
						'stylers': [
							{ 'hue': '#ffffff' },
							{ 'saturation': -100 },
							{ 'lightness': 100 },
							{ 'visibility': 'on' }
						]
					},{
						'featureType': 'road.highway',
						'elementType': 'labels',
						'stylers': [
							{ 'hue': '#bababa' },
							{ 'saturation': -100 },
							{ 'lightness': 25 },
							{ 'visibility': 'on' }
						]
					},{
						'featureType': 'road.arterial',
						'elementType': 'all',
						'stylers': [
							{ 'hue': '#bababa' },
							{ 'saturation': -100 },
							{ 'lightness': -5 },
							{ 'visibility': 'on' }
						]
					},{
						'featureType': 'poi',
						'elementType': 'all',
						'stylers': [
							{ 'hue': '#f2f2f2' },
							{ 'saturation': -100 },
							{ 'lightness': 77 },
							{ 'visibility': 'on' }
						]
					},{
						'featureType': 'poi',
						'elementType': 'labels',
						'stylers': [
							{ 'hue': '#444444' },
							{ 'saturation': -100 },
							{ 'lightness': -66 },
							{ 'visibility': 'simplified' }
						]
					},{
						'featureType': 'administrative',
						'elementType': 'labels',
						'stylers': [
							{ 'hue': '#444444' },
							{ 'saturation': 0 },
							{ 'lightness': -48 },
							{ 'visibility': 'simplified' }
						]
					},{
						'featureType': 'road.arterial',
						'elementType': 'geometry',
						'stylers': [
							{ 'hue': '#e6e6e6' },
							{ 'saturation': -100 },
							{ 'lightness': 57 },
							{ 'visibility': 'on' }
						]
					}
                ];


            var mapOptions = {
                scrollwheel: false,
                draggable: true,
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                panControl: false,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                },
                scaleControl: false,
                streetViewControl: false

            },
            customMap;

            var bounds = new google.maps.LatLngBounds();
            var infoWindow = new google.maps.InfoWindow();


            $.each(factoryplusShortCode.map, function (id, mapData) {

            	customMap = new google.maps.StyledMapType(styles,
                    {name: 'Styled Map'});

                if ( mapData.number > 1 ) {
					mutiMaps(infoWindow, bounds, mapOptions, mapData, id, styles, customMap);
				} else {
					singleMap(mapOptions, mapData, id, styles, customMap);
				}

            });
        }

        function singleMap(mapOptions, mapData, id, styles, customMap) {
			var map,
				marker,
				location = new google.maps.LatLng(mapData.lat, mapData.lng);

			// Update map options
			mapOptions.zoom = parseInt(mapData.zoom, 10);
			mapOptions.center = location;
			mapOptions.mapTypeControlOptions = {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP]
			};

			// Init map
			map = new google.maps.Map(document.getElementById(id), mapOptions);

			// Create marker options
			var markerOptions = {
				map     : map,
				position: location
			};
			if (mapData.marker) {
				markerOptions.icon = {
					url: mapData.marker
				};
			}

			map.mapTypes.set('map_style', customMap);
			map.setMapTypeId('map_style');

			// Init marker
			marker = new google.maps.Marker(markerOptions);

			if (mapData.info) {
				var infoWindow = new google.maps.InfoWindow({
					content : '<div class="info-box fb-map">' + mapData.info + '</div>',
					maxWidth: 600
				});

				google.maps.event.addListener(marker, 'click', function () {
					infoWindow.open(map, marker);
				});
			}
		}

		function mutiMaps(infoWindow, bounds, mapOptions, mapData, id, styles, customMap) {

			// Display a map on the page
			mapOptions.zoom = parseInt(mapData.zoom, 10);
			mapOptions.mapTypeControlOptions = {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP]
			};

			var map = new google.maps.Map(document.getElementById(id), mapOptions);
			map.mapTypes.set('map_style', customMap);
			map.setMapTypeId('map_style');
			for (var i = 0; i < mapData.number; i++) {
				var lats = mapData.lat,
					lng = mapData.lng,
					info = mapData.info;

				var position = new google.maps.LatLng(lats[i], lng[i]);
				bounds.extend(position);

				// Create marker options
				var markerOptions = {
					map     : map,
					position: position
				};
				if (mapData.marker) {
					markerOptions.icon = {
						url: mapData.marker
					};
				}

				// Init marker
				var marker = new google.maps.Marker(markerOptions);

				// Allow each marker to have an info window
				googleMaps(infoWindow, map, marker, info[i]);

				// Automatically center the map fitting all markers on the screen
				map.fitBounds(bounds);
			}
		}

        function googleMaps(infoWindow, map, marker, info) {
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent(info);
                infoWindow.open(map, marker);
            });
        }

	} );
} )( jQuery );
