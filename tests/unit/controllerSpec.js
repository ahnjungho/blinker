'use strict';

describe('Blinker Controllers', function(){

	beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

	beforeEach(module('blinkerApp'));

	describe('NavCtrl', function(){

		it('should have 4 genres', inject(function($controller){
			var scope = {};
			var ctrl = $controller('NavCtrl', {$scope:scope});
			expect(scope.genres.length).toBe(4);
		}));

	});


	describe('VideoListCtrl', function(){
		var scope, ctrl, $httpBackend;

		beforeEach(module('blinkerServices'));
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDf8fKYSHpv3S7EBiKZTflzBSyv_aoU0Vc&maxResults=50&part=snippet&q=undefined+music&type=video').respond();

			scope = $rootScope.$new();
			ctrl = $controller('VideoListCtrl', {$scope:scope});
		}));

		it('should create videoList data fetched from xhr', function($controller){
			expect(scope.videoListItems).toEqualData([]);
			$httpBackend.flush();
			expect(scope.videoListItems).toEqualData([undefined]);
		});

		it('should know genres', inject(function($controller){
			expect(scope.genres.length).toBe(4);
		}));

	});

	describe('ModalInstanceCtrl', function(){
		it('should have video object', inject(function($controller){
			var scope = {};
			var modal = {};
			var video = {};
			var ctrl = $controller('ModalInstanceCtrl', {$scope:scope, $modalInstance:modal, video:video});
			expect(scope.video.url).not.toBeDefined();
			expect(scope.video.height).toBeDefined();
		}));
	});

});