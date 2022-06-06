//STRICT MODE forbids us to do certain things and creates visible errors in the developer console
//where in other casess JS would just fail silently.
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive! :D');

//FUNCTIONS

// function logger() {
//     console.log('My name is Drael');
// }

//calling/ running/ invoking function
// logger();
// logger();
// logger();

//FUNCTIONS DECLARATIONS VS. EXPECTATIONS

//Declaration you can call declarations before they are defined in the code
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1992);
// console.log(age1);


//expectation produces a value
// a function without a name is an anonymous function
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1992)
// console.log(age1, age2);

//ARROW FUNCTION
// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3(1992));

//FUNCTION CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit){
    return fruit * 3;
}




function fruitProccessor(apple, oranges) {
    const applePieces =cutFruitPieces(apple);
    const orangePieces =cutFruitPieces(oranges);


    // const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  
    return juice;
}

console.log(fruitProccessor(2,3));
