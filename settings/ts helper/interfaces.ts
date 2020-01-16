interface Rect {
	readonly id: number,
	color?: string,
	size: {
		width: number,
		height: number
	}
}

// #1
const rect1: Rect = {
	id: 2345,
	size: {
		width: 20,
		height: 20
	}
}

rect1.color = 'rgb(255, 255, 255)';


// #2
// object entries to some type
const rect2 = {} as Rect;

const rect3 = <Rect>{}



// polymorphizm in ts
interface RectWithArea extends Rect {
	getArea: () => number
}