//CODING CHALLENGE
/** 1. Write a function that accepts an array of 10 integers (between 0 and 9),
 * that returns a string of those numbers in the form of a phone number.
 */

// function createPhoneNumber(numbers) {
//   let strPhoneNumber = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
//   return strPhoneNumber;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//CODING CHALLENGE

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

//CODING CHALLENGE
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

