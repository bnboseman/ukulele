
app.controller('SongController', 
	['$scope', '$http', '$route', '$routeParams', '$location', '$sce', 'Song',
	function($scope, $http, $route, $routeParams, $location, $sce,  Song)  {
		$scope.songs = null;
		$scope.song = null;
		
		$scope.load = function( id ) {
			if (id == null) {
				Song.all()
				.success( function(data) {
					$scope.songs = data;
				});
			} else {
				$scope.id = id;
			}
		}
		
		if ($routeParams.id) {
			$scope.load($routeParams.id);
		}
		
	
}]);

