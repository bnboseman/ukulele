
app.controller('SongController', 
	['$scope', '$http', '$route', '$routeParams', '$location', '$sce', 'Song',
	function($scope, $http, $route, $routeParams, $location, $sce,  Song)  {
		$scope.songs = null;
		
		$scope.load = function( id ) {
			if (id == null) {
				Song.all()
				.success( function(data) {
					$scope.songs = data;
				});
			} else {
				$scope.id = id;
			}
		};

		console.log($scope);
		switch($scope.action) {
			case "new":
				$scope.keys = ['C', 'F', 'B♭', 'E♭', 'A♭', 'D♭', 'C♯', 'G♭', 'F♯', 'B', 'E', 'A', 'D', 'G'];
				$scope.song = Song.song;

				$scope.saveSong = function() {
					Song.create($scope.song)
						.success( function(data) {
							$location.redirectTo('/songs/' + data.id);
						});
				};

				break;
			case "load":
				if ($scope.id) {
					$location.redirectTo('/songs/' + $scope.id);
				} else {
					$location.redirectTo('/');
				}
				break;
			default:
				$scope.load();
				break;
		}
	
}]);

