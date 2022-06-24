'use strict';
//////////////////////////////////////////////////////////////////////////////////////////////
//                            OBJECT ORIENTED PROGRAMING                                   //
/////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////
//☁️         CONSTRUCTOR FUNCTION            //
//////////////////////////////////////////////

//TRADITIONALLY STARTS WITH CAPITAL LETTTER

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never create a method inside a constructor function because then
  // each instance will carry copies of the methods instead use
  //Prototypes and prototype inheritance
  // this.calcAge = function () {
  //     console.log(2022 - this.birthYear);
  // }
};

// To call a constructor function we use the new keyword.
const drael = new Person('Drael', 1992);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(drael);
/**
 * Person { firstName: 'Drael', birthYear: 1992
 */

const matilda = new Person('Matilda', 2002);
console.log(matilda);

// ⬇ checks if it is the instance of a constructor ⬇
console.log(matilda instanceof Person);

///////////////////////////////////////////////
//☁️               PROTOTYPES                //
//////////////////////////////////////////////

// ⬇ now the constructor includes the calcAge function ⬇
console.log(Person.prototype); 
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

drael.calcAge();


