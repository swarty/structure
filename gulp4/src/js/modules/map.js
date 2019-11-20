export function initMap(){
	let firstTime = false;

	if(document.querySelector('#map')){
		function createObserver() {
			let observer;
		
			let options = {
				root: null,
				rootMargin: "0px",
				threshold: 0
			};
		
			observer = new IntersectionObserver(loadMap, options);
			observer.observe(document.querySelector('#map'));
		}
	
		function loadMap(e) {
			if(e && e[0].intersectionRatio === 0 || firstTime) return;
			firstTime = true;
			console.log('map was inited');
	
			const b = document.querySelector('body');
			const s = document.createElement("script");
			s.src = 'https://maps.googleapis.com/maps/api/js?key=*********************&amp;libraries=places';
			b.appendChild(s);
			s.onload = function(){
				map();
			}
		}
		
		function map() {
			const mapNode = document.querySelector('#map'),
					lat = mapNode.dataset.lat,
					lng = mapNode.dataset.lng,
					icon = mapNode.dataset.mapIcon;
			const mapOptions = {
							zoom: 16,
							disableDefaultUI: true,
							// draggable: false, 
							// zoomControl: false, 
							// scrollwheel: false,
							center: new google.maps.LatLng(lat, lng),
							styles: [{featureType:"administrative",elementType:"all",stylers:[{hue:"#EC1C24"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#000000"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"administrative",elementType:"labels.icon",stylers:[{hue:"#EC1C24"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape.man_made",elementType:"labels",stylers:[{saturation:"36"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#F8E41D"},{visibility:"on"}]}]
						},
			
						map = new google.maps.Map(mapNode, mapOptions),
						marker = new google.maps.Marker({
								position: new google.maps.LatLng(lat, lng),
								map: map,
								icon: {
									url: icon,
									scaledSize: new google.maps.Size(35, 45)
								}
						});
		}

		window.IntersectionObserver && createObserver() || loadMap();
	}
}