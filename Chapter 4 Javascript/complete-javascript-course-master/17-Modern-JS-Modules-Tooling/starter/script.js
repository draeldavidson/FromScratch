//IMPORTING MODULE

import { addToCart, totalPrice } from "./shopingCart.js";
//You can import everything like this
// import * as ShopippingCart from './shopingCart.js'
console.log('Importing Module');

addToCart('bread', 5);
//TOP LEVEL AWAIT IN MODULES WILL LOAD BEFORE CONTINUING
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json()
// console.log(...data);