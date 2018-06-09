/**
 * Example Controller
 */

'use strict';

angular.module('sloogle').controller('ConfigCtrl', function ($scope, ConfigService) {

    

    $scope.searchForImages = function() {
    	console.log("Searched")
    	ConfigService.get().then(function (response) {
	    	console.log(response)
	        $scope.config = response.data;
	    });
	    $.ajax({
	    	method: "GET",
	    	url: "https://api.unsplash.com/photos/?client_id=7bb02574f463dc1abb63fecf4941c51d5a2178af1cb85e6de38486c3d42d83a8",
	    	datatype: 'json'
	    })
	    .done(function(data) {
	    	console.log(data);
	    })
	    .fail(function(err) {
	    	alert("failed!")
	    })
    }

});