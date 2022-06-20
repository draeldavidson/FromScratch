'use strict';
//FUNCTION

const bookings = [];
const createBooking = function (
  //ES6
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //OLD WAY B4 ES6
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 3, 800);
// createBooking('LH123', undefined, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

const flight = 'LH123';
const drael = {
  name: 'Drael Davidson',
  passport: 23322423423421,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Ms. ' + passenger.name;

  if (passenger.passport === 23322423423421) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};

// checkIn(flight, drael);
// console.log(flight);
//name changes
// console.log(drael);

//NOTES
/**
 * pass by value JAVASCRIPT DOES NOT HAVE PASS BY REFERENCE.
 * you can store functions in a variable or properties
 * you can pass functions as arguments to other functions
 * you can return functions from other functions
 * and call methods on functions
 *
 * first class functions are just a concept
 * higher order functions are only possible by first class functions
 */

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//NOTES
//Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

//call back functions
const high5 = function () {
  console.log('👋 ');
};

// document.body.addEventListener('click', high5);
// ['Drael', 'Martha', 'Adem'].forEach(high5);

//NOTES
//returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}${name}`);
  };
};

// greet('Hello ')('you');

const greeterHey = greet('Hey ');
// greeterHey('Drael');
// greeterHey('sup');

//Coding Challenge //NOTES
//only Arrow Functions

//my attempt
const greet1 = greeting => {
  return name => {
    console.log(`${greeting}${name}`);
  };
};

//ANSWER ... i prefer curly braces easier to read.
const greet2 = greeting => name => console.log(`${greeting}${name}`);

// greet1('Hello ')('you');
// greet2('Yo ')('Drael');

//NOTES
//Call and Apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  /**previous way
  book: function () {
      
  },*/

  //NOTES
  //enhanced object literal way function inside an object
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on the ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(246, 'Drael');
// lufthansa.book(678, 'John Smith');
// console.log(lufthansa.bookings);

const erroWings = {
  airline: 'Errowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

//NOTES
//CALL METHOD
const book = lufthansa.book;

// book.call(erroWings, 23, 'Sarrah Williams');
// console.log(erroWings);

// book.call(lufthansa, 239, 'Mary Smith');
// console.log(lufthansa);

//NOTES
//APPLY METHOD NOT USED AS OFTEN

const flightData = [583, 'Drael Davidson'];
// book.apply(swiss, flightData);
// console.log(swiss);
// //THIS IS THE SAME AS APPLY
// book.call(swiss, ...flightData);

//BIND METHOD

const bookEW = book.bind(erroWings);
// bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(erroWings, 23);
// bookEW23('Drael Davidson');
// console.log(erroWings);

//with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

//Coding Challenge
//make the above into a function returning a function
const addTax2 = function (rate) {
  //   value + value * rate;
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax2(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

//How to run a function once
const runOnce = function () {
  console.log('This will never run again');
};
// runOnce() // this doesnt make it run only once

//Immediently invoked function expression IIFE for short
//   (function () {
//     console.log('This will never run again');
//   }
// )();

//arrow function
// (() => console.log('This will ALSO never run again'))();

//NOTES Scopes are a method of encapsulation which means everything inside is private.

//clousures is the closed over variable environment of the execution context in which a function was created, even after that execution context is gone.
//easier def gives a function access to all the variabled of its parent function even after that parent function has returned.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

// booker();
// booker();
// booker();
/**
1 passengers
2 passengers
3 passengers
 */
//Example 1
let f;

function g() {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
}

function h() {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
}

// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);

//example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} secconds`);
};

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

// boardPassengers(180,5);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'blue';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'pink';
  });
})();
