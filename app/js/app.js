'use strict';

var blinkerApp = angular.module('blinkerApp', [
	'ngRoute',
	'ngSanitize',
	'blinkerControllers',
	'blinkerServices',
	'blinkerDirectives',
	'ui.bootstrap'
	]);

blinkerApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider.
			when('/genre/:genreId', {
				templateUrl: 'templates/videolist.html',
				controller: 'VideoListCtrl'
			}).
			when('/genre/:genreId/:keyword', {
				templateUrl: 'templates/videolist.html',
				controller: 'VideoListCtrl'
			}).
			when('/search/:searchQuery', {
				templateUrl: 'templates/videolist.html',
				controller: 'VideoListCtrl'
			}).
			otherwise({
				redirectTo: '/genre/kpop'
			});
	}]);