
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
				Song.read(id)
				.success( function(data) {
					$scope.song = data;
					$scope.parsed = $sce.trustAsHtml(ukeGeeks.chordParser().parse(data.song));
				});
			}
		}
		
		if ($routeParams.id) {
			$scope.load($routeParams.id);
		}
	
}]);