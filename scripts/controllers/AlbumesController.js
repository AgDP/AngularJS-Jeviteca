
angular
    .module("jeviteca")
    .controller("AlbumesController", ["$scope", "Albumes", function($scope,Albumes){
        $scope.albumes = Albumes.data;
    }]);
