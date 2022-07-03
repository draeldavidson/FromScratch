//PYRAMIDS

for (let hash=''; hash.length<8; hash+='#'){
    console.log(hash);
}
/**

#
##
###
####
#####
######
#######

 */
console.log();
let a=7;
let pyrm2="";
for (let i = 1; i <= a; i++){

    for(let k=0; k< i; k++){
    pyrm2 += "#";
}

    for (let j = 0; j < a - i; j++){
        pyrm2 += ".";
      }

      
      pyrm2 += "\n";
}
console.log(pyrm2);


/**

#......
##.....
###....
####...
#####..
######.
#######

 */

console.log();
let b=8;
let pyrm3="";
for (let i = 1; i <= b-1; i++){

    for(let k=0; k< i; k++){
    pyrm3 += ".";
}

    for (let j = 0; j < b- i; j++){
        pyrm3 += "#";
      }

      
      pyrm3 += "\n";
}
console.log(pyrm3);


/**

.#######
..######
...#####
....####
.....###
......##
.......#

 */



let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += ".";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);

/**

......#
.....##
....###
...####
..#####
.######
#######

 */


let m = 8;
let string1 = "";
for (let i = 1; i <= (m-1); i++) {
  // printing spaces
  for (let j = 0; j < m - i; j++) {
    string1 += "#";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string1 += ".";
  }
  string1 += "\n";
}
console.log(string1);

/**

#######.
######..
#####...
####....
###.....
##......
#.......

 */

let c = 5; // row or column count
// defining an empty string
let box = "";

for(let i = 0; i < c; i++) { // external loop
  for(let j = 0; j < c; j++) { // internal loop

    box += "*";
  }
  // newline after each row
  box += "\n";
}
// printing the string
console.log(box);

/**

*****
*****
*****
*****
*****

 */


let d = 5; // row or column count
// defining an empty string
let pyrm4 = "";

for(let i = 0; i < d; i++) { // external loop
  for(let j = 0; j < d; j++) { // internal loop
    if(i === 0 || i === d - 1) {
      pyrm4 += "*";
    }
    else {
      if(j === 0 || j === d - 1) {
        pyrm4 += "*";
      }
      else {
        pyrm4 += ".";
      }
    }
  }
  // newline after each row
  pyrm4 += "\n";
}
// printing the string
console.log(pyrm4);

/**

*****
*...*
*...*
*...*
*****

 */


let e = 6;
let pyrm5 = "";

for (let i = 1; i <= e; i++) {
  // printing star
  for (let j = 0; j < i; j++) {
    if(i === e) {
      pyrm5 += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        pyrm5 += "*";
      }
      else {
        pyrm5 += ".";
      }
    }
  }
  pyrm5 += "\n";
}
console.log(pyrm5);

/**

*
**
*.*
*..*
*...*
******

 */

let f = 5;
let pyrm6 = "";
// External loop
for (let i = 1; i <= f; i++) {
  // printing spaces
  for (let j = 1; j <= f - i; j++) {
    pyrm6 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    pyrm6 += "*";
  }
  pyrm6 += "\n";
}
console.log(pyrm6);

/**

    *
   ***
  *****
 *******
*********

 */

let g = 5;
let pyrm7 = "";
// External loop
for (let i = 0; i < g; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    pyrm7 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (g-i) - 1; k++) {
    pyrm7 += "*";
  }
  pyrm7 += "\n";
}
console.log(pyrm7);

/**

*********
 *******
  *****
   ***
    *

 */


let h = 5;
let pyrm8 = "";

// External loop
for (let i = 1; i <= h; i++) {
  // printing spaces
  for (let j = 1; j <= h - i; j++) {
    pyrm8 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === h) {
      pyrm8 += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        pyrm8 += "*";
      }
      else {
        pyrm8 += " ";
      }
    }
  }
  pyrm8 += "\n";
}
console.log(pyrm8);

/**

    *
   * *
  *   *
 *     *
*********

 */

let l = 5;
let pyrm9 = "";
// Upside pyramid
for (let i = 1; i <= l; i++) {
  // printing spaces
  for (let j = l; j > i; j--) {
    pyrm9 += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    pyrm9 += "*";
  }
  pyrm9 += "\n";
}
// downside pyramid
for (let i = 1; i <= l - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    pyrm9 += " ";
  }
  // printing star
  for (let k = (l - i) * 2 - 1; k > 0; k--) {
    pyrm9 += "*";
  }
  pyrm9 += "\n";
}
console.log(pyrm9);


/**

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

 */


let o = 5;
let pyrm10 = "";
// Upside pyramid
// upside diamond
for (let i = 1; i <= o; i++) {
  // printing spaces
  for (let j = o; j > i; j--) {
    pyrm10 += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    if (k === 0 || k === 2 * i - 2) {
      pyrm10 += "*";
    }
    else {
      pyrm10 += " ";
    }
  }
  pyrm10 += "\n";
}
// downside diamond
for (let i = 1; i <= o - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      pyrm10 += " ";
    }
    // printing star
    for (let k = (o - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (o - i) * 2 - 1) {
        pyrm10 += "*";
      }
      else {
        pyrm10 += " ";
      }
    }
    pyrm10 += "\n";
  }
console.log(pyrm10);

/**

    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *

 */

let p = 5;
let pyrm11 = "";
// Reversed pyramid pattern
for (let i = 0; i < p; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    pyrm11 += " ";
  }
  // printing star
  for (let k = 0; k < (p - i) * 2 - 1; k++) {
    pyrm11 += "*";
  }
  pyrm11 += "\n";
}
// pyramid pattern
for (let i = 2; i <= p; i++) {
  // printing spaces
  for (let j = p; j > i; j--) {
    pyrm11 += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    pyrm11 += "*";
  }
  pyrm11 += "\n";
}
console.log(pyrm11);

/**

*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********

 */

let q = 5;
let pyrm12 = "";
for (let i = 1; i <= q; i++) {
  for (let j = 0; j < i; j++) {
    pyrm12 += "*";
  }
  pyrm12 += "\n";
}
for (let i = 1; i <= q - 1; i++) {
  for (let j = 0; j < q - i; j++) {
    pyrm12 += "*";
  }
  pyrm12 += "\n";
}
console.log(pyrm12);

/**

*
**
***
****
*****
****
***
**
*

 */

let r = 5;
let pyrm13 = "";
for (let i = 1; i <= r; i++) {
  for (let j = 0; j < r - i; j++) {
    pyrm13 += " ";
  }
  for (let k = 0; k < i; k++) {
    pyrm13 += "*";
  }
  pyrm13 += "\n";
}
for (let i = 1; i <= r - 1; i++) {
  for (let j = 0; j < i; j++) {
    pyrm13 += " ";
  }
  for (let k = 0; k < r - i; k++) {
    pyrm13 += "*";
  }
  pyrm13 += "\n";
}
console.log(pyrm13);

/**

    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *

 */

var s = 6;
var str = "";
for (let i = s / 2; i < s; i += 2) {
  // print first spaces
  for (let j = 1; j < s - i; j += 2) {
    str += " ";
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  // print second spaces
  for (let j = 1; j < s - i + 1; j++) {
    str += " ";
  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  str += "\n";
}
// lower part
// inverted pyramid
for (let i = s; i > 0; i--) {
  for (let j = 0; j < s - i; j++) {
    str += " ";
  }
  for (let j = 1; j < i * 2; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

/**

 ***   ***
***** *****
***********
 *********
  *******
   *****
    ***
     *

 */
