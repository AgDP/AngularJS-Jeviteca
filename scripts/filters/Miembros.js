
angular.module("jeviteca").filter("miembros", function() {
    return function(collection) {
        var miembros = "";
        angular.forEach(collection, function(value) {
            miembros += value.name + ", ";
        });
        return miembros;
    };
});
