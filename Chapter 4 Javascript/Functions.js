/**
a function is a regular binding where the value is a function. some functions produce a value. 

Scopes in javascript. there are global and local scopes if  you declare a variable inside of a block it is a local scope otherwise its a global scope and can be used in the whole program.

let and const are local scopes 

var is global
 */

let x = 10;
if (true){
    let y =20;
    var z=30;
    console.log(x+y+z);
    //60
}
console.log(x+z);
//40


//you can create a function inside another function. LEXICAL SCOPPING

const hummus = function (servings) {
    const ingredient = function(amount,unit,name){
        let ingredientAmount = amount * servings;
        if (ingredientAmount>1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");

};
console.log(hummus(4));

//declaration notation

function square(x) {
    return x*x;
}

console.log(square(4));

//arrow functions

const power = (base,exponent)=>{
    let result =1;
    for (let count =0; count<exponent; count++){
        result *= base;
    }
    return result;
};

console.log(power(6,2));

/* a pure function is a specific kind of value that has no side effects and doesnt 
rely on side effects from other codes.**/