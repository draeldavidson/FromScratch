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
// function cutFruitPieces(fruit){
//     return fruit * 3;
// }




// function fruitProccessor(apple, oranges) {
//     const applePieces =cutFruitPieces(apple);
//     const orangePieces =cutFruitPieces(oranges);


//     // const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  
//     return juice;
// }

// console.log(fruitProccessor(2,3));

//ARRAYS
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Drael';
// const drael = [firstName, 'Davidson', 2022-1992, 'developer', friends];
// console.log(drael);

// const calcAge = function (birthYear){
//     return 2022- birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[1])
// const age2 = calcAge(years[2])
// const age3 = calcAge(years[3])


// console.log(age1, age2, age3);

// const ages = [calcAge(years[1]), calcAge(years[2]), calcAge(years[3]) ];
//     console.log(ages);

//     friends.push('Hannah');
//     console.log(friends);

//     const unshifted = friends.unshift('John');
//     console.log(unshifted);
//     console.log(friends);

//     friends.pop();
//     console.log(friends);

//     console.log(friends.indexOf('Peter'));
//     console.log(friends.includes('Bob'));
    
//     friends[3]='Petersburg';
//     console.log(friends);


//Objects

// const drael = {
//     firstName: 'Drael',
//     lastName: 'Davidson',
//     age: 2022-1992,
//     job: 'developer',
//     friends: ['Shelly','Lauren','Drake']
// };

// console.log(drael);
// console.log(drael.lastName);
// console.log(drael['lastName']);

// const nameKey = 'Name';
// console.log(drael['first'+ nameKey]);
// console.log(drael['last'+ nameKey]);

// const interestedIn = prompt('What do you want to know about Drael? Choose between firstName, lastName, age, job, and friends');

// console.log(drael[interestedIn]);
// if (drael[interestedIn]){
//     console.log(drael[interestedIn]);
// }else{
//     console.log('Wrong request. Try again');
// }

// drael.location = 'USA';
// drael['twitter']= '@drizzleonrice';
// console.log(drael);

//CHALLENGE 
//Drael has 3 friends and her best friend is 'Shelly'
// console.log(`${drael.firstName} has ${drael.friends.length} friends and her best friend is '${drael.friends[0]}!'`);

//METHODS
// const drael = {
//     firstName: 'Drael',
//     lastName: 'Davidson',
//     birthYear: 1992,
//     job: 'developer',
//     friends: ['Shelly','Lauren','Drake'], 
//     hasDriversLincense: true,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2022 - this.birthYear
    // }

//     calcAge: function () {
//         // console.log(this);
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     // license: function(){
//     //     if (this.hasDriversLincense === true){
//     //         this.yesOrNo ='a';
//     //         return this.yesOrNo;
//     //     }else{
//     //         this.yesOrNo ='no';
//     //         return this.yesOrNo;
//     //     }
//     // },

//     getSummary: function () {
//         // return`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.license()} driver's license`;
//         return`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLincense ? 'a' : 'no'} driver's license`;

//     },

// };
// console.log(drael.calcAge());
// console.log(drael['calcAge']());

// console.log(drael.getSummary());


//LOOPS
//FOR LOOP KEEPS RUNNING WHILE CONDITION IS TRUE

// for (let rep = 1; rep <= 100; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏾‍♂️`);    
// }

//LOOPING AN ARRAY

// const draelArray = [
//     'Drael',
//     'Davidson',
//     2022-1992,
//     'developer',
//     ['Shelly','Lauren','Drake'],
//     true,
// ];
// const types = [];
// for (let row = 0; row < draelArray.length; row++) {
//     console.log(draelArray[row], typeof draelArray[row]);    

//     //FILLING AN ARRAY
//     // types[row] = typeof draelArray[row]
//     types.push(typeof draelArray[row]);
// }   

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let row = 0; row < years.length; row++) {
//     // console.log(2022 - years[row]); 
//     ages.push(2022 - years[row])
// }
// console.log(ages);

//continue will skip if true and continue the loop

// console.log('----ONLY STRINGS----');
// for (let row = 0; row < draelArray.length; row++) {
//     if (typeof draelArray[row] !== 'string')
//     continue;
    
//     console.log(draelArray[row], typeof draelArray[row]);    
// }

// //break will completly terminate the loop
// console.log('----BREAK WITH NUMBER----');
// for (let row = 0; row < draelArray.length; row++) {
//     if (typeof draelArray[row] === 'number')
//     break;
    
//     console.log(draelArray[row], typeof draelArray[row]);    
// }

//looping an array backwards
// const draelArray = [
//     'Drael',
//     'Davidson',
//     2022-1992,
//     'developer',
//     ['Shelly','Lauren','Drake'],
//     true,
// ];

// for (let row = draelArray.length - 1; row >= 0; row--) {
//     console.log(row, draelArray[row]);
    
// }

//loop in loop 
// for (let excercise = 1; excercise <= 3; excercise++) {
//     console.log(`----- STARTING EXCERSICE ${excercise}`);
//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`${rep} REP 🏋🏾‍♂️`);
        
//     }
//     console.log(`---REST FOR 3`);

//     for (let rest = 1; rest <=3; rest++) {
//         console.log(`😚 INHALE... EXHALE... ${rest}`);
        
//     }
// }

//WHILE LOOP
// let rep = 1;
// while (rep <= 10) {
//          console.log(`${rep} REP 🏋🏾‍♂️`);
//          rep++
// }

let dice = Math.trunc(Math.random() * 12) + 1
// console.log(dice);
let counter = 0;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 12) + 1
    counter++;
}
console.log(`YAY!!!! You rolled a ${dice} in ${counter + 1} moves`);


