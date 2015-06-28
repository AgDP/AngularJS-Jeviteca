
angular
    .module("jeviteca")
    .controller("BandasController", ["$scope", "Bandas", function($scope,Bandas){

        $scope.bandas = Bandas.data;
    }]);
