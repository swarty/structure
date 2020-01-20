const cars: Array<string> = ['ford', 'audi'];
const cars2: Array<string> = ['mistake'];

// #1
const promise = new Promise<string>( (resolve: any) => {
	setTimeout( function (): void {
		resolve('promise resolved');
	}, 1000);
})

promise.then( data => {
	console.log(data.toLocaleLowerCase());
})



// #2
function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
	return Object.assign({}, a, b);
}

const merged = mergeObjects({name: 'Dmytro'}, {age: 24});
console.log(merged, merged.name, merged.age);

// example
// const merged3 = mergeObjects('aaa', 'bbb');


// #3
interface ILength {
	length: number
}

function withCount<T extends ILength>(value: T) : {value: T, count: string} {
	return {
		value,
		count: 'In this object ' + value.length + ' synbols'
	}
}

// anything with field length
console.log(withCount('Hello TypeScript'));
console.log({length: 20});


// #4
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
	return obj[key];
}

const person = {
	name: 'Dmytro', 
	age: '24',
	job: 'scatman'
}

console.log(person, 'name');
console.log(person, 'age');
console.log(person, 'job');


// #5
class Collection<T extends number | string | boolean> {
	private _items: T[] = [];

	constructor(item: T[]) {
		this._items = item;
	}

	add(item: T) {
		this._items.push(item);
	}
	
	remove(item: T) {
		this._items = this._items.filter(i => i !== item);
	}

	get items(): T[] {
		return this._items;
	}
}

const strings = new Collection<string>(['i', 'am', 'strings']);
console.log(strings);
strings.add('!');
strings.remove('am');
console.log(strings.items);


const numbers = new Collection([1,2,3,4])
numbers.add(2);
numbers.remove(1)
console.log(numbers)

//  extends number | string | boolean --> !== objects
// const objs = new Collection ([{a: 1}, {b: 2}, {c: 3}]);

// #6
interface Car {
	model: string,
	year: number
}

function createAndValidateCar(model: string, year: number): Car {
	const car: Partial<Car> = {};

	if(model.length > 3) {
		car.model = model;
	}

	if(year > 2000) {
		car.year = year;
	}

	return car as Car;
}


// #7
const cars3: Readonly<Array<string>> = ['lal', 'Audi'];
// cars3.shift();

const ford: Readonly<Car> = {
	model: 'Ford',
	year: 2020
};