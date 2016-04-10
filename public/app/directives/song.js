app.directive('ukulelesong', ['$sce', 'Song', function($sce, Song) {
    return {
        // Restrict it to be an element in this case
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: ['$sce', '$scope', 'Song', function($sce, $scope, Song) {
        	Song.read($scope.id)
			.success( function(data) {
				$scope.song = data;
				console.log(	ukeGeeks.cpmParser().parse(data.song));
				$scope.song.song = $sce.trustAsHtml(ukeGeeks.chordParser().parse(data.song));

			});
        }],
        templateUrl: '/app/templates/songs/song.html',
        scope: {
        	id: '=id',
        }
    };
}])
.directive('songs', ['$sce', function($sce, Song) {
    return {
        // Restrict it to be an element in this case
        restrict: 'E',
        controller: 'SongController',
        templateUrl: '/app/templates/songs/index.html',
    };
}])
.directive('song', ['$sce', 'Song', function($sce, Song) {
        return {
            // Restrict it to be an element in this case
            restrict: 'E',
            controller: 'SongController',
            templateUrl: '/app/templates/songs/new.html',
            scope: {
                action: '@action',
                csrf: '@csrf',
            }
        };
}]);