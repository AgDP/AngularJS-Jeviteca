
angular
    .module("jeviteca")
    .controller("DetalleAlbumes", ["$scope", "AlbumesDetalle", function($scope,AlbumesDetalle){

        $scope.album = AlbumesDetalle;

        var query = encodeURIComponent(AlbumesDetalle.title + AlbumesDetalle.band.name);
        $scope.youtube = "https://www.youtube.com/results?search_query=" + query;

    }]);
