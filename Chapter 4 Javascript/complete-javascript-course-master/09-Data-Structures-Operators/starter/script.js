'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}.`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

//NESTED OBJECTS
// const { fri:{open,close} } = restaurant.openingHours;
// console.log(open, close);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary
// // secondary = temp
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(1,2)
// console.log(`My starter will be ${starter}. And i would like the ${mainCourse} as my main course. Thank you.`);
//  //NESTED DESTRUCTURING
// const nested = [2,4,[5,6]];
// console.log(nested[2]);

// const [x,y,[j,k]]= nested;
// console.log(j);

//DEFAULT VALUES

// const [p,q,r] = [4,5]; //4 5 undefined
// const [p=1,q=1,r=1] = [4,5]; //4 5 1

// console.log(p,q,r);

//DESTRUCTURE OBJECTS

// const {
//   name: resturantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(resturantName, hours, tags);

// //DEFAULT VALUES
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// //MUTATING VARIABLES
// let a = 111;
// let b = 999;
// console.log(a, b);

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// console.log(a, b);
