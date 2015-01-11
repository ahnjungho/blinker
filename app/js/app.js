'use strict';

var blinkerApp = angular.module('blinkerApp', [
	'ngRoute',
	'blinkerControllers'
	]);

blinkerApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider.
			otherwise({
				redirectTo: '/genre/classical'
			});
	}]);