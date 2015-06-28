
angular
    .module("jeviteca")
    .controller("AlbumesController", ["$scope", "Albumes", function($scope,Albumes){
        $scope.albumes = Albumes.data;

        $scope.findValue = function(enteredValue) {
            $scope.albumes = [];

            if(enteredValue === ""){
                $scope.albumes = Albumes.data;
            }else{
                angular.forEach(Albumes.data, function(value) {
                    if ( value.title.toLowerCase().indexOf(enteredValue.toLowerCase()) >= 0 ) {
                        $scope.albumes.push(value);
                    }
                });
            }

        };
    }]);
