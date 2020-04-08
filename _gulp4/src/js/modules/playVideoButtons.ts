export default class PlayVideoButtons {
	private playVideoButtons: NodeList
	private videos: NodeList

	constructor() {
		this.playVideoButtons = document.querySelectorAll('.js__play-video');
		this.videos = document.querySelectorAll('video');

		this.playVideoButtons.length !== 0 && this.init();
	}

	init() {
		this.playVideoButtons.forEach( button => button.addEventListener('click', openVideo));

		function openVideo() {
			const button = this,
						video = this.nextElementSibling;

			if(video.nodeName.toLowerCase() !== 'video') return;
			// console.log("true", video)

			if(video.requestFullscreen) video.requestFullscreen();
			if(video.webkitRequestFullscreen) video.webkitRequestFullscreen();
			if(video.webkitEnterFullScreen) video.webkitEnterFullScreen();
			video.classList.add('contain-picture');
			// console.log(video)
			video.load();
			video.play();
		}

		// const videos: NodeList = this.videoSlider.querySelectorAll('video');
		window.addEventListener('fullscreenchange', _ =>{
			this.videos.forEach( (video: HTMLVideoElement, a, b) => {
				const fullscreenStatus =
					document.fullscreenElement ||
					document.mozFullScreenElement ||
					document.webkitFullscreenElement ||
					document.msFullscreenElement;
				
				// console.log(video, element)
				if(!fullscreenStatus) {
					video.classList.remove('contain-picture');
					if(video.muted) video.muted = true;
					if(!video.autoplay) {
						video.pause();
					} else {
						video.play();
					}
				}
				
			})
		})
	}
}