'use strict';

var blinkerServices = angular.module('blinkerServices', []);

blinkerServices.factory('Genre', function (){
	var genres = [
			{name: 'Classical', url: '#genre/classical', keywords: ['Bach', 'Mozart']}, 
			{name: 'Jazz', url: '#genre/jazz', keywords: ['Ella Fitzgerald', 'John Coltrane']}, 
			{name: 'Rock', url: '#genre/rock', keywords: ['Oasis', 'Nervana']}, 
			{name: 'Kpop', url: '#genre/kpop', keywords: ['Apink', 'Bigbang']}];

	return genres;
});
