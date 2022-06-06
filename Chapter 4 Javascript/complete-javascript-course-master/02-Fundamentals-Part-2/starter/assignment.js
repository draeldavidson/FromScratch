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
// console.log(percentageOfWorld(1441));
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