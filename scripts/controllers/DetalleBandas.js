
angular
    .module("jeviteca")
    .controller("DetalleBandas", ["$scope", "BandasDetalle", function($scope,BandasDetalle){
        $scope.banda = BandasDetalle;

        var query = encodeURIComponent(BandasDetalle.name);
        $scope.wiki = "https://es.wikipedia.org/wiki/Special:Search?search=" + query;


    }]);
