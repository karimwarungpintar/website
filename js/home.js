$(document).ready(function(){

	$("div.lazy").lazyload({
		effect: "fadeIn",
		effectTime: 0,
		threshold: 0

	})

	function parallax(jumboHeight){
	    var scrolled = $(window).scrollTop();
	    $('.header').css('height', (jumboHeight-scrolled) + 'px');
	}

	var jumboHeight = $('.jumbotron').outerHeight();
	$(window).scroll(function(){
	    parallax(jumboHeight);
	});

});

function initMap() {
	var HQ = {lat: -6.221281, lng: 106.820403};
	var warung3putri = {lat: -6.221218, lng: 106.820546};
	var waroengKite = {lat: -6.296407, lng: 106.664830};
	var warungBintang = {lat: -6.287561, lng: 106.675832}
	// var WPTimor16 = {lat: }
	var WPDLab = {lat: -6.190820, lng: 106.824330}

	var warungs = [
		// ['HeadQuarter', -6.221281, 106.820403, 'https://www.google.co.id/maps/place/JSC+Hive+Coworking+Space/@-6.2212822,106.8198554,19z/data=!3m1!4b1!4m5!3m4!1s0x2e69f3fe675275c7:0x9a18ce48059cdb7e!8m2!3d-6.2212822!4d106.8204026?hl=en'],
		['HeadQuarter', -6.2294854,106.8287376, 'https://www.google.co.id/maps/place/Menara+BTPN/@-6.2297131,106.8275021,15z/data=!4m5!3m4!1s0x0:0x93077ad70639f9f9!8m2!3d-6.2297131!4d106.8275021?sa=X&ved=0ahUKEwiSspjb99vZAhXJsY8KHUAUBfQQ_BIIuwEwDw'],
		['Warung 3 Putri', -6.221218, 106.820546, 'https://goo.gl/maps/s1RXQD9vbCL2'],
		// ['waroeng Kite', -6.296407, 106.664830, 'http://www.google.com/maps/place/-6.29641,106.66483'],
		// ['warung Bintang', -6.287561, 106.675832, 'http://www.google.com/maps/place/-6.287561,106.675832'],
		// ['WP Timor16', -6.189132, 106.824292, 'https://goo.gl/maps/wLC12wZtnsR2'],
		// ['WP DLab', -6.190820, 106.824330, 'http://www.google.com/maps/place/-6.19082,106.82433'],

		['Taman Kota', -6.287561, 106.675832, 'http://www.google.com/maps/place/-6.287561,106.675832'],
		['Timor', -6.1892, 106.82413, 'http://www.google.com/maps/place/-6.1892,106.82413'],
		['DLab', -6.19082, 106.82433, 'http://www.google.com/maps/place/-6.19082,106.82433'],
		['Kios Cipinang', -6.19082, 106.82433, 'https://goo.gl/maps/NDPrc15PDbA2' ],
		['Pertigaan Duren', -6.2989431,106.7322861, 'https://goo.gl/maps/zzbD847P3w62'],
		['Sea Loundry', -6.2944722,106.7464528, 'https://goo.gl/maps/g4E9ab1bkFN2'],
		['Kemayoran 1', -6.1598553,106.8693465, 'https://goo.gl/maps/gcKKb7CnHYG2'],
		
		['Kemayoran 2', -6.1614122,106.8550004, 'https://goo.gl/maps/bv2qWpGnZW42'],
		['Cipinang Muara',-6.2248363,106.8889183, 'https://goo.gl/maps/pHBGKXCBdMr'],
		['Toko Bungata', -6.343006,106.7272513, 'https://goo.gl/maps/hQgv3uYgFWt'],
		['Pondok Ranji', -6.2774722,106.7442002, 'https://goo.gl/maps/rQfgCJFL6zk'],
		['Jalan Amal', -6.2295214,106.9026025, 'https://goo.gl/maps/XLhtoJQqVTz'],

		['Cipinang Pulo Maja', -6.21886,106.8763504, 'https://goo.gl/maps/XhrLGHwbUFG2'],
		['Kios Sudimara', -6.2974914,106.7120774, 'https://goo.gl/maps/fKRf7KLRSKp'],
		
		
		


	];

	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 11,
	  center: new google.maps.LatLng(-6.232327, 106.753561)
	});

	var infowindow = new google.maps.InfoWindow();

	var marker, i;

	for (i = 0; i < warungs.length; i++) {  
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(warungs[i][1], warungs[i][2]),
			icon: 'img/contact/pin.png',
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(
					'<div id="content">'+
							'<div id="siteNotice">'+'</div>'+
							'<h2 id="firstHeading" class="firstHeading">'+ warungs[i][0] +'</h2>'+
							'<div id="bodyContent">'+
								'<p>' +
								'</p>'+
								'<a target="_blank" href="'+ warungs[i][3] +'">View on Google Maps</a>'+
							'</div>'+
						'</div>'
				);
				infowindow.open(map, marker);
				setTimeout(function () { infowindow.close(); }, 5000);
			}
		})(marker, i));
	}

}