

angular.module("Superheroes", [])
    .controller('theAvengers', avengersController);
    
    function avengersController() {
        //var aCtrl = this;
        this.title = "Every team needs a captain";
        this.heroes = ['Captain America',
                        'Iron Man',
                        'Captain Obvious',
                        'Thor'];
        this.newAvenger = "";
        
        this.addNewHero = function() {
          this.heroes.push(this.newAvenger);
}
    }


