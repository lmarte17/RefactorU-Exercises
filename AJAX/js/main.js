angular.module('pokeapp', [])
    .controller('PokeController', pokeController);


pokeController.$inject = ['$http'];


function pokeController($http) {
    var pCtrl = this;
    pCtrl.message = "Hello there";

    pCtrl.getMyPokemon = function() {
        console.log(pCtrl.pokemonNum);
        $http.get('http://pokeapi.co/api/v1/pokemon/' + pCtrl.pokemonNum)
            .then(function(res, status) {
                console.log(res.data);
                pCtrl.myData = res.data;
                console.log("Success: " + res);
                // get the name, height, weight
            }, function(res, status) {
                console.log("Failure: " + res);
            });
    };


}
