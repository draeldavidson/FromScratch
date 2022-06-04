const country = "United States of America";
const continent = "North America";
let population= 332;
// population= 27;
console.log("The "+ country +" is in "+ continent + ", and has a population of "+ population + " million!");

let isIsland = false;
let language;

console.log("The "+ country +" is an island? "+ isIsland + ". The language is "+  language + ".");

language= "english";
console.log("The "+ country +" is an island? "+ isIsland + ". The language is "+  language + ".");


const halfOfCountry = population/2;

console.log(halfOfCountry);
population = population + 1;
const avgPopOfCountry = 33;

console.log("the "+ country + " is larger than the average country? " + (population > avgPopOfCountry));

const finland = 6;

console.log(country > finland);

let discription = `The ${country} is in ${continent}, and has a population of ${population}! The language is ${language}.`;

console.log(discription);

if (population > avgPopOfCountry){
    console.log(`${country}'s population is above average.`);
}else{
    console.log(`${country}'s population is ${avgPopOfCountry - population} million below average.`);
  
}

























////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

//1
// const test= "TEST ONE"
// let marksWeight= 78;
// let marksHeight= 1.69;

// let johnsWeight= 92;
// let johnsHeight= 1.95;

const test= "TEST TWO"
let marksWeight= 95;
let marksHeight= 1.88;

let johnsWeight= 85;
let johnsHeight= 1.76;




//2
let marksBMI = marksWeight / (marksHeight * marksHeight) ;
let johnsBMI = johnsWeight / (johnsHeight ** 2) ;
//3
let markHigherBMI = marksBMI > johnsBMI;
// console.log(marksBMI + " / "+ johnsBMI);

console.log(`
*******************CODING CHALLENGE #1 *********************
`);


console.log(test +": Mark's BMI is higher? = "+ markHigherBMI);

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

console.log(`
*******************CODING CHALLENGE #2 *********************
`);

if (marksBMI > johnsBMI){
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else{
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
}








