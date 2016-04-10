app.config(['$routeProvider', function($routeProvider) {
 	$routeProvider
 	.when('/', {
 		templateUrl: '/app/templates/songs/index.html',
 		controller: 'SongController'
 	})
 	.when('/song/:id', {
 		controller: ['$routeParams', function($routeParams){
 	        window.location.replace('/songs/'+$routeParams.id);
 	    }], 
 	   template: '<div></div>',
 	})
 	.when('/artist/:id', {
 		templateUrl: '/app/templates/artist/index.html',
 		controller: 'ArtistController'
 	});
 	
 }]);