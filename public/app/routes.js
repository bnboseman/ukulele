app.config(['$routeProvider', function($routeProvider) {
 	$routeProvider
 	.when('/', {
 		template: '<songs></songs>',
 		//controller: 'SongController'
 	})
 	.when('/song/:id', {
 		controller: ['$routeParams', '$scope', 'Song', function($routeParams, $scope, Song){
 	        $scope.id = $routeParams.id;
 	    }],
 	   template: '<song song=id></song>'
 	})
 	.when('/artist/:id', {
 		templateUrl: '/app/templates/artist/index.html',
 		controller: 'ArtistController'
 	});
 	
 }]);