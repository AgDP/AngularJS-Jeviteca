
angular
    .module("jeviteca")
    .directive("favoritos", function(){

        return {
            restrict: "EA",
            templateUrl: "views/Favoritos.html",
            replace: true,
            scope: {
                idAlbumes: "="
            },
            link: function(scope){
                if (typeof(Storage) !== "undefined") {
                    scope.esFavorito = function () {
                        var favorito = localStorage.getItem("album_" + scope.idAlbumes);
                        return favorito === "true";
                    };

                    scope.hacerFavorito = function () {
                        localStorage.setItem("album_" + scope.idAlbumes, "true");
                    };

                    scope.quitarFavorito = function () {
                        localStorage.removeItem("album_" + scope.idAlbumes);
                    };
                }
            }

        };

    });
