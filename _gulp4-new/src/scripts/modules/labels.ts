export default function accessibleLables (): void {
	document.querySelectorAll('label[for*="service"]').forEach( l => l.addEventListener('keypress', keyboardClick));

	function keyboardClick(e): void {
		if(e.keyCode === 13) {
			const node = e.target as HTMLLabelElement;
			node.click();
		}
	}
}