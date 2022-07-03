'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2021-07-11T23:36:17.929Z',
    '2021-07-12T10:51:36.790Z',
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-05-27T17:01:17.194Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2021-06-25T18:49:59.371Z',
    '2021-07-26T12:01:20.894Z',
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
  ],
  currency: 'EUR',
  locale: 'fr-FR',
};

const account3 = {
  owner: 'Drael Davidson',
  movements: [500, 300, -50, -90, -1210, -5000, 5500, -3, 4000],
  interestRate: 1.0,
  pin: 3333,

  movementsDates: [
    '2021-06-25T18:49:49.371Z',
    '2021-11-01T13:12:33.035Z',
    '2021-11-30T09:43:16.867Z',
    '2021-12-25T06:09:23.907Z',
    '2022-01-25T14:53:46.235Z',
    '2022-02-05T16:38:06.386Z',
    '2022-04-10T14:53:26.374Z',
    '2022-06-18T12:11:20.894Z',
    '2022-06-20T16:09:23.907Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

function formatCur(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function(){
  let time = 300;
  const tick = function(){
    const min = String(Math.trunc(time/60)).padStart(2,0);
    const sec = String(time%60).padStart(2,0)
  
  //set timer to 5 min
  //call timer every second

  //in each call print the remaining time to UI
labelTimer.textContent = `${min}:${sec}`;
//decrease 1 sec
// when time runs out stop timer and log out.
if (time === 0) {
  clearInterval(timer)
  containerApp.style.opacity = 0;
  
  labelWelcome.textContent = `Log in to get started`;
}
time--;  
}
tick();
const timer =setInterval(tick,1000); 
return timer;

}
///////////////////////////////////////

// Event handlers

let currentAccount, timer;

// NOTES FAKE ALWAYS LOGGED IN
// currentAccount = account3;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// btnLogin.addEventListener('click', function (e) {
//   // Prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === +inputLoginPin.value) {
//     // Display UI and message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.style.opacity = 100;

//     // const now = new Date();
//     // // labelDate.textContent = now;
//     // const day = `${now.getDate()}`.padStart(2, 0);
//     // const month = `${now.getMonth() + 1}`.padStart(2, 0);
//     // const year = now.getFullYear();
//     // const hour = now.getHours();
//     // const min = `${now.getMinutes()}`.padStart(2, 0);
//     // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
//     const options = {
//       hour: 'numeric',
//       minute: 'numeric',
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric',
//       weekday: 'long',
//     };
//     // const locale = navigator.language;
//     const locale = currentAccount.locale;

//     console.log(locale);

//     const now = new Date();
//     labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
//       now
//     );

//     // Clear input fields
//     inputLoginUsername.value = inputLoginPin.value = '';
//     inputLoginPin.blur();
//     if (timer)clearInterval(timer);

//     timer = startLogOutTimer()
//     // Update UI
//     updateUI(currentAccount);
//   }
// });

// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = +inputTransferAmount.value;
//   const receiverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value
//   );
//   inputTransferAmount.value = inputTransferTo.value = '';

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc?.username !== currentAccount.username
//   ) {
//     // Doing the transfer
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);

//     //ADD TRANSFER DATE
//     currentAccount.movementsDates.push(new Date().toISOString());
//     receiverAcc.movementsDates.push(new Date().toISOString());
//     // Update UI
//     updateUI(currentAccount);
//     clearInterval(timer);

//     timer = startLogOutTimer()

//   }
// });

// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();

//   const amount = Math.floor(inputLoanAmount.value);

//   if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
//     // Add movement
//     setTimeout(function () {
//       currentAccount.movements.push(amount);

//       //ADD TRANSFER DATE
//       currentAccount.movementsDates.push(new Date().toISOString());

//       // Update UI
//       updateUI(currentAccount);
//     }, 2500);
//   }
//   inputLoanAmount.value = '';
//   clearInterval(timer);

//   timer = startLogOutTimer()

// });

// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     +inputClosePin.value === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );
//     console.log(index);
//     // .indexOf(23)

//     // Delete account
//     accounts.splice(index, 1);

//     // Hide UI
//     containerApp.style.opacity = 0;
//   }

//   inputCloseUsername.value = inputClosePin.value = '';
// });

// let sorted = false;
// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// //  THESE ARE THE SAME
// console.log(Number('23'));
// console.log(+'23');

// //TO CHECK IF A NUMBER IS A NUMBER USE ISFINITE
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));

// //SQUARE ROOT
// console.log(Math.sqrt(25));
// //MAX
// console.log(Math.max(5, 18, 23, 11, 2));
// //MIN
// console.log(Math.min(5, 18, 23, 11, 2));
// //PI & HOW TO CALCULATE THE AREA OF A CIRCLE
// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// //RANDOM
// console.log(Math.trunc(Math.random() * 6 + 1));

// const randomizer = function (num) {
//   return Math.trunc(Math.random() * num + 1);
// };

// console.log(randomizer(100));

// const randomBtw = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomBtw(10, 20));

// //ROUNDING DECIMALS
// console.log((2.7).toFixed(0));
// console.log(Math.PI.toFixed(2));

//IS EVEN???
const isEven = num => num % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(9234));

//DATES
// const now = new Date();
// console.log(now);
// console.log(new Date('June 18, 1992'));

//Days past

const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// console.log(calcDaysPassed(new Date(2037,3,14), new Date(2037,3,4)));


const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  
  // day: 'numeric',
  // month: 'long',
  // year: 'numeric',
  // weekday: 'long',
};
setInterval(() => {
  const now = new Date();
  // console.log(new Intl.DateTimeFormat('en-US', options).format(now));
},60000);
// const locale = navigator.language;
// const locale = currentAccount.locale;

// console.log(locale);

// const now = new Date();
// console.log(new Intl.DateTimeFormat('en-US', options).format(now));
