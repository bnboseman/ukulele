app.directive('songs', ['$sce', 'Song', function($sce, Song) {
    return {
        // Restrict it to be an element in this case
        restrict: 'E',
        controller: "SongController",
        link: function(scope, element, attrs, SongCtrl) {
            scope.songs = SongCtrl.load();
        },
        templateUrl: '/app/templates/songs/index.html',
    };
}])
.directive('newSong', ['$sce', 'Song', function($sce, Song) {
        return {
            // Restrict it to be an element in this case
            restrict: 'E',
            controller: 'SongController',
            templateUrl: '/app/templates/songs/new.html',
            scope: {
                csrf: '@csrf',
            }
        };
}])
.directive('song', ['$compile', '$sce', 'Song', function($compile, $sce, Song) {
    return {
        // Restrict it to be an element in this case
        restrict: 'E',
        templateUrl: '/app/templates/songs/view.html',
        controller: "SongController",
        scope: {
            id: '=song',
        }, 
        link: function(scope, element, attrs) {
            Song.read(scope.id).success(function(data) {
                data.song = $sce.trustAsHtml(data.song);
                scope.song = data;
                console.log(data);  `ch`
            });

            $('body').append($compile("<song />")(scope));
            scope.$apply();

        }
    }
}]);