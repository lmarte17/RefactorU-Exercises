// Functions


//Function expression AKA anonymous function
var calculateArea = function(width, height) {
    var a = "test";
    console.log("A: " + a);
    return width * height;
}


console.log(calculateArea(5,4));

// named function
function calculateArea2(width, height) {
    return width * height;
}

console.log(calculateArea2(5,4));


var bill = {}; //object literal
var alice = {};

bill.doSomething = calculateArea;
bill.doSomething();

var bill = {
    doSomething: calculateArea,
    doSomething2: calculateArea2,
}


// Built in methods

function simple() {};
console.log(simple.length);
console.log(simple.constructor);

var str = "some string";
var num = 5;


