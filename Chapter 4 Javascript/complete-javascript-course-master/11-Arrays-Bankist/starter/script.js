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
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
// console.log( containerMovements.innerHTML);

// const user = 'Steven Thomas Williams';
// const username = user.toLowerCase().split(' ').map((name)=>name[0]).join('');
// console.log(username);

// SHOW BALANCE
const calcDisplayBalance = function (movements) {
  const total = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${total}€`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcome = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);

//CREATE USERNAME
const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

//EVENT HANDLER

let currentAccount;

btnLogin.addEventListener('click', function(event){
  event.preventDefault();

  // console.log('LOGIN');
  currentAccount = accounts.find(acc=> acc.username === inputLoginUsername.value)
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split (' ')[0]}`
    // display movements
    //display balance
    //display summary

  console.log('LOGIN');
    
  }
})


// console.log(accounts);

/////////////////////////////////////////////////

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
  if (acc.owner === 'Drael Davidson' ) {
    // console.log(acc); 
  }
}





















