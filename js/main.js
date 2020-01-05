'use strict';
let map;

function initMap() {
	let map, coords, styles, marker, info, content;

	coords = {
		lat: -24.548298,
		lng: 133.200039
	};

	content = '<h1 class="info-title">I\'m here</h1>';

	styles = [
		{
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#f5f5f5"
			}
		  ]
		},
		{
		  "elementType": "labels.icon",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#616161"
			}
		  ]
		},
		{
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#f5f5f5"
			}
		  ]
		},
		{
		  "featureType": "administrative.land_parcel",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#bdbdbd"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#eeeeee"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#e5e5e5"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#ffffff"
			}
		  ]
		},
		{
		  "featureType": "road.arterial",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#dadada"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#616161"
			}
		  ]
		},
		{
		  "featureType": "road.local",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		},
		{
		  "featureType": "transit.line",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#e5e5e5"
			}
		  ]
		},
		{
		  "featureType": "transit.station",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#eeeeee"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#c9c9c9"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		}
	  ]

  map = new google.maps.Map(document.getElementById('map'), {
	center: coords,
	zoom: 4,
	styles: styles,
	disableDefaultUI: true,
	zoomControl: true,
	streetViewControl: true,
  });

  marker = new google.maps.Marker({
	  position: coords, 
	  map: map,
	  icon: 'images/marker.png',
	  draggable: true
	});

	info = new google.maps.InfoWindow({
		content: content
	  });

	marker.addListener('click', function() {
		info.open(map, marker);
	});
}

(function ($) {
    $(document).ready(function () {
		// Slider
		$('.sl').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: true
		});

        let sections = {
            head: $('#head').offset().top,
            about: $('#about').offset().top,
            news: $('#news').offset().top,
            gallery: $('#gallery').offset().top,
            map: $('#map').offset().top
        };


        $(window).scroll(function () {
            let scrTop = $(document).scrollTop() + ($(window).height() / 3),
                pos;

            if (scrTop > sections.head && scrTop < sections.about) {
                pos = 'head';
            } else if (scrTop >= sections.head && scrTop < sections.about) {
                pos = 'about';
            } else if (scrTop >= sections.about && scrTop < sections.news) {
                pos = 'news';
            } else if (scrTop >= sections.news && scrTop < sections.gallery) {
                pos = 'gallery';
            } else if (scrTop >= sections.gallery) {
                pos = 'map';
            }

			$('.fixed-nav').find('.active').removeClass('active');
			$('.fixed-nav').find(`a[data-menu=${pos}]`).addClass('active');


		});
		


        //fancybox
        $('.photo').fancybox({
            buttons: [
                "slideShow",
                //"fullScreen",
                "fullScreen",
                //"download",
                "download",
                "thumbs",
                "close"
            ],
            animationEffect: "zoom-in-out",
            animationDuration: 800,
            transitionEffect: "rotate",
            loop: "true"
		});
		

    });
})(jQuery);