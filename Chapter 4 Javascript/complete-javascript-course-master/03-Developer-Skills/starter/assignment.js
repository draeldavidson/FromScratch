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

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let arrayStr = "";
  for (let i = 0; i < arr.length; i++) {
    arrayStr += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("... " + arrayStr);
};

printForecast(data1);
printForecast(data2);
