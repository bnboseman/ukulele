var app = angular.module('ukuleleSongs', ['ngRoute'], function($interpolateProvider) {
	 $interpolateProvider.startSymbol('<%');
     $interpolateProvider.endSymbol('%>');
});

var API_URL = 'http://ukulele.dev/api/v1/';