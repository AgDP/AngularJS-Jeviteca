
angular.module("jeviteca").filter("tracklist", function() {
    return function(collection) {
        return collection.join(" - ");
    };
});
