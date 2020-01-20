// boolaen
const isDone: boolean = true;

// numbers
const someNumber: number = 12;
const someNumber2: number = 3e10;
const hex: number = 0xf00d;

// string
const str: string = 'some string';

// arrays numbered
const numberedArray: number[] = [1, 2, 3, 4];
// v2
const numberedArray2: Array<number> = [1,2,3,4];

// arrays string
const stringArray: string[] = ['lal', 'lol'];
// v2
const stringArra2: Array<string> = ['lal', 'lol'];

 
// tuple (combine types)
const newArray: [string, number] = ['kaa', 1];

// any possible type declaration
let someVar: any = 1;
someVar = 'lal';


// creates types in ts
type myType = string;
const someType: myType = 'lala';
const someType2: myType = 'lolol';
// const someType2: myType != 4;

type ID = string | number;
const id1: ID = 123;
const id2: ID = 'lal';


// functions and types that return
function example(str: string): void {
	console.log(str);
}
function example2(str: string): string {
	return str;
}
// type never  (throw error or alltime cicle)
function example3(str: string): never {
	throw new Error(str);
}


let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;


const arr: any[] = ['lal', 1, true];