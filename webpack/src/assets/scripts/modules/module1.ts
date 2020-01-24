// import throttle from 'lodash.throttle';
import {TweenMax} from 'gsap';

TweenMax.to(document.querySelector('img'), .5, {x: '500px', y: '500px', ease: 'easeInOut'});

const someNumber = 0xfffff;

function testTs(someVal: string): void {
	console.log(someVal)
}

function testTs2(all: string): Function {
	return function () {
		console.log(all)
	}
}

testTs('hello world from ts');
testTs2('test ts 2')();