
angular.module("jeviteca", ["ngRoute", "route-segment", "view-segment"]);


angular
    .module("jeviteca")
    .config(["$routeSegmentProvider", "$routeProvider", function($routeSegmentProvider,$routeProvider){

        $routeSegmentProvider.when( "/albumes", "albumes");

        $routeSegmentProvider.segment("albumes", {
            controller: "AlbumesController",
            templateUrl: "views/Albumes.html",
            resolve: {
                Albumes: ["AlbumesProvider", function(AlbumesProvider) {
                    return AlbumesProvider.getAlbumes();
                }] }
        });

        $routeSegmentProvider.when( "/bandas", "bandas");

        $routeSegmentProvider.segment("bandas", {
            controller: "BandasController",
            templateUrl: "views/Bandas.html",
            resolve: {
                Bandas: ["BandasProvider", function(BandasProvider) {
                    return BandasProvider.getBandas();
                }] }
        });

        $routeSegmentProvider.when( "/generos", "generos");

        $routeSegmentProvider.segment("generos", {
            controller: "GenerosController",
            templateUrl: "views/Generos.html",
            resolve: {
                Generos: ["GenerosProvider", function(GenerosProvider) {
                    return GenerosProvider.getGeneros();
                }] }
        });

        $routeSegmentProvider.when( "/albumes/:id/detalles", "detalle_albumes" );

        $routeSegmentProvider.segment( "detalle_albumes", {
            controller: "DetalleAlbumes",
            templateUrl: "views/DetalleAlbumes.html",
            resolve: {
                AlbumesDetalle: ["AlbumesProvider", "$routeParams", function(AlbumesProvider,$routeParams){
                    return AlbumesProvider.getAlbumesById($routeParams.id);
                }]
            }
        });

    }]);
