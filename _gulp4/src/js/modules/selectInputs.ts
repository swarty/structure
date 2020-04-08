import '../../../node_modules/jquery-nice-select/js/jquery.nice-select';

export default class SelectInputs {
	private selectNodes: NodeList

	constructor() {
		this.selectNodes = document.querySelectorAll('select');

		this.selectNodes.length !== 0 && this.init();
	}

	init() {
		this.selectNodes.forEach( select => {
			$(select).niceSelect();
		})
	}

	update() {
		this.selectNodes.forEach( select => {
			$(select).niceSelect('update');
		})
	}
}