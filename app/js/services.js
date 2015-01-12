'use strict';

var blinkerServices = angular.module('blinkerServices', ['ngResource']);

blinkerServices.factory('Genre', function (){
	var genres = [
			{	name: 'Classical', url: '#genre/classical',
				keywords: ['Bach', 'Mozart', 'Beethoven', 'Brahms', 'Sibelius', 'Vivaldi', 'Handel', 'Haydn', 'Rachmaninov', 'Tchaikovsky', 'Mahler', 'Verdi', 'Liszt', 'Chopin', 'Schumann', 'Schubert', 'Wagner', 'Stravinsky', 'Mendelssohn', 'Debussy', 'Dvorak', 'Berlioz', 'Prokofiev', 'Shostakovich', 'Bartók', 'Bruckner', 'Ravel', 'Mussorgsky', 'Elgar', 'Saint-Saëns']
			}, 
			{ name: 'Jazz', url: '#genre/jazz', 
				keywords: ['Ella Fitzgerald', 'John Coltrane', 'Benny Goodman', 'Louis Armstrong', 'Chet Baker', 'Mel Torme', 'Duke Ellington', 'Count Basie', 'Glenn Miller', 'Miles Davis', 'Lester Young', 'Thelonious Monk', 'Charles Mingus', 'Oscar Peterson', 'Billie Holiday', 'Sarah Vaughan', 'Frank Sinatra', 'Grant Green']
			}, 
			{ name: 'Rock', url: '#genre/rock',
				keywords: ['Oasis', 'Nervana', 'Guns n\' Roses', 'Red Hot Chili Peppers', 'Prince', 'Pearl Jam', 'Deep Purple', 'Sex Pistols', 'The Smashing Pumpkins', 'U2', 'Scorpions', 'Radiohead', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'Black Sabbath', 'Aerosmith', 'Muse', 'The Rolling Stones', 'Queen', 'Coldplay', 'The Offspring', 'Placebo', 'Green Day', ]
			}, 
			{ name: 'Kpop', url: '#genre/kpop',
				keywords: ['Apink', 'Bigbang', '2NE1', 'miss A', 'INFINITE', 'SISTAR', 'Girl\'s Day', 'Yoon Jong shin', 'BEAST', 'EXO', 'AOA', 'f(x)', 'MBLAQ', '4minute', 'CNBLUE', '2PM', 'Girls\' Generation', 'Super Junior']
			}];

	return genres;
});

var youtubeBaseUrl = 'https://www.googleapis.com/youtube/v3/search';

blinkerServices.factory('VideoList', ['$resource', 
	function($resource){
		return $resource(youtubeBaseUrl,
			{type: 'video', maxResults: 50, part: 'snippet', key: 'AIzaSyDf8fKYSHpv3S7EBiKZTflzBSyv_aoU0Vc'},
			{});
	}]);
