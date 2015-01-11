'use strict';

var blinkerControllers = angular.module('blinkerControllers', []);

blinkerControllers.controller('NavCtrl', ['$scope', 
	function($scope){
		$scope.genres = [
			{name: 'Classical', url: '#genre/classical'}, 
			{name: 'Jazz', url: '#genre/jazz'}, 
			{name: 'Rock', url: '#genre/rock'}, 
			{name: 'Kpop', url: '#genre/kpop'}];

		
	}]);