'use strict';

angular.module('sloogle').controller('AppCtrl', function ($scope, ImageService) {
	
	// Initialisation
	ImageService.getApiKey().then(function (response) {
	    $scope.apiKey = response.data.unsplashApiKey;
	    console.log(response.data.unsplashApiKey)
	    $scope.searchForImages(1)
	});

    $scope.searchForImages = function(number) {
    	var searchTerm = $scope.search;
    	// 7bb02574f463dc1abb63fecf4941c51d5a2178af1cb85e6de38486c3d42d83a8
    	
    	$.ajax({
	    	method: "GET",
	    	headers: {"Authorization": "Client-ID " + $scope.apiKey },
	    	url: `https://api.unsplash.com/search/photos?page=${number}&query=${searchTerm}`,
	    	datatype: 'json'
	    })
	    .done(function(data) {
	    	$scope.currentPage = number;
	    	$scope.totalPages = data.total_pages;
	    	$scope.imageData = data;
	    	$scope.getImageLikes(data.results);
	    	$scope.$digest();
	    })
	    .fail(function(err) {
	    	$scope.currentPage = 0;
	    	$scope.totalPages = 0;
	    })
    }
    
    $scope.getImageLikes = function(imagesData) {
    	imagesData.forEach(function(imageData) {
    		ImageService.get(imageData.id).then(function (response) {
    			$scope.imageData[imageData.id] = response.data.likes
    		})
    	})
    }
    
    $scope.likeImage = function(imageID) {
    	ImageService.post(imageID).then(function (response) {
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