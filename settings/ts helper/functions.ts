function add(a: number, b: number): number {
	return a + b;
}

function toUpperCase(str: string): string {
	return str.trim().toUpperCase();
}


interface MyPosition {
	x: number | null,
	y: number | null
}

interface MyPositionWithDefault extends MyPosition {
	default: string
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
	if(!a && !b) {
		return {x: null, y: null};
	}

	if(a && !b) {
		return {x: a, y: null, default: a.toString()};
	}

	return {x: a, y: b};
}

