
angular.module("jeviteca").service("BandasProvider", function($http) {
    this.getBandas = function() {
        return $http.get("resources/data/bands.json");
    };
});
