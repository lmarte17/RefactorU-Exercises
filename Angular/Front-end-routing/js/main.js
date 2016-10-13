angular.module('CremeFraiche', ['ngRoute'])
    .controller("SoFreshAndSoCreamCream", creamController)
    .controller("CoffeeOrigins", originsController)
    .config(Router);

Router.$inject = ['$routeProvider'];

function Router($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html'
        })
        .when('/origins', {
            templateUrl: '/templates/origins.html',
            controller: "CoffeeOrigins as oCtrl"

        })
        .when('/menu', {
            templateUrl: '/templates/menu.html'
        })
        .otherwise({
            redirectTo: '/'
        })
};

function creamController() {
    var cCtrl = this;

    cCtrl.greeting = "Welcome to our Bozo Cofee";


    cCtrl.menu = [{
        name: "White chocolate mocha",
        price: 7.50
    }, {
        name: "Black death",
        price: 6.66
    }, {
        name: "latte",
        price: 20.00
    }]
};


function originsController() {
    var oCtrl = this;
    oCtrl.greeting = 'What up, Yo!';
}
