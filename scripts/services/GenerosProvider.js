
angular.module("jeviteca").service("GenerosProvider", function($http) {
    this.getGeneros = function() {
        return $http.get("resources/data/genres.json");
    };
});
