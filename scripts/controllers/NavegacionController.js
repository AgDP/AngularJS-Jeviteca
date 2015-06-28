
angular
    .module("jeviteca")
    .controller("NavegacionController", ["$scope", "$routeSegment", function($scope,$routeSegment){

        $scope.rutaEsAlbumes = function(){
            return $routeSegment.startsWith( "albumes" );
        };

        $scope.rutaEsBandas = function(){
            return $routeSegment.startsWith( "bandas" );
        };

        $scope.rutaEsGeneros = function(){
            return $routeSegment.startsWith( "generos" );
        };

    }]);
