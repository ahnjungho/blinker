'use strict';

var blinkerServices = angular.module('blinkerServices', ['ngResource']);

blinkerServices.factory('Genre', function (){
	var genres = [
			{name: 'Classical', url: '#genre/classical', keywords: ['Bach', 'Mozart']}, 
			{name: 'Jazz', url: '#genre/jazz', keywords: ['Ella Fitzgerald', 'John Coltrane']}, 
			{name: 'Rock', url: '#genre/rock', keywords: ['Oasis', 'Nervana']}, 
			{name: 'Kpop', url: '#genre/kpop', keywords: ['Apink', 'Bigbang']}];

	return genres;
});

var youtubeBaseUrl = 'https://www.googleapis.com/youtube/v3/search';

blinkerServices.factory('VideoList', ['$resource', 
	function($resource){
		return $resource(youtubeBaseUrl,
			{type: 'video', maxResults: 50, part: 'snippet', key: 'AIzaSyDf8fKYSHpv3S7EBiKZTflzBSyv_aoU0Vc'},
			{});
	}]);
