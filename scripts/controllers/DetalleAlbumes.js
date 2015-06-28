
angular
    .module("jeviteca")
    .controller("DetalleAlbumes", ["$scope", "AlbumesDetalle", function($scope,AlbumesDetalle){
    debugger;
        $scope.album = AlbumesDetalle.data;

    }]);
