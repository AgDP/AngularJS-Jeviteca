
angular
    .module("jeviteca")
    .directive("elementoTablaAlbumes", function(){

        return {
            restrict: "AE",
            templateUrl: "views/ElementoTablaAlbumes.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function(scope){

            }
        };

    });

angular
    .module("jeviteca")
    .directive("elementoTablaBandas", function(){

        return {
            restrict: "AE",
            templateUrl: "views/ElementoTablaBandas.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function(scope){

            }
        };

    });

angular
    .module("jeviteca")
    .directive("elementoTablaGeneros", function(){

        return {
            restrict: "AE",
            templateUrl: "views/ElementoTablaGeneros.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function(scope){

            }
        };

    });


angular
    .module("jeviteca")
    .directive("elementoTablaAlbumesFavoritos", function(){

        return {
            restrict: "AE",
            templateUrl: "views/ElementoTablaAlbumesFavorito.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function(scope){
                if (typeof(Storage) !== "undefined") {
                    scope.mostrarFavorito = function ( idAlbumes ) {
                        var favorito = localStorage.getItem("album_" + idAlbumes);
                        return favorito === "true";
                    };

                    scope.hacerFavorito = function () {
                        localStorage.setItem("album_" + idAlbumes, "true");
                    };

                    scope.quitarFavorito = function () {
                        localStorage.removeItem("album_" + idAlbumes);
                    };
                }
            }
        };

    });
