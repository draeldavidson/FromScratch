'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Drael Davidson',
  movements: [430, 1000, -500, 1700, -50, 90, 9957, -20],
  interestRate: 1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// console.log(accounts);
///////////////////////////////////////////////

// //DISPLAYS MOVEMENTS FUNCTION
// const displayMovements = function (movements, sort = false) {
//   containerMovements.innerHTML = '';
//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
//   movs.forEach((mov, i) => {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//       <div class="movements__value">${mov}€</div>
//     </div>
// `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };
// // displayMovements(account1.movements);
// // console.log( containerMovements.innerHTML);

// // const user = 'Steven Thomas Williams';
// // const username = user.toLowerCase().split(' ').map((name)=>name[0]).join('');
// // console.log(username);

// ///////////////////////////////////////////////

// // SHOW BALANCE FUNCTION
// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);

//   labelBalance.textContent = `${acc.balance}€`;
// };
// // calcDisplayBalance(account1.movements);
// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}€`;

//   const outcome = acc.movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(outcome)}€`;

//   const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => {
//       // console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };

// // calcDisplaySummary(account1.movements);

// ///////////////////////////////////////////////

// //CREATES USERNAME FUNCTION
// const createUsernames = function (accs) {
//   accs.forEach(acc => {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };

// createUsernames(accounts);

// const updateUI = function (acc) {
//   // display movements
//   displayMovements(acc.movements);

//   //display balance
//   calcDisplayBalance(acc);
//   //display summary
//   calcDisplaySummary(acc);
// };

// //EVENT HANDLERS BUTTONS
// ///////////////////////////////////////////////

// let currentAccount;
// //BUTTON LOGING IN FUNCTION
// btnLogin.addEventListener('click', function (event) {
//   event.preventDefault();

//   // console.log('LOGIN');
//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value.toLowerCase()
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     //display ui and welcome message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.style.opacity = 100;
//   }
//   //clear input fields
//   inputLoginUsername.value = inputLoginPin.value = '';
//   inputLoginPin.blur();

//   updateUI(currentAccount);
//   // console.log('LOGIN');
//   console.log(currentAccount?.balance);
// });
// ///////////////////////////////////////////////

// // BUTTON TRANSFERS MONEY TO ANOTHER ACCOUNT FUNCTION
// btnTransfer.addEventListener('click', function (event) {
//   event.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const reciverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value.toLowerCase()
//   );
//   console.log(amount, reciverAcc);

//   if (
//     amount > 0 &&
//     reciverAcc &&
//     currentAccount.balance >= amount &&
//     reciverAcc?.username !== currentAccount.username
//   ) {
//     //Do the transfer
//     currentAccount.movements.push(-amount);
//     reciverAcc.movements.push(amount);
//     updateUI(currentAccount);
//   } else {
//     console.log('TRANSFER NOT VALID');
//   }
//   inputTransferAmount.value = inputTransferTo.value = '';
//   inputTransferTo.blur();
// });

// ///////////////////////////////////////////////

// // BUTTON REQUEST LOAN FUNCTION
// btnLoan.addEventListener('click', function (event) {
//   event.preventDefault();

//   const amount = Number(inputLoanAmount.value);
//   if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
//     updateUI(currentAccount);
//     currentAccount.movements.push(amount);
//     console.log(`$${amount} Loan Approved`);
//   } else {
//     console.log(`$${amount} Loan DENIED`);
//   }
//   inputLoanAmount.value = '';
// });

// ///////////////////////////////////////////////

// //BUTTON CLOSES THE ACCOUNT FUNCTION
// btnClose.addEventListener('click', function (event) {
//   event.preventDefault();

//   if (
//     inputCloseUsername.value.toLowerCase() === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     console.log(`Bitch ${currentAccount.owner}'s Account Is Closed`);
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );
//     accounts.splice(index, 1);
//     console.log(accounts);
//     containerApp.style.opacity = 0;
//   }
//   inputCloseUsername.value = inputClosePin.value = '';
//   inputClosePin.blur();
//   labelWelcome.textContent = `Log in to get started`;
// });
// ///////////////////////////////////////////////

// //BUTTON SORT FUNCTION
// let sorted = false;
// btnSort.addEventListener('click', function (event) {
//   event.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });

/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
//Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE DOESNT CHANGE THE ARRAY JUST RETURNS A COPY
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2));
// console.log(arr.slice());
// console.log(...arr);

//SPLICE DOES MUTATE THE ORIGINAL ARRAY
// console.log(arr.splice(2));
arr.splice(-1);
// console.log(...arr);
arr.splice(1, 2);
// console.log(...arr);

//REVERSE MUTATES THE ORIGIANAL ARRAY
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'k', 'l', 'm', 'n'];
// console.log(arr2);
// console.log(arr2.reverse());
// console.log(arr2);



function reverseArr(arr) {
  let reverse = [ ];
  for(let i = arr.length-1; i >= 0; i--) {
      reverse.push(arr[i]);
  }
  return reverse;
}


console.log(reverseArr([3,5,7,8]));
 

//CONCAT
const letters = arr.concat(arr2);
// console.log(letters);
// console.log(...arr,...arr2);

//JOIN
// console.log(letters.join('-'));

//AT
arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr[arr.length-1]);
// console.log(arr.slice(-1));
// console.log(arr.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//LOOPING ARRAYS WITH FOR EACH()

/**
console.log(`------------------LOOPING ARRAYS----------------------`);
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log(`------------------LOOPING ARRAYS WITH FOR EACH()----------------------`);
movements.forEach((movement) => {
  if (movement > 0) {
    console.log((`You deposited`).padEnd(15) , movement);
  } else {
    console.log((`You withdrew`).padEnd(15) , Math.abs(movement));

  }

});

console.log(`--------------HOW TO ACCESS THE COUNTER?-----------------------`);

//HOW TO ACCESS THE COUNTER?

for (const [i,movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i+1}. You deposited ${movement}`); 
  } else {
    console.log(`${i+1}. You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`---------FOR EACH METHOD RETURNS THE ELEMENT, INDEX AND ENTIRE ARRAY ---------------`);
movements.forEach((movement, i,arr) => {
  if (movement > 0) {
    console.log((`${i+1}. You deposited`).padEnd(15) , movement);
  } else {
    console.log((`${i+1}. You withdrew`).padEnd(15) , Math.abs(movement));
  }

});
 */

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
/** 
console.log(`------------------FOR EACH() WITH MAPS----------------------`);

for (const [key, value] of currencies.entries()) {
  console.log(key, value);
}
console.log(`------------------------------------------------------`);
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});
console.log(`----------------------- AND SETS-------------------------------`);
//SET
const currenciesUnique = new Set([
  'USD',
  'United States dollar',
  'GBP',
  'Pound sterling',
  'EUR',
  'Euro',
  'USD',
]);
for (const currencies of currenciesUnique) {
  console.log(currencies);
}
console.log(`------------------------------------------------------`);

currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

function areDogs(juliaData, kateData) {
  // const newJuliaData = juliaData.slice(1, 3);
  const newJuliaData = juliaData.slice();
  newJuliaData.splice(0, 1);
  newJuliaData.splice(-2);

  // console.log(...newJuliaData);

  const allDogs = newJuliaData.concat(kateData);
  // console.log(...allDogs);

  allDogs.forEach((element, i) => {
    element >= 3
      ? console.log(
          `Dog number ${i + 1} is an adult, and is ${element} years old`
        )
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
}
// console.log(`-------------------TEST DATA 1------------------------`);
// areDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log(`--------------------TEST DATA 2------------------------`);

// areDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//MAP FILTER AND REDUCE

// console.log(`----------------MAP() METHOD----------------------`);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

//as an arrow function
const movementsArrow = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
// console.log(movementsDescriptions);

// console.log(`----------------FILTER() METHOD----------------------`);
const deposits = movements.filter(mov => mov > 0);

// console.log(movements);
// console.log(deposits);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

// console.log(withdrawals);

// console.log(`----------------REDUCE() METHOD----------------------`);
const total = movements.reduce(function (acc, cur, i, arr) {
  // console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
});
// console.log(`The total is ${total}`);

const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

// console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const humanAge = [5, 2, 4, 1, 15, 8, 3];
// const humanAge = [16, 6, 10, 5, 6, 1, 4];

// console.log('-----MAP-----');
const humanAges = humanAge.map(function (dogAge) {
  if (dogAge <= 2) {
    return 2 * dogAge;
  } else {
    return 16 + dogAge * 4;
  }
});

// console.log(humanAges);
// console.log('-----FILTER-----');

const adultDogs = humanAges.filter(dogs => dogs >= 18);
// console.log(adultDogs);
// console.log('-----REDUCE-----');

const calcAverageHumanAge =
  adultDogs.reduce((first, next) => first + next, 0) / adultDogs.length;

// console.log(calcAverageHumanAge);

//HOW TO MAKE IT A FUNCTION
const calcHumanAges = function (age) {
  const humanAges = age.map(dogAge => {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  console.log(`The dogs human ages are `, humanAges);

  const adultDogs = humanAges.filter(dogs => dogs >= 18);
  console.log(`The adult dogs are `, adultDogs);

  const calcAverageHumanAge =
    adultDogs.reduce((first, next) => first + next, 0) / adultDogs.length;

  console.log(`The average ages are `, calcAverageHumanAge);
};

// calcHumanAges([5, 2, 4, 1, 15, 8, 3]);
// calcHumanAges([16, 6, 10, 5, 6, 1, 4]);

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => mov * eurToUsd)
  .reduce((acc, mov, i, arr) => acc + mov, 0);

// console.log(totalDepositsUSD);

const calcHumanAges2 = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((first, next, i, arr) => first + next / arr.length, 0);

const test1 = calcHumanAges2([5, 2, 4, 1, 15, 8, 3]);
const test2 = calcHumanAges2([16, 6, 10, 5, 6, 1, 4]);

// console.log(test1, test2);

//FIND METHOD ONLY RETUNS THE ELEMENT ITSELF NOT AN ARRAY

const firstWithdrawl = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawl);

// const account = accounts.find(acc => acc.owner=== 'Jessica Davis')
// console.log(account);

// AS A FOR EACH
for (const acc of accounts) {
  if (acc.owner === 'Drael Davidson') {
    // console.log(acc);
  }
}

//SOME AND EVERY

// console.log(movements);
// //CHECKS EQUALITY
// console.log(movements.includes(-130));
// //CHECKS CONDITTION
// console.log(movements.some(mov=>mov >1500));
// //EVERY
// console.log(movements.every(mov=>mov>-0));

// //separate callback
// const deposit =  mov=> mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.includes(deposit));
// console.log(movements.filter(deposit));

//FLAT AND FLATMAP
// const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr1);
// //FLAT
// console.log(arr1.flat());
// //FLATDEEP
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));
// //MAP THEN FLAT
// const allAccounts = accounts.map(acc => acc.movements);
// console.log(allAccounts);

// const allMovements = allAccounts.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// const overalBalance2 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overalBalance2);
// //FLATMAP ONLY GOES ONE LEVEL DEEP
// const overalBalance3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overalBalance3);

//SORTING ARRAYS

// const owners = ['Drael', 'Zach', 'Adam', 'Martha'];
// console.log(owners);
// console.log(owners.sort());
// console.log(owners);

// //NUMBERS
// console.log(movements);
// // console.log(movements.sort());
// //ASCENDING ORDER
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// //SHORTER
// movements.sort((a, b) => a - b);

// console.log(movements);

// // DESCENDING ORDER
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// //SHORTER

// movements.sort((a, b) => b-a);

// console.log(movements);

//CREATING AND FILLING ARRAYS

// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// console.log(new Array(7));

// const x = new Array(7);
// console.log(x.map(() => 5)); // does nothing

// x.fill(1);
// x.fill(78, 3, 5);
// console.log(x);

// //ARRAY.FROM

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

///////////////////////////////////////
// Array Methods Practice

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// Prefixed ++ oeprator
let a = 10;
// console.log(++a);
// console.log(a);

// 3.
const { deposits2, withdrawals2 } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits2: 0, withdrawals2: 0 }
  );

// console.log(deposits2, withdrawals2);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  return capitzalize(titleCase);
};

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).


HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. 
//Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  // console.log(dog.recommendedFood);
});

// console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const dogSarah = dogs.find(dog=> dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(`Sarah's dog is eating ${dogSarah.curFood >dogSarah.recommendedFood ? 'much' : 'little'}`);



// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
let ownersEatTooMuch= []
let ownersEatTooLittle=[]
let justEnoughFood = []

dogs.forEach(dog => {
  if (dog.curFood > (dog.recommendedFood * 1.10)){
    ownersEatTooMuch.push(dog.owners)
  }else if (dog.curFood < (dog.recommendedFood * 0.90)){
    ownersEatTooLittle.push(dog.owners)
  }else if(dog.curFood > (dog.recommendedFood * 0.90)&&dog.curFood < (dog.recommendedFood * 1.10)){
justEnoughFood.push(dog.owners)
  }

});
// console.log(...ownersEatTooMuch.flat());
// console.log(...ownersEatTooLittle.flat());
// console.log(...justEnoughFood.flat());

const tooMuch = dogs.filter(dog=> dog.curFood >dog.recommendedFood).flatMap(dog=>dog.owners)
// console.log(tooMuch);
const tooLittle = dogs.filter(dog=> dog.curFood <dog.recommendedFood).flatMap(dog=>dog.owners)
// console.log(tooLittle);



// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
const owner= ownersEatTooMuch.flat()
// console.log(`${owner[0]} and ${owner[1]} and ${owner[2]}'s dogs eat too much!`);

// console.log(`${tooMuch.join(' and ')}'s dogs eat too much`);
// console.log(`${tooLittle.join(' and ')}'s dogs eat too little`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// console.log(movements.some(mov=>mov >1500));
// console.log(dogs.some(dog=>dog.curFood === (dog.recommendedFood * 0.90)));
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// console.log(dogs.some(dog=>dog.curFood > (dog.recommendedFood * 0.90)&&dog.curFood < (dog.recommendedFood * 1.10)));

const checkEatingOkay = dog=>dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
// console.log(dogs.some(checkEatingOkay))
// console.log(dogs.filter(checkEatingOkay))

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
let okayDog=[]
dogs.forEach(dog => {
  if (dogs.some(dog=>dog.curFood > (dog.recommendedFood * 0.90)&& dog.curFood < (dog.recommendedFood * 1.10))){
    okayDog.push(dog.owners)
  }

});
// console.log(okayDog);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

const dogsCopy = dogs.slice().sort((a,b) => a.recommendedFood - b.recommendedFood)
// console.log(dogsCopy);