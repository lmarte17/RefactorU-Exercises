angular.module('myApp', [])
    .controller('parkLotCtrl', parkLotCtrl)
    .controller('restCtrl', restCtrl)
    .factory("locationFact", locationFactory)
    

parkLotCtrl.$inject = ["locationFact"];

    
    function parkLotCtrl(locationFact) {
        var park = this;
        park.greeting = 'HELLO';
        
        park.lot = locationFact.lot;
        
        park.filterLots = function(element, index) {
            return element.capacity > 30;
        }
    }
    
    function restCtrl(locationFact) {
        var rest = this;
        rest.greeting = 'HELLO2';
        
        rest.restaurant = locationFact.restaurant;
        rest.lot = locationFact.lot;
        
        rest.restFilter = {};
        
        rest.getNearestLot = function(index) {
            return rest.lot[index].location;
        }
    }
    
    function locationFactory() {
        
        var lot = [
            {
                capacity: 20,
                cost: 10.00,
                location: 'Larimer Aquare'
            },
            {
                capacity: 100,
                cost: 3.50,
                location: 'Loch Ness'
            },
            {
                capacity: 50,
                cost: 5.00,
                location: 'Downtown'
            }
            ];
            
            
    var restaurant = [
            {
                name: "Pioneer Pete's",
                menu: ["Pioneer Pizza", "Heart Attack Burger"],
                style: "American"
            },
            {
                name: "Hooters",
                menu: ["Wings, Beer, Nachos"],
                style: "Blue Collar"
            },
            {
                name: "Linger",
                menu: ["sliders", "crap"],
                style: "bad food"
            }
            ]
            
        return {
            lot: lot,
            restaurant: restaurant
        }; //it is very common to return
    }