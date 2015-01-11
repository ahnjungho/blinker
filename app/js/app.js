'use strict';

var blinkerApp = angular.module('blinkerApp', [
	'ngRoute',
	'blinkerControllers',
	'blinkerServices',
	'blinkerDirectives'
	]);

blinkerApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider.
			when('/genre/:genreId', {
				templateUrl: 'templates/genre-videolist.html',
				controller: 'GenreVideoListCtrl'
			}).
			when('/genre/:genreId/:keyword', {
				templateUrl: 'templates/genre-videolist.html',
				controller: 'GenreVideoListCtrl'
			}).
			otherwise({
				redirectTo: '/genre/classical'
			});
	}]);