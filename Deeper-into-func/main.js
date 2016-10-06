function move(speed) {
    //typeof is an operator that will return the type that a variable/value is
    console.log(typeof speed);
    
    if ( typeof speed === 'string') {
        console.log("We move at a  " + speed + " pace!");
    } else {
        console.log("we couldn't move!");
    }
}

move('fast');
move(5);



function doThing(pokeman, digimon) {
    // ES6 - Template literls
    console.log(`The ${pokeman} fights the ${digimon}`);
    
    console.log(arguments);
    
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}



doThing('pickachewed', "augerman");



//Scoping
// Lexical Scoping -  variables declared inside of a scope and inaccessible outside of scope
// dymanic scoping - when function is called it creates scope. the scope only exists while function is running

function myFunc() {
    var potato = "spudtacular";
    return potato;
}



// garbage collection
    // process of destroying unused var to free up memory
    // If value of obj has no reference to it. it will be gorbage collected
    
    
    var pikachewed = {
        name: "picachewed",
        move: "thunder",
    }

pikachewed = null; // object does not exist anymore


var charmangler = {
    name: 'charmangler',
    trainer: {
        name: 'Ash',
        age: 10
    }
}

var ash = charmangler.trainer;
charmangler = null;

//All non-primitive types (objects, arrays, functions) are passed by reference
//All primitive types (numbers, strings, booleans, null, undefined) are passed by value

// callback functions

var delayInMilliseconds = 3000;

var codeToRun = function() {
    console.log('testing');
}

var timeoutId = setTimeout(function() {
    console.log("testing");
}, delayInMilliseconds);


setInterval(codeToRun, 1000);



// closure - Function defined inside functions retain access to the scope they were created in