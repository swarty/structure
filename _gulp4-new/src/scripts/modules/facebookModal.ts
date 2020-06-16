export default class FacebookModule {
	private facebook: any
	private shareButtons: NodeList

	constructor() {
		this.shareButtons = document.querySelectorAll('.js__share');

		if(!this.shareButtons.length) return;
		this.shareButtonMountEvent();
	}


	shareButtonMountEvent(): void {
		this.shareButtons.forEach( (button: HTMLElement) => button.addEventListener('click', this.share));
	}

	share(): void {
		window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href, "pop", "width=600, height=400, scrollbars=no");
	}
}
