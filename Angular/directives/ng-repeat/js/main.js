angular.module('app', [])
    .controller('mainCtrl', mainController);
    
function mainController() {
    console.log("Hello controller!");
    var main = this;
    main.monkeys = [
        'Koko',
        'Casey',
        'Harambe',
        'Cheetah'
        ];
    
    main.monkeyObjs = {
        'Koko': 'eat',
        'Casey': 'ride bikes',
        'Harambe': 'save kids',
        'Cheetah': 'Swings on vines'
    }
    
    main.monkeyDupes = [
        'Koko',
        'Casey',
        'Harambe',
        'Cheetah'
        ];
}