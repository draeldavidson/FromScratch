//CODING CHALLENGE
/** 1. Write a function that accepts an array of 10 integers (between 0 and 9),
 * that returns a string of those numbers in the form of a phone number.
 */

// function createPhoneNumber(numbers) {
//   let strPhoneNumber = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
//   return strPhoneNumber;
// }

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

//CODING CHALLENGE
/** 3.Given an array of ones and zeroes, convert the equivalent binary value to an integer.
 */

// const binaryArrayToNumber = (arr) => {
//   // your code
//   const withoutCommas = arr.join("");
//   return parseInt(withoutCommas, 2);

// };
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

function high(x) {
  let myArray = x.split(" ");
  // return myArray

  let oneWord= [];
  let largestSum = 0;
  let largestWord = '';
  for (let i = 0; i < myArray.length; i++) {
    oneWord=myArray[i]
    let sumOfOneWord= 0;

    for (let i = 0; i < oneWord.length; i++) {
        sumOfOneWord += String(oneWord).charCodeAt(i)-96;
        
        
        if (sumOfOneWord > largestSum) {
            largestSum = sumOfOneWord;
            largestWord = oneWord;
        }
    }
        }
        return largestWord;
}

// console.log('abc'.charCodeAt(2)-96);

console.log(high("man i need a taxi up to ubud"));
// console.log(high("taxi"));
console.log(high('what time are we climbing up the volcano'));
console.log(high('take me to semynak'));
console.log(high('aa b'));
console.log(high('b aa'));
console.log(high('bb d'));
console.log(high('d bb'));
console.log(high('aaa b'));
