// import {onDomLoad} from '../src/js/app';

function add(a, b) {
	return a + b;
}

function minus(a, b) {
	return a - b;
}



describe("Mathematic modules", () => {
	// test.only('this will be the only test that runs', () => {
	// 	expect(true).toBe(true);
	// });

	test('Expect function add should be: 10 + 5 = 15', () => {
		expect(add(10, 5)).toBe(15);
	});
	test('Expect function add should be: 10 - 5 = 5', () => {
		expect(minus(10, 5)).toBe(5);
	});
})

