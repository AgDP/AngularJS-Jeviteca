
angular.module("jeviteca").filter("origen", function() {
    return function(origen) {
        return "Origen: " + origen;
    };
});
