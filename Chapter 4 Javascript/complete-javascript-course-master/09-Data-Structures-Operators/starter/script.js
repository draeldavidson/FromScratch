'use strict';

// const { weekdays } = require("moment");

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
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}.`
    );
  },
  orderPasta: function (ingr1, ingr2, ingr3) {
    console.log(
      `Here is your delicious pasta with ${ingr1}, ${ingr2}, and ${ingr3}.`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//ITERATING THROUGH AN ARRAY
//1
const menu = [...restaurant.starterMenu, ... restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
  
}
//2
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
  
}
//3
for (const [item, entries] of menu.entries()) {
  console.log(`${item + 1}: ${entries}`);
  
}



//////////////// DESTRUCTURING //////////////////////
//SPREAD VS REST

//SPREAD on the RIGHT SIDE of =
// const arr = [1,2,...[3,4]];
// console.log(arr);

// //REST on the LEFT SIDE of =
// const [a,b, ...others]= [1,2,3,4,5];
// console.log(a,b, others);
// const welp = [a,b, ...others];
// console.log(...welp);
// //OBJECTS
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

//////////// Functions ///////////////
// can pass and array or just numbers.

// const add = function (...numbers) {
//   // console.log(...numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum+=numbers[i]
    
//   }
// console.log(sum);
// }

// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);
// const x = [23,5,7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

///////////////////////////////////
// const ingredients = [
//   prompt("let's make pasta! ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients);

//Object
// const newResturant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newResturant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Restoranti Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


//SPREAD OPERATOR
// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr);

// const newArr = [1,2,...arr];
// console.log(newArr);

// console.log(...newArr);

// the spread operator is similar to destructuring both help get elements out of an array.
//the big difference is that ...  takes all the elements from an array and doesnt create new variables
//we can only use it in places where we find values separated by commas.

//COPY ARRAY
// const mainMenuCopy = [...restaurant.mainMenu];

// console.log(mainMenuCopy);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects

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
