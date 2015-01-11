'use strict';

describe('Blinker Controllers', function(){

	describe('NavCtrl', function(){

		beforeEach(module('blinkerApp'));

		it('should have 4 genres', inject(function($controller){
			var scope = {};
			var ctrl = $controller('NavCtrl', {$scope:scope});

			expect(scope.genres.length).toBe(4);
		}))

	});

});