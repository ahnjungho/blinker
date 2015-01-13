'use strict';

var blinkerControllers = angular.module('blinkerControllers', []);

blinkerControllers.controller('NavCtrl', ['$scope', '$location', 'Genre', 
	function($scope, $location, Genre){
		$scope.genres = Genre;
		$scope.searchSubmit = function(){
			$location.path('/search/' + $scope.search);
			$location.replace();
		};
	}]);

blinkerControllers.controller('VideoListCtrl', ['$scope', '$routeParams', '$window', '$document', '$modal', 'Genre', 'VideoList',
	function($scope, $routeParams, $window, $document, $modal, Genre, VideoList){
		$scope.genreId = $routeParams.genreId;
		$scope.keyword = $routeParams.keyword;
		$scope.searchQuery = $routeParams.searchQuery;
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

		var queryString;
		if($scope.searchQuery){
			queryString = $scope.searchQuery;
		} else {
			queryString = $scope.keyword ? $scope.keyword : $scope.genreId + ' music';
		} 

		$scope.videoListItems = [];
		$scope.videoNextPageToken = null;
		$scope.fetchVideoData = function(){
			VideoList.get({q: queryString, pageToken: $scope.videoNextPageToken}, function(videos){
				$scope.videoListItems = $scope.videoListItems.concat(videos.items);
				$scope.videoNextPageToken = videos.nextPageToken;
				console.log(videos);
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

	  $scope.open = function (video) {
	    var modalInstance = $modal.open({
	      templateUrl: 'videoModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      size: 'lg',
	      resolve: {
	        video: function () {
	        	console.log(video);
	        	video.url = '//www.youtube.com/embed/' + video.id.videoId + '?autoplay=1&loop=1&playlist=' + video.id.videoId ;
	        	return video;
	        }
	      }
	    });
		};

	}]);

blinkerControllers.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', '$window', '$sce', 'video', 
	function ($scope, $modalInstance, $window, $sce, video) {
	  $scope.video = video;
	  $scope.video.url = $sce.trustAsResourceUrl(video.url);

	  var windowWidth = $window.innerWidth;
	  if(windowWidth > 700){ $scope.video.height = '500px'; } 
	  else if(windowWidth > 400){ $scope.video.height = '400px'; } 
	  else if(windowWidth > 350){ $scope.video.height = '300px'; }

	  $scope.ok = function () { $modalInstance.close(); };
	}]);

