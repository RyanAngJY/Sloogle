/**
 * Example Controller
 */

'use strict';

angular.module('sloogle').controller('ConfigCtrl', function ($scope, ConfigService) {
	
	var currentPage = 1;
	
	ConfigService.get().then(function (response) {
    	console.log(response)
        $scope.config = response.data;
    });
    
    $scope.searchForImages = function(number) {
    	currentPage = number;
    	var searchTerm = $scope.search;
    	$.ajax({
	    	method: "GET",
	    	headers: {"Authorization": "Client-ID 7bb02574f463dc1abb63fecf4941c51d5a2178af1cb85e6de38486c3d42d83a8"},
	    	url: `https://api.unsplash.com/search/photos?page=${number}&query=${searchTerm}`,
	    	datatype: 'json'
	    })
	    .done(function(data) {
	    	$scope.imageData = data;
	    	$scope.$digest();
	    	console.log(data);
	    })
	    .fail(function(err) {
	    	alert("failed!")
	    })
    }
    
    $scope.previousPage = function() {
    	if (currentPage > 1) {
    		$scope.searchForImages(currentPage - 1)
    	}
    }
    
    $scope.nextPage = function() {
    	$scope.searchForImages(currentPage + 1)
    }

});