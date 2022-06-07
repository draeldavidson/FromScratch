// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 23) console.log(x);

// const calcAge = (birthYear) => 2037 - birthYear;
// console.log();
/**
 * TODO
 * FUTUREPROJECT
 * BUG
 * FIXME
 * NOTES
 * PROBLEM
 * CODING CHALLENGE
 */

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; index++) {
    const curTemp = temps[index];
    if (typeof curTemp !== "number") continue;
    /**this is saying that when they loop itterates through the array store that # in the array 'temps' 
       *(temps holds only 1 #)
      if the current # is greater than what was stored in temps replace it with the new #.
      */
    // if (temps[index] > max) max = temps[index];
    // if (temps[index] < min) min = temps[index];
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  let amplitude = max - min;
  console.log(amplitude);
};

calcTempAmplitude([3, 7, 4]);
/**
 * first max = 3
 * then it asks is 7 > 3? yes max = 7
 * then is 4 > 7? no max = 7
 */
calcTempAmplitude(temperatures);
// const amplitude= calcTempAmplitude(temperatures);
// console.log(amplitude);


// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const array1 = ['a','b','c'];
// const array2 = ['d','e','f'];
// const array3 = array1.concat(array2);

// console.log(array3);


const calcTempAmplitudeNew = function (temps1, temps2) {
    const temps = temps1.concat(temps2);
    let max = temps[0];
    let min = temps[0];
  
    for (let index = 0; index < temps.length; index++) {
      const curTemp = temps[index];
      if (typeof curTemp !== "number") continue;
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    let amplitude = max - (min);
    console.log(amplitude);
  };
  
  calcTempAmplitudeNew([3, 7, 4],[-1, 9, 0, 5]);


