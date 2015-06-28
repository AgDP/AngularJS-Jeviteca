
angular.module("jeviteca").service("AlbumesProvider", "$filter", function($http,$filter) {
    this.getAlbumes = function() {
        return $http.get("resources/data/albums.json");
    };

    this.getAlbumesById = function( id ) {
        $http.get("resources/data/albums.json").then(function (data) {
            var element = $filter("filter")(data.data, {"id": id})[0];
            debugger;
            return element;
        });
    };
});
