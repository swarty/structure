export default function accessibleLables () {
	document.querySelectorAll('label[for*="service"]').forEach( l => l.addEventListener('keypress', keyboardClick));

	function keyboardClick(e) {
		if(e.keyCode === 13) {
			const node = e.target as HTMLLabelElement;
			node.click()
		}
	}
}