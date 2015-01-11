'use strict';

var blinkerControllers = angular.module('blinkerControllers', []);

blinkerControllers.controller('NavCtrl', ['$scope', 'Genre', 
	function($scope, Genre){
		$scope.genres = Genre;
	}]);

blinkerControllers.controller('GenreVideoListCtrl', ['$scope', '$routeParams', '$window', '$document', 'Genre', 'VideoList',
	function($scope, $routeParams, $window, $document, Genre, VideoList){
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

		$scope.videoListItems = [];
		$scope.videoNextPageToken = null;
		$scope.fetchVideoData = function(){
			VideoList.get({q: queryString, pageToken: $scope.videoNextPageToken}, function(videos){
				$scope.videoListItems = $scope.videoListItems.concat(videos.items);
				$scope.videoNextPageToken = videos.nextPageToken;
			});
		};
		$scope.fetchVideoData();

		var isEndOfPage = false;
		angular.element($window).bind('scroll', function(){
			// console.log($document[0].body.clientHeight, $window.innerHeight, $window.pageYOffset);
			if (($document[0].body.clientHeight - $window.innerHeight - $window.pageYOffset < -1) && !isEndOfPage){
				isEndOfPage = true;
			} else if(($document[0].body.clientHeight - $window.innerHeight - $window.pageYOffset >= -1) && isEndOfPage){
				$scope.fetchVideoData();
				isEndOfPage = false;
			}
		})


	}]);