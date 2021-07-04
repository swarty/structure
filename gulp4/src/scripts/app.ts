function onDomLoad():void {
	const a: string = 'lal';
	setTimeout( _ => {
		console.log(a);
	}, 0)
}

document.addEventListener('DOMContentLoaded', onDomLoad);
