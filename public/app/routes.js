app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/app/templates/index.html',
		controller: 'SongController'
	})
	.when('/song/:id', {
		templateUrl: '/app/templates/songs/view.html',
		controller: 'SongController'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);