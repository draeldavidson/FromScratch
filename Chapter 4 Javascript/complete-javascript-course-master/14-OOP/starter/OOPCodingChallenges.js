console.log('OOPCodingChallenges');

///////////////////////////////////////
// Coding Challenge #1

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property
// is the current speed of the car in km/h;
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log
//the new speed to the console;
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new
//speed to the console;
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake'
//multiple times on each of them.

const car1 = new Car('BMW', 120);
// console.log(car1);
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.accelerate();
// car1.brake();

const car2 = new Car('Mercedes', 95);
// console.log(car2);
// car2.accelerate();
// car2.brake();
// car2.accelerate();
// car2.accelerate();
// car2.brake();

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀

///////////////////////////////////////
// Coding Challenge #2

// 1. Re-create challenge 1, but this time using an ES6 class;
class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
  get speedUS() {
    this.currentSpeed = this.speed / 1.6;
    return this.currentSpeed;
  }
  // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h
  // before storing the value, by multiplying the input by 1.6);
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀

const ford = new CarClass('Ford', 120);
// console.log(ford);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

///////////////////////////////////////
// Coding Challenge #3

// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car.
//Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);

const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
ElectricCar.prototype = Object.create(Car.prototype);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%.
//Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge = Number.parseInt(this.charge) - 1;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery'
//(charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀

const tesla = new ElectricCar('Tesla', 120, '23%');
// console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();

// tesla.chargeBattery('50%');
// console.log(tesla);

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// OG
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;

  }
  get speedUS() {
    this.currentSpeed = this.speed / 1.6;
    return this.currentSpeed;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}


///////////////////////////////////////////////////////////////////
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
// console.log(rivian);
// rivian
//   .chargeBattery(90)
//   .accelerate()
//   .accelerate()
//   .brake()
//   .brake()
//   .brake()
//   .accelerate()
//   .accelerate()
//   .chargeBattery(18)
//   .accelerate()
//   .brake();
// console.log(rivian);
// console.log(rivian.speedUS);
