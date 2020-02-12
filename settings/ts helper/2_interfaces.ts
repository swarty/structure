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



// polymorphizm in ts, objects
interface RectWithArea extends Rect {
	getArea: () => number
}

const rect4: RectWithArea = {
	id: 123,
	size: {
		width: 5,
		height: 5
	},
	getArea(): number {
		return this.size.width * this.size.height;
	}
}


interface Styles {
	[key: string]: string
}

const css: Styles = {
	border: '1px solid black',
	marginTop: '2px',
	borderRadius: '5px'
}


// #3 Classes
interface IClock {
	time: Date,
	setTime(date: Date): void
}


class Clock implements IClock {
	time: Date = new Date();

	setTime(date: Date): void {
		this.time = date;
	}
}
