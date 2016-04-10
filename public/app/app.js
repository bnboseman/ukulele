_slugify_strip_re = /[^\w\s-]/g;
_slugify_hyphenate_re = /[-\s]+/g;
String.prototype.slugify = function(s) {
    var text = this;
    text = text.replace(_slugify_strip_re, '').trim().toLowerCase();
    text = text.replace(_slugify_hyphenate_re, '-');
    return text;
}

var app = angular.module('ukuleleSongs', ['ngRoute', 'angularUtils.directives.dirPagination'], function($interpolateProvider) {
	 $interpolateProvider.startSymbol('<%');
     $interpolateProvider.endSymbol('%>');
});

var API_URL = 'http://ukulele.dev/api/v1/';