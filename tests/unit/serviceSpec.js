'use strict';

describe('service', function(){

	beforeEach(module('blinkerApp'));

	it('check the exsistence of Genre factory', inject(function(Genre){
		expect(Genre).toBeDefined();
		
	}));

});