//Regular excercises

// const country = "United States of America";
// const continent = "North America";
// let population= 332; //332

// population= 27;
// console.log("The "+ country +" is in "+ continent + ", and has a population of "+ population + " million!");

// let isIsland = false; //false
// let language;


// console.log("The "+ country +" is an island? "+ isIsland + ". The language is "+  language + ".");

// language= "English";
// console.log("The "+ country +" is an island? "+ isIsland + ". The language is "+  language + ".");


// const halfOfCountry = population/2;

// console.log(halfOfCountry);
// population = population + 1;
// const avgPopOfCountry = 33;

// console.log("the "+ country + " is larger than the average country? " + (population > avgPopOfCountry));

// const finland = 6;

// console.log(country > finland);

// let discription = `The ${country} is in ${continent}, and has a population of ${population}! The language is ${language}.`;

// console.log(discription);

// if (population > avgPopOfCountry){
//     console.log(`${country}'s population is above average.`);
// }else{
//     console.log(`${country}'s population is ${avgPopOfCountry - population} million below average.`);
  
// }

// //Logical operators

// if (language == "English" && isIsland == false && population < 50) {
//     console.log("You should live in America!");
// } else {
//     console.log("America does not meet your criteria :(");

// }

// let language = 'Mandarin';

// switch (language) {
//     case ('Chinese' , 'Mandarin'):
//         console.log('MOST number of native speakers');
//         break;
//     case 'Spanish':
//         console.log('Second place in number of native speakers');
//         break;
//     case 'English':
//         console.log('3rd Place');
//         break;
//     case 'Hindi':
//         console.log('Number 4');
//         break;
//     case 'Arabic':
//         console.log('5th most spoken');
//         break;                           
//     default:
//         console.log('Great language! :D');
//         break;
// }






//type conversion &
//type coercion

/** GUESS THE OUTCOME
'9' - '5'; 4
'19' - '13' + '17'; 617
'19' - '13' + 17; 23
'123' < 57; false
5 + 6 +'4' + 9 - 4 - 2; 117

 */

// console.log('9' - '5'); //4
// console.log('19' - '13' + '17');//617
// console.log('19' - '13' + 17);//23
// console.log('123' < 57);//false
// console.log(5 + 6 +'4' + 9 - 4 - 2);//1143


// let numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

// if (numNeighbors === 1){//has to be converted from string to number
//     console.log('Only 1 border!');
// } else if (numNeighbors > 1) {
//     console.log('More than one border');
// } else {
//     console.log('No borders');
// }


//Ternary Operator -> ?():();


// population > 33? 
//     console.log(`${country}'s population is aboove average.`):
//     console.log(`${country}'s population is below average.`);

// const compareToAvg = population > 33 ? 
// `${country}'s population is above average.` :
// `${country}'s population is below average.`;
// console.log(compareToAvg);


// console.log(`${country}'s population is ${population>33 ? 'above' : 'below'} average.`);








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

// const test= "TEST TWO"
// let marksWeight= 95;
// let marksHeight= 1.88;

// let johnsWeight= 85;
// let johnsHeight= 1.76;




// //2
// let marksBMI = marksWeight / (marksHeight * marksHeight) ;
// let johnsBMI = johnsWeight / (johnsHeight ** 2) ;
// //3
// let markHigherBMI = marksBMI > johnsBMI;
// // console.log(marksBMI + " / "+ johnsBMI);

// console.log(`
// *******************CODING CHALLENGE #1 *********************
// `);


// console.log(test +": Mark's BMI is higher? = "+ markHigherBMI);

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// console.log(`
// *******************CODING CHALLENGE #2 *********************
// `);

// if (marksBMI > johnsBMI){
//     console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
// } else{
//     console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
// }


////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
// TEST DATA 
// const scoreDolphins = ((96 + 108 + 89) / 3);
// const scoreKoalas = ((88 + 91 + 110) / 3);

// if (scoreDolphins > scoreKoalas){
//     console.log(`DOLPHINS WIN WITH AN AVERAGE SCORE OF ${scoreDolphins}!`);
// } else if (scoreDolphins < scoreKoalas){
//     console.log(`KOALAS WIN WITH AN AVERAGE SCORE OF ${scoreKoalas}!`);

// }else{
//     console.log(`IT'S A DRAW OF DOLPHINS ${scoreDolphins}, AND KOALAS ${scoreKoalas}!`);
// }






//TEST DATA BONUS 1
// const scoreDolphins = ((97 + 112 + 110) / 3);
// const scoreKoalas = ((109 + 95 + 123) / 3);

//TEST DATA BONUS 2
// const scoreDolphins = ((97 + 112 + 101) / 3);
// const scoreKoalas = ((109 + 95 + 106) / 3);





// if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas){
//     console.log(`DOLPHINS WIN WITH AN AVERAGE SCORE OF ${scoreDolphins}!`);
// } else if (scoreKoalas >= 100 && scoreDolphins < scoreKoalas) {
//     console.log(`KOALAS WIN WITH AN AVERAGE SCORE OF ${scoreKoalas}!`);

// }else if ((scoreKoalas >= 100) && (scoreDolphins >= 100) && scoreDolphins===scoreKoalas){
//     console.log(`IT'S A DRAW OF DOLPHINS ${scoreDolphins}, AND KOALAS ${scoreKoalas}!`);
// }else{
//     console.log('No Team Wins The Trophy');
// }

// console.log(`
// ${scoreDolphins} , ${scoreKoalas}
// `);


////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 275;
// const bill = 40;
// const bill = 430;
// let tip = bill >=50 && bill <=300 ? (bill * (15/100)) : (bill * (20/100));
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


