function onDomLoad() {
	const a = 'lal';
	setTimeout( _ => {
		console.log(a)
	}, 0)
}

document.addEventListener('DOMContentLoaded', onDomLoad);