class TypeScript {
	version: string = 'lal';

	constructor(version: string) {
		this.version = version;
	}

	info (name: string): string {
		return `[${name}]: Typescript version is ${this.version}`;
	}
}

console.log(new TypeScript('v1').info('lal'))


// v1
class Car1 {
	readonly model: string;
	readonly numberOfWheels: number = 4;

	constructor(theModel: string) {
		this.model = theModel;
	}
}

// v2
class Car2 {
	readonly numberOfWheels: number = 4;

	constructor(readonly model: string) {}
}


// modifies
class Animal {
	protected voice: string = '';
	public color: string = 'black';

	constructor() {
		// have access;
		this.go();
	}

	private go(): void {
		console.log('walking');
	}
}

class Cat extends Animal {
	constructor() {
		super();
		// dont have access;
		// this.go();
	}


	public setVoice(voice: string): void {
		this.voice = voice;
	}
}

const cat = new Cat();


// abstract classes
abstract class Component {
	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {
	render(): void {
		console.log('some lal');
	}

	info(): string {
		return 'some info';
	}
}