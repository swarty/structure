
const log = console.log,
			expect = require('chai').expect,
			should = require('chai').should(),
			_ = require('lodash');

import test from '../src/js/modules/test';


describe('#mocha basics', () => {
	
	// here first unit test
	it('true should be true', () => {
		test('lal').should.be.true;
	});

})