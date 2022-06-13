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
book.apply(swiss, flightData);
console.log(swiss);
//THIS IS THE SAME AS APPLY
book.call(swiss, ...flightData);

