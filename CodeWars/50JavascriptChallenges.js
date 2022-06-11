//COMPLETE JAVASCRIPT COURSE 

////////////////////////////////////
//LESSON 1 

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


//LESSON 2 
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


//LESSON 3

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]




1. CREATE A FUNCTION THAT TAKES AN ARRAY.
✅ Done

2. TAKE THE ARRAY AND MAKE A NEW ARRAY THAT PUTS THE NUMBERS IN ORDER SMALLEST TO LARGEST
✅  arr.sort();

3. ITTERATE THROUGH THE NEW ARRAY WITH A COUNTER AND LOG `... ${newArray[i]}ºC in ${counter} days`
✅ done
... 17ºC in 1 days
... 21ºC in 2 days
... 23ºC in 3 days

*? DOES THE LOG HAVE TO PRINT IN ONE LINE?



*/

// const printForecast = function (arr) {
//   const newArray = arr.sort();
//   // console.log(newArray);
//   let counter = 1;
//   // let stringArray = [];
//   for (let index = 0; index < newArray.length; index++) {
//     console.log(`... ${newArray[index]}ºC in ${counter} days`);
//     // stringArray.push(`... ${newArray[index]}ºC in ${counter} days`);
//     counter++;
//   }
//   // console.log(stringArray);
// };

// // printForecast([17, 21, 23])
// printForecast([12, 5, -5, 0, 4]);

//LMAO I READ THE QUESTION WRONG I WAS JUST SUPPOSED TO MAKE THE ARRAY A STRING

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let arrayStr = "";
//   for (let i = 0; i < arr.length; i++) {
//     arrayStr += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log("... " + arrayStr);
// };

// printForecast(data1);
// printForecast(data2);

//LESSON 9









///////////////////////////////////////////////////////////
//CODE WARS

//CODING CHALLENGE 1
/** 1. Write a function that accepts an array of 10 integers (between 0 and 9),
 * that returns a string of those numbers in the form of a phone number.
 */

// function createPhoneNumber(numbers) {
//   let strPhoneNumber = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
//   return strPhoneNumber;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//CODING CHALLENGE #2

/** 2. Given two integers a and b, which can be positive or negative,
 * find the sum of all the integers between and including them and return it.
 * If the two numbers are equal return a or b.
 */

// function getSum(a, b) {
//   //Good luck!
//   let sum = 0;

//   if (a === b) {
//     return a;
//   } else if (a < b) {
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//     return sum;
//   } else if (a > b) {
//     for (let i = a; i >= b; i--) {
//       sum += i;
//     }
//     return sum;
//   }
// }

// console.log(getSum(-505, 4));
// console.log(getSum(0,-1));
// console.log(getSum(0,10));

//CODING CHALLENGE #3
/** 3.Given an array of ones and zeroes, convert the equivalent binary value to an integer.
 */

// const binaryArrayToNumber = (arr) => {
//   // your code
//   const withoutCommas = arr.join("");
//   return parseInt(withoutCommas, 2);

// };
// console.log(binaryArrayToNumber([1, 0, 1, 0]));
// console.log(binaryArrayToNumber([1, 0, 1, 0, 1, 0]));
// console.log(binaryArrayToNumber([1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1]));

//CODING CHALLENGE #4
/** 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

// function findShort(s) {
//   let myArray = s.split(" ");
//     // return myArray
//     let wordLength= [];
//     for (let i = 0; i < myArray.length; i++) {
//         wordLength.push(myArray[i].length)
//     }
//     let smallestWord= wordLength[0];
//     for (let i = 0; i < wordLength.length; i++) {
//         let curNum = wordLength[i]
//         if (curNum<smallestWord) smallestWord= curNum;

//     }
//     return smallestWord;
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(findShort("turns out random test cases are easier than writing out basic ones"));
// console.log(findShort("Let's travel abroad shall we"));

//CODING CHALLENGE #5

/**
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.
 */

// function high(x) {
//     // TURNS THE STRING INTO AN ARRAY
//   let myArray = x.split(" ");

//   let oneWord= [];
//   let largestSum = 0;
//   let largestWord = '';
//   for (let i = 0; i < myArray.length; i++) {
//       // TAKES THE ARRAY AND CREATES A NEW ARRAY WITH ONE WORD
//     oneWord=myArray[i]
//     let sumOfOneWord= 0;
//     // CYCLES THROUGH THAT ONE WORD AND GETS THE SCORE OF EACH LETTER
//     for (let i = 0; i < oneWord.length; i++) {
//         //ADDS THE LETTERS UP INTO ONE SUM
//         sumOfOneWord += String(oneWord).charCodeAt(i)-96;

//         if (sumOfOneWord > largestSum) {
//             largestSum = sumOfOneWord;
//             largestWord = oneWord;
//         }
//     }
//         }
//         return largestWord;
// }

// // console.log('abc'.charCodeAt(2)-96);

// console.log(high("my name is drael it is very nice to meet you"));
// console.log(high("man i need a taxi up to ubud"));
// console.log(high('what time are we climbing up the volcano'));
// console.log(high('take me to semynak'));
// console.log(high('aa b'));
// console.log(high('b aa'));
// console.log(high('bb d'));
// console.log(high('d bb'));
// console.log(high('aaa b'));

//CODING CHALLENGE #6
/**
Your task is to write a function maskify, which changes all but the last 
four characters into '#'.

1. replace the last 4 characters to #
2. change sring to an array?
2.find the length of the array - 4?
    if array.length <= 4 return string
3.iterate through the array if place in array = .length-4,3,2,1 
print # else print [i]?

*/
// return masked string
// function maskify(cc) {
//   let myArray = cc.split("");
//   let length = myArray.length;
//   if (length <= 4) {
//     let strAgain = myArray.join("");
//     return strAgain;
//   } else {
//     newArray = [];
//     for (let i = 0; i < myArray.length; i++) {
//       if (i < length - 4) {
//         newArray.push("#");
//       } else {
//         newArray.push(myArray[i]);
//       }
//     }
//     strAgain = newArray.join("");
//     return strAgain;
//   }
// }

// //TESTS
// console.log(maskify("4556364607935616"));
// console.log(maskify("1"));
// console.log(maskify("11111"));
// console.log(maskify("Skippy"));

//CODING CHALLENGE #7

/**
 Digital root is the recursive sum of all the digits in a number.
 Given n, take the sum of the digits of n. If that value has more than one digit, 
 continue reducing in this way until a single-digit number is produced. 
 */

// function digital_root(n) {
//   //   //   return array
//   let arraySum = n;
//   while (String(arraySum).split("").length >= 2) {
//     // return `yes`;
//     let array = String(arraySum).split("");
//     // return `${n} is more than 2 digits`;
//     arraySum = 0;
//     for (let i = 0; i < array.length; i++) {
//       arraySum += Number(array[i]);
//       //   array.length = 0;
//       //   array.push(arraySum);
//     }
//     // n = arraySum;
//     // return array;
// }
// return arraySum;
// }

// function digital_root(n) {
//     return (n - 1) % 9 + 1;
//   }

// // //TEST
// console.log(digital_root(6));
// console.log(digital_root(16));
// console.log(digital_root(456));
// console.log(digital_root(0));

