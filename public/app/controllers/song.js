
app.controller('SongController', 
	['$scope', '$http', '$route', '$routeParams', '$location', '$sce', 'Song',
	function($scope, $http, $route, $routeParams, $location, $sce,  Song)  {

		this.load = function( id ) {
			if (id == null) {
				Song.all()
				.success( function(data) {
					$scope.songs = data;
				});
			} else {
				Song.read(id)
					.success( function(data) {
						$scope.song = data;
					});
			}
		};

		this.createNew = function() {
			$scope.keys = ['C', 'F', 'B♭', 'E♭', 'A♭', 'D♭', 'C♯', 'G♭', 'F♯', 'B', 'E', 'A', 'D', 'G', 'Cm','Fm','B♭m','E♭m','A♭m','D♭m','C♯m','G♭m','F♯m','Bm','Em','Am','Dm','Gm'];
			$scope.song = Song.song;
			$scope.song._token = $scope.csrf;
			$scope.saveSong = function() {
				Song.create($scope.song)
					.success( function(data) {
						window.location.replace('/songs/' + data.slug);
					});
			};
		};

		return this;
}]);

