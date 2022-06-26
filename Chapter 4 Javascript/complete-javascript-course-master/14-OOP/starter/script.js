'use strict';

//////////////////////////////////////////////////////////////////////////////////////////////
//                            OBJECT ORIENTED PROGRAMING                                   //
/////////////////////////////////////////////////////////////////////////////////////////////
console.log('LECTURE');

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

// console.log(drael);
/**
 * Person { firstName: 'Drael', birthYear: 1992
 */

const matilda = new Person('Matilda', 2002);
// console.log(matilda);

// ⬇ checks if it is the instance of a constructor ⬇
// console.log(matilda instanceof Person);

///////////////////////////////////////////////
//☁️               PROTOTYPES                //
//////////////////////////////////////////////

// ⬇ now the constructor includes the calcAge function ⬇
// console.log(Person.prototype);
Person.prototype.calcAge = function () {
  // console.log(2022 - this.birthYear);
};

drael.calcAge();

///////////////////////////////////////////////
//☁️        PROTOTYPAL INHERITANCE           //
//////////////////////////////////////////////

//INSTANCES WILL INHERITE PROTOTYPES FROM THE CONSTRUCTOR
//THIS IS PART OF THE PROTOTYPE CHAIN

//METHODS

// console.log(Person.prototype.isPrototypeOf(drael));
// console.log(drael.hasOwnProperty('firstName'));
// console.log(drael.__proto__);
//Object.prototype is the top of the protptype chain
// console.log(drael.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

//PROTOTYPES IN ARRAYS

const arr = [3, 1, 2, 5];
//SHOWS ALL THE METHODS THAT THE ARRY INHERITS FROM THE PARENT ARRAY
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

//PROTOTYPES ON FUNCTIONS
// console.dir(x => x + 1);

///////////////////////////////////////////////
//☁️             ES6 CLASSES                 //
//////////////////////////////////////////////

//class expression
// const PersonCl = class{}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // INSTANCE METHODS
  // ⬇ just like creating a function outside of the constructor. ⬇
  calcAge1 = function () {
    console.log(2022 - this.birthYear);
  };
  //GETTERS AND SETTERS IN CLASSES

  get age() {
    return 2022 - this.birthYear;
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  //SETTING A PROPERTY THAT ALREADY EXISTS
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      console.log(`${name} is not a full name!`);
    }
  }
  get fullName() {
    return this._fullName;
  }

  //STATIC METHODS NOT AVAILIBLE ON INSTANCES
  static hey() {
    console.log('Hey there 👋🏽');
  }
}
/**
 *YOU CAN ALSO CREATE A PROTOTYPE WITH THE CLASS 
 THIS WORKS THE SAME WAY
 PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
 }
 */
const jessica = new PersonCl('Jessica Davis', 1996);
// const drael1 = new PersonCl('drael', 1992);

// console.log(jessica);
// console.log(drael1); // undefined
// console.log(jessica.fullName);
// console.log(drael.fullName);
// PersonCl.hey()

// jessica.calcAge1();
// console.log(jessica.age)
// jessica.greet();

// NOTES ON CLASSES
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

///////////////////////////////////////////////
//☁️        GETTERS AND SETTERS              //
//////////////////////////////////////////////

//GETTERS AND SETTERS IN OBJECTS
const account = {
  owner: 'Drael',
  movements: [200, 530, 120, 300],

  get latest() {
    // return this.movements.slice(-1).pop();
    return `The last movement is: ${this.movements.slice(-1).pop()}`;
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
// //using the getter
// console.log(account);
// console.log(account.movements);
// console.log(account.latest);

// //using the setter
// account.latest = 50;
// console.log(account.movements);
// console.log(account.latest);

///////////////////////////////////////////////
//☁️           STATIC METHODS                //
//////////////////////////////////////////////

//CREATING ON THE CONSTRUCTOR

Person.hey = function () {
  console.log('Hey there 👋🏽');
};
// Person.hey()

// ⬇  THIS WILL NOT WORK STATIC METHODS DONT REACH INSTANCES  ⬇
// jessica.hey()

///////////////////////////////////////////////
//☁️           OBJECT.CREATE                 //
//////////////////////////////////////////////

const PersonProto = {
  calcAge2() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
// console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2000;
// steven.calcAge2()

const sara = Object.create(PersonProto);
sara.init('Sara', 1979);
// sara.calcAge2()

////////////////////////////////////////////////////
//☁️      INHERIANCE BTW CONTRUCTOR FUNCTIONS     //
///////////////////////////////////////////////////

const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person1.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
Person1.call(this, firstName, birthYear)
  this.course = course;
};

//LINKING PROTOTYPES
Student.prototype = Object.create(Person1.prototype)
// ⬇ Makes mike the prototype of Student not Person ⬇ 
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 1991, 'Computer Science');
// mike.introduce();
// mike.calcAge()

////////////////////////////////////////////////////
//☁️         INHERIANCE BTW CLASSES: ES6          //
///////////////////////////////////////////////////

class StudentCl extends PersonCl{
  constructor(fullName,birthYear,course){
    //NEEDS TO CALL THE PARENT CLASS FIRST
    super (fullName,birthYear)
    this.course= course
  }
  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new StudentCl('Martha Jones', 2002)
const martha2 = new StudentCl('Martha Jones', 2002,'Computer Science')

// console.log(martha);
// console.log(martha2);
// martha2.introduce()

////////////////////////////////////////////////////
//☁️         OBJECT.CREATE WITH CLASSEES          //
///////////////////////////////////////////////////

const PersonProto2 = {
  calcAge2() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto2);
StudentProto.init=function (firstName,birthYear,course) {
  PersonProto2.init.call(this,firstName,birthYear)
  this.course= course
}

StudentProto.introduce=function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);

}
const jay = Object.create(StudentProto);
jay.init('Jay',2000,"Stuff")
// jay.introduce()
// jay.calcAge2()


// console.log(jay);

////////////////////////////////////////////////////
//☁️            PRIVATE CLASS FEILDS              //
///////////////////////////////////////////////////


//PUBLIC FEILDS movements = [];

// YOU CAN PROTECT METHODS AND FIELDS THAT SHOULDNT BE ACCESSED OUTSIDE A CLASS
//BUT USING A _movements = []; BEFORE THE NAME

// MAKE PRIVATE METHODS #movements = []; # INFRONT

//ALSO THE STATIC KEYWORD

//TO CHAIN RETURN 'THIS' AT THE END OF A METHOD
