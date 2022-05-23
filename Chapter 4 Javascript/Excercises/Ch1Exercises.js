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

