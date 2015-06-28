
angular.module("jeviteca").service("BandasProvider", function($http,$filter,$q) {
    this.getBandas = function() {
        return $http.get("resources/data/bands.json");
    };

    this.getBandasById = function( id ) {
        var promise = $q.defer();
        $http.get("resources/data/bands.json").then(function (data) {
            var banda = $filter("filter")(data.data, {"id": id})[0];
            promise.resolve(banda);
        });
        return promise.promise;
    };
});

