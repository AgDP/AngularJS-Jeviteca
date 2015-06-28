//Utilizo promesas y filtros para obtener los datos
angular.module("jeviteca").service("AlbumesProvider", function($http,$filter,$q) {
    this.getAlbumes = function() {
        return $http.get("resources/data/albums.json");
    };

    this.getAlbumesById = function( id ) {
        var promise = $q.defer();
        $http.get("resources/data/albums.json").then(function (data) {
            var album = $filter("filter")(data.data, {"id": id})[0];
            promise.resolve(album);
        });
        return promise.promise;
    };
});
