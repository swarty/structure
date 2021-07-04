function onDomLoad():void {
	const a: string = 'lal';
	setTimeout( () => {
		console.log(a);
	}, 0)
}

document.addEventListener('DOMContentLoaded', onDomLoad);
