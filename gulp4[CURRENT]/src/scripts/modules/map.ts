import throttle from 'lodash.throttle'

interface IObserverOption {
	root: null
	rootMargin: string
	threshold: number
}

export default function initMap():void {
	let firstTime: boolean;
	firstTime = false;

	if(!document.querySelector('#map')) return;
	function createObserver():void {
	
		const options: IObserverOption = {
			root: null,
			rootMargin: "0px",
			threshold: 0
		};
	
		const observer = new IntersectionObserver(loadMap, options);
		observer.observe(document.querySelector('#map'));
	}

	function loadMap(e = null): void {
		if(e && e[0].intersectionRatio === 0 || firstTime) return;
		firstTime = true;

		const b = document.querySelector('body');
		const s = document.createElement("script");
		s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCJzKZjPJCzXMrH9yzVVffDgaI7oJf_Gqw&amp;libraries=places';
		s.setAttribute('async', 'true');
		b.appendChild(s);
		s.onload = function():void {
			map();
		}
	}
	
	function map(): void {
		const mapNode: HTMLElement = document.querySelector('#map'),
				lat = mapNode.dataset.lat || 54.4475748,
				lng = mapNode.dataset.lng || 30.5244409,
				zoom = Number(mapNode.dataset.zoom) || 4.5;
		const mapOptions = {
						zoomControl: false,
						disableDefaultUI: true,
						zoom: zoom,
						center: new window['google'].maps.LatLng(lat, lng),
						styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#edebe4"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#d1ecc7"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#bddddd"},{"lightness":17}]}]
					},
					map = new window['google'].maps.Map(mapNode, mapOptions);

		const markers = JSON.parse(mapNode.dataset.markers) || '';
		if(typeof markers !== 'object') return;
		
		markers.forEach( marker => {
			new window['google'].maps.Marker({
				position: new window['google'].maps.LatLng(Number(marker.lat), Number(marker.lng)),
				map: map,
				icon: {
					url: marker.icon,
					scaledSize: new window['google'].maps.Size(35, 45)
				}
			});
		})

		window.addEventListener('resize', throttle(changeZoom, 300))
		changeZoom();
		function changeZoom(): void {
			if(window.innerWidth < 1499 && window.innerWidth > 767) {
				map.setZoom(4)
			} else if(window.innerWidth < 767) {
				map.setZoom(3)
			} else {
				map.setZoom(zoom);
			}
		}

	}

		
	if(window.IntersectionObserver){
		createObserver();
	} else {
		loadMap();
	}
}