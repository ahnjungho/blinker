'use strict';

var blinkerControllers = angular.module('blinkerControllers', []);

blinkerControllers.controller('NavCtrl', ['$scope', 'Genre', 
	function($scope, Genre){
		$scope.genres = Genre;
	}]);

blinkerControllers.controller('GenreVideoListCtrl', ['$scope', '$routeParams', 'Genre',
	function($scope, $routeParams, Genre){
		$scope.genreId = $routeParams.genreId;
		$scope.genres = Genre;
		$scope.isCorrectGenre = false;
		$scope.currentGenre = {};

		for (var i = $scope.genres.length - 1; i >= 0; i--) {
			if ($scope.genres[i].name.toLowerCase() === $scope.genreId) {
				$scope.genres[i].class = 'active';
				$scope.currentGenre = $scope.genres[i];
				$scope.isCorrectGenre = true;
			} else {
				$scope.genres[i].class = 'inactive';
			}
		};

		

	}]);