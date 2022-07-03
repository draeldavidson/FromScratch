//Control Flow 
console.log("Statements are executed from top to bottom");
console.log();

console.log("prompt() holds a funtion that asks for user input");
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)){
  console.log("Your number is "+ theNumber);
  }else{
    console.log("Dude I asked for a number!");
}

console.log("the if keyword says that we want some code to be run as long as a condition is met");
if (1+1==2) console.log("This is true");


console.log("you can make multiple if statements"); 
// let num =  Number(prompt("Pick a number"));

if ( theNumber < 10){
  console.log("small");
} else if ( theNumber < 100){
  console.log("Medium");
} else {
  console.log("LARGE");

}

console.log("you can iterate through the numbers to count up"); 

let number = 0;
while (number <= theNumber){
console.log(number);
number++;
}

console.log("find the number to the power of the number"); 

let result;
let counter= 0;
while (counter < theNumber){
  result = theNumber * theNumber;
  counter++
}
console.log(result);


let yourName;
// do while statements combo defines a code block to be executed once, and repeated as long as a condition is true
do{
  yourName = prompt("Who are you?");
}while (!yourName);
console.log(yourName);

//THIS DOES NOT WORK RIGHT 
let booleanStatement = Boolean (prompt("Give me a booolean statemtent"))

console.log(booleanStatement);

if(booleanStatement = false){
  console.log("Yup thats false");
}else if (booleanStatement = true){
  console.log("That's so true");
}else{
  console.log("Okay don't give me a boolean statement!");
}


let forLoop = 1;
//in the (initializes the loop, cheecks whether the loop should continue, updates after each iteration) 
for(let counter=0; counter<10; counter=counter+1){
  forLoop=forLoop*2;
}
console.log(forLoop);

//the break keyword has the effect to jump out of the loop.
for(let current = 20; ; current++){
  if (current % 7 ==0){
    console.log(current);
    break;
  }
}

for(let x=0; x<=10; x++){
  if (x==5){
    //The continue keyword will skip and continue the loop
    continue;
  }
  console.log(x);

}
