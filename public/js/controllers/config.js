'use strict';

angular.module('sloogle').controller('ConfigCtrl', function ($scope, ConfigService) {
	$scope.currentPage = 1;
	$scope.totalPages = 0;

    $scope.searchForImages = function(number) {
    	$scope.currentPage = number;
    	var searchTerm = $scope.search;
    	$.ajax({
	    	method: "GET",
	    	headers: {"Authorization": "Client-ID 7bb02574f463dc1abb63fecf4941c51d5a2178af1cb85e6de38486c3d42d83a8"},
	    	url: `https://api.unsplash.com/search/photos?page=${number}&query=${searchTerm}`,
	    	datatype: 'json'
	    })
	    .done(function(data) {
	    	$scope.totalPages = data.total_pages;
	    	$scope.imageData = data;
	    	$scope.getImageLikes(data.results);
	    	$scope.$digest();
	    })
	    .fail(function(err) {
	    	$scope.totalPages = 0;
	    })
    }
    
    $scope.getImageLikes = function(imagesData) {
    	imagesData.forEach(function(imageData) {
    		ConfigService.get(imageData.id).then(function (response) {
    			$scope.imageData[imageData.id] = response.data.likes
    		})
    	})
    }
    
    $scope.likeImage = function(imageID) {
    	ConfigService.post(imageID).then(function (response) {
	    	$scope.imageData[imageID] = response.data.likes
	    });
    }
    
    $scope.previousPage = function() {
    	if ($scope.currentPage > 1) {
    		$scope.searchForImages($scope.currentPage - 1)
    	}
    }
    
    $scope.nextPage = function() {
    	if ($scope.totalPages > $scope.currentPage) {
    		$scope.searchForImages($scope.currentPage + 1)
    	}
    }

});