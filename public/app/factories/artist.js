app.factory("Artist", function ArtistFactory($http) {
    return {
        all: function() {
            return $http.get(API_URL + 'artists/');
        },
        read: function(id) {
            return $http.get(API_URL + 'artists/' + id);
        },
        create: function(Artist) {
            return $http({
                method: "POST",
                url: API_URL + 'artists',
                data: JSON.stringify(Song)
            });
        },
        remove: function(id) {
            return $http({
                method: "DELETE",
                url: API_URL + 'artists/' + id,
            });
        },
        artist: {
         	first: null,
         	last: null,
         	genres: null,
            url: null
        }
    }
});

