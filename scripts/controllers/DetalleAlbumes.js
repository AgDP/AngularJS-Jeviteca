
angular
    .module("jeviteca")
    .controller("DetalleAlbumes", ["$scope", "AlbumesDetalle", function($scope,AlbumesDetalle){
        $scope.album = AlbumesDetalle;

    }]);
