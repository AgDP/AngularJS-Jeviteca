
angular
    .module("jeviteca")
    .controller("GenerosController", ["$scope", "Generos", function($scope,Generos){

        $scope.generos = Generos.data;

    }]);
