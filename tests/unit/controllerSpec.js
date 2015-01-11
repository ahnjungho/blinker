'use strict';

describe('Blinker Controllers', function(){

	describe('NavCtrl', function(){

		beforeEach(module('blinkerApp'));

		it('should have 4 genres', inject(function($controller){
			var scope = {};
			var ctrl = $controller('NavCtrl', {$scope:scope});

			expect(scope.genres.length).toBe(4);
		}));

	});


	describe('GenreVideoListCtrl', function(){

		beforeEach(module('blinkerApp'));

		it('should know genres', inject(function($controller){
			var scope = {};
			var ctrl = $controller('GenreVideoListCtrl', {$scope:scope});

			expect(scope.genres.length).toBe(4);
		}));

	});

});