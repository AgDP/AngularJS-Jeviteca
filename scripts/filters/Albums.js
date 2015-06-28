
angular.module("jeviteca").filter("albumsFilter", function() {
    return function(collection) {
        var albums = "";
        angular.forEach(collection, function(value) {
            albums += value.title + ", ";
        });
        return albums;
    };
});
