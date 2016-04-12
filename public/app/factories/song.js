app.factory("Song", function SongFactory($http) {
    return {
        all: function() {
            return $http.get(API_URL + 'songs/');
        },
        read: function(id) {
            return $http.get(API_URL + 'songs/' + id);
        },
        create: function(Song) {
            return $http({
                method: "POST",
                url: API_URL + 'songs',
                data: JSON.stringify(Song)
            });
        },
        remove: function(id) {
            return $http({
                method: "DELETE",
                url: API_URL + 'songs/' + id,
            });
        },
        song: {
         	title: null,
         	subtitle: null,
         	album: null,
        	artist: null,
            description: null,
        	song: null,
        	tab: null,
        	key: "C",
            artist_id: null
        }
    }
});