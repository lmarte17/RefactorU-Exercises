angular.module("MainApp", []);

angular.module("MainApp")
    .controller("mainController", mainController);
    
mainController.$inject=['$scope'];

function mainController($scope) {
    $scope.greeting = "I'm Sam Jackson!";
}