'use strict';

//EXCERCISES

//FUNCTIONS
// function discribeCountry(country, population, capitalCity){
//     // console.log(` ${country} has ${population} million people and its capital city is ${capitalCity}.`);
// const discription = ` ${country} has ${population} million people and its capital city is ${capitalCity}.`;
// return discription
// }

// const USA = discribeCountry("USA", 332, 'Washington DC');
// console.log(USA);

// const spain = discribeCountry('Spain', 47, 'Madrid');
// console.log(spain);

// const finland = discribeCountry('Finland', 5, "Helsinki");
// console.log(finland);



//FUNCTIONS DECLARATIONS VS.
// function percentageOfWorld(population){
// return (population / 7900)*100;
// }
// console.log("FUNCTIONS DECLARATIONS");
// console.log(World(1441));
// console.log(percentageOfWorld(332));
// console.log(percentageOfWorld(47));

//FUNCTIONS EXPECTATIONS
// const percentageOfWorld2 = function (population){
//     return (population / 7900)*100;
// }
// console.log("FUNCTIONS EXPECTATIONS");
// console.log(percentageOfWorld2(1441));
// console.log(percentageOfWorld2(332));
// console.log(percentageOfWorld2(47));

//ARROW FUNCTION

// console.log("ARROW FUNCTION");
// const percentageOfWorld3 = population => (population / 7900)*100;
// console.log(percentageOfWorld3(1441));
// console.log(percentageOfWorld3(332));
// console.log(percentageOfWorld3(47));

//FUNCTION CALLING OTHER FUNCTIONS

// const describePopulation = function (country, population) {
//     return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`
// }

// console.log(describePopulation("Spain", 47));
// console.log(describePopulation("USA", 332));
// console.log(describePopulation("China", 1441));

//ARRAYS
// const populations = [1441, 332, 47, 33];

// const arraySize = arrayNew => arrayNew.length === 4 ? 'true' : 'false';
// console.log(arraySize(populations));

// console.log(percentageOfWorld(populations[0]),percentageOfWorld(populations[1]),percentageOfWorld(populations[2]),percentageOfWorld(populations[3]));


//Basic Array Operations (Methods)
// const neighbours = ['Canada', 'Mexico', 'Greenland']
// console.log(neighbours);

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')){
//     console.log( 'Probably not a central European country :D');
// }

// console.log(neighbours.indexOf('Greenland'));
// neighbours[2] = 'The Greenest of Lands'
// console.log(neighbours);


//OBJECTS
// const myCountry = {
//     country: 'United States of America',
//     capital: 'Washington DC',
//     language: 'English', 
//     population: 332,
//     neighbours: ['Canada', 'Mexico', 'Utopia'],
//     isIsland: false,

//OBJECT METHOD
//     discribe: function () {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.isIsland? 'is an island' : 'is not an island'}, & ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.'`
//     },

// }
// // console.log(myCountry);

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.'`);

// console.log(myCountry.population + 2);
// console.log(myCountry['population'] - 2);

// console.log(myCountry.discribe());

//for loop

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
    
// }

//Looping Arrays, Breaking and Continuing

// const populations = [1441, 332, 47, 33];
// const percentages2 = [];

// for (let row = 0; row < populations.length; row++) {
//     percentages2.push((populations[row] / 7900)*100);

//     // console.log(percentages2);
    
// }
// console.log(percentages2);

//loop in loop 

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// const newArray = [];

// for (let row = 0; row < listOfNeighbours.length; row++) {
//     // console.log(listOfNeighbours[row]);
//     for (let neighbour = 0; neighbour < listOfNeighbours[row].length; neighbour++) {
//         const countryNeighbor = listOfNeighbours[row][neighbour]
//         console.log(`Neighbour: ${countryNeighbor}`);
        
//     }
// }

//WHILE LOOP

// const populations = [1441, 332, 47, 33];
// const percentages2 = [];

// // for (let row = 0; row < populations.length; row++) {
// //     percentages2.push((populations[row] / 7900)*100);

// //     // console.log(percentages2);
    
// // }
// // console.log(percentages2);
// let row = 0;
// while (row < populations.length) {
//     percentages2.push(((populations[row] / 7900)*100));
//     row++
// }
// console.log(percentages2);









///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


GOOD LUCK 😀
*/

// const calcAverage = (score1,score2,score3) => ((score1 + score2 + score3) / 3);

//TEST DATA 1
// const scoreDolphins= calcAverage(44,23,71);
// const scoreKoalas= calcAverage(65,54,49)

//TEST DATA 2
// const scoreDolphins= calcAverage(85,54,41);
// const scoreKoalas= calcAverage(23,34,27)

//TEST DATA 3
// const scoreKoalas= calcAverage(85,54,41);
// const scoreDolphins= calcAverage(13,13,13)


// const checkWinner= function (avgDolphins, avgKoalas) {

//     if (avgKoalas >= (avgDolphins * 2)) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else if (avgDolphins >= (avgKoalas * 2)){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else{
//         console.log('no team wins.');
//     }
// }
// console.log(scoreDolphins,scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);



///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44


GOOD LUCK 😀
*/

// const calcTip = function(bill){
//     if (bill >= 50 && bill <= 300){
//        return (bill * .15);
//     }else{
//         return (bill * .20);

//     }

// }
// console.log(calcTip(500));

// const bills = [125, 555, 44];
// console.log(`The bills are: ${bills}`);


// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// console.log(`The tips will be: ${tips}`);

// const total = [(bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2])];

// // const total = [(bills[0]+calcTip(bills[0])),(bills[1]+calcTip(bills[1])),(bills[2]+calcTip(bills[2]))];
// console.log(`The totals will be: ${total}`);



///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/


// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     },
// }

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     },

// }
// // mark.calcBMI();
// // john.calcBMI();
// // console.log(mark.bmi, john.bmi);

// if (mark.calcBMI()> john.calcBMI()){
//     console.log(`${mark.fullName} has the higher BMI: ${mark.calcBMI()} vs. ${john.calcBMI()}`);
// }else{
//     console.log(`${john.fullName} has the higher BMI: ${john.calcBMI()} vs. ${mark.calcBMI()}`);

// }


///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52


4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let row = 0; row < bills.length; row++) {
//     if (bills[row] >= 50 && bills[row] <= 300){
//         // console.log(bills[row] * .15);
//         const tip =bills[row] * .15;
//         // tips.push(bills[row] * .15);
//         tips.push(tip);
//         // totals.push((bills[row])+(bills[row] * .15))
//         const total = (bills[row])+tip;
//         totals.push(total);

//         console.log(`The $${bills[row]} will have a ${tip} tip and a $${total} total`);

//     }else{
//         // console.log(bills[row] * .20);
//         const tip =bills[row] * .20;
//         // tips.push(bills[row] * .20);
//         tips.push(tip);
//         // totals.push((bills[row])+(bills[row] * .20))
//         // totals.push((bills[row])+tip);
//         const total = (bills[row])+tip;
//         totals.push(total);

//         console.log(`The $${bills[row]} will have a ${tip} tip and a $${total} total`);

// }
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);

// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
//   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
//   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
//   4.3. Call the function with the 'totals' array
// const arr = [];
// const calcAverage = function(arr){
//     let sum = 0;
//     for (let row = 0; row < arr.length; row++) {
//          sum += arr[row];
//     }
//     const average = sum / arr.length
//     return average;

// }
// console.log(calcAverage(totals));