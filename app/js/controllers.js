'use strict';

var blinkerControllers = angular.module('blinkerControllers', []);

blinkerControllers.controller('NavCtrl', ['$scope', 'Genre', 
	function($scope, Genre){
		$scope.genres = Genre;
	}]);

blinkerControllers.controller('GenreVideoListCtrl', ['$scope', '$routeParams', 'Genre', 'VideoList',
	function($scope, $routeParams, Genre, VideoList){
		$scope.genreId = $routeParams.genreId;
		$scope.genres = Genre;
		$scope.isCorrectGenre = false;
		$scope.currentGenre = {};
		$scope.keyword = $routeParams.keyword;

		for (var i = $scope.genres.length - 1; i >= 0; i--) {
			if ($scope.genres[i].name.toLowerCase() === $scope.genreId) {
				$scope.genres[i].class = 'active';
				$scope.currentGenre = $scope.genres[i];
				$scope.isCorrectGenre = true;
			} else {
				$scope.genres[i].class = 'inactive';
			}
		};

		var queryString = ''
		if (!$scope.keyword){
			queryString = $scope.genreId + ' music';
		} else {
			queryString = $scope.keyword;
		}

		$scope.videoList = VideoList.get({q: queryString}, function(videos){
			console.log(videos);
		});

		

	}]);