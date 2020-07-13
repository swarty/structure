import navigateAnchorTo from './natigateAnchorTo'

export default class Anchors {
	private anchors: NodeList

	constructor() {
		this.anchors = document.querySelectorAll('.js__anchor');

		this.eventOnAnchors();
	}

	eventOnAnchors() {
		if(!this.anchors.length) return;
		this.anchors.forEach( (anchor: HTMLLinkElement) => {
			anchor.addEventListener('click', navigateAnchorTo.bind(null, anchor));
		})
	}
}