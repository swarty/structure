interface IVideoModal {
	modal: HTMLElement
	openModal(): void
	closeModal(): void
}


export default class VideoButtons {
	private buttons: NodeList
	private popup: IVideoModal

	constructor(videoPopup: IVideoModal) {
		this.buttons = document.querySelectorAll('.js__open-video');
		this.popup = videoPopup;

		this.buttons.length !== 0 && this.popup && this.init();
	}

	init(): void {
		const that = this,
					popupVideoContainer = this.popup.modal.querySelector('.js__media-wr') || null;
		if(!popupVideoContainer) return;

		let videoHTML = '';
		this.buttons.forEach( (button: HTMLButtonElement) => button.addEventListener('click', openModal));

		function openModal(): void {
			let videoType = '',
					videoLink = '';

			if(this.dataset.videoType) videoType = this.dataset.videoType;
			if(this.dataset.videoSource) videoLink = this.dataset.videoSource;

			if(videoLink === '') return;
			
			if(videoType == 'video') {
				videoHTML = `
					<video controls>
						<source src="${videoLink}" type="video/mp4">
					</video>
				`;
			}

			if(videoType == 'iframe') {
				videoHTML = `
					<iframe 
						src="${videoLink}?autoplay=1"
						allow="${this.dataset.videoAllow}"
						frameborder="0"
						allowfullscreen>
					</iframe>
				`;
			}

			
			popupVideoContainer.innerHTML = videoHTML;
			that.popup.openModal();

			// add autoplay on vhtml5 video
			if(videoType != 'video') return;
			const video = that.popup.modal.querySelector('video');
			video.load();
			video.play();
		}
	}
}
