export default class FacebookModule {
	constructor() {
		this.shareButtons = document.querySelectorAll('.js__share');

		if(!this.shareButtons.length) return;
		this.shareButtonMountEvent();
	}


	shareButtonMountEvent() {
		this.shareButtons.forEach( (button) => button.addEventListener('click', this.share));
	}

	share() {
		window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href, "pop", "width=600, height=400, scrollbars=no");
	}
}
