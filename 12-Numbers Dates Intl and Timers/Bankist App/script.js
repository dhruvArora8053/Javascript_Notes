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

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-04-06T17:01:17.194Z',
    '2023-04-07T23:36:17.929Z',
    '2023-04-08T10:51:36.790Z',
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
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
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

const accounts = [account1, account2, account3, account4];

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

//Now we could simply start writing our code out here in the global context however, that is not a good practice so whenever we do something like creating a feature, it's always best to create a function:

const formatMovementDate = function (date, locale) {
  const calcdaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcdaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0); //zero based
    console.log(month);
    // const year = date.getFullYear();

    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
    //in this case we don't want any options object because here we don't need the hours or the minutes all we want is to simply display the date as simple as possible and in that case we don't even need any options
  }
};

// //Internationalizing Dates API:-
// const now = new Date();

// //we need to pass inside the Intl.DateTimeFormat function is a so called locale string and this locale is usually the 'language and then dash the country' after passing the locale string all of this will create the so-called formatter for the particular language and the country so all of this create a new formatter and then on that formatter we can call .format and then here we actually pass in the date that we want to format
// labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now); //As of 4/9/2023
// //now you see the date is actually formatted just like it usually formatted in the US with the month first and then the day, let's try UK:
// labelDate.textContent = new Intl.DateTimeFormat('en-UK').format(now); //As of 09/04/2023
// //now you see date formatting is different, so we have the day first then the month and it also has leading zero, let's try arabic for syria:
// labelDate.textContent = new Intl.DateTimeFormat('ar-SY').format(now); //As of ٩/٤/٢٠٢٣

// //And to get these different codes: Google, ISO language code table: lingoes.net

// //We can actually take it to the next level and add some options to also customize these dates a little bit:
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: '2-digit',
//   weekday: 'short',
// };

// labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);

// //now let's see for portugal:
// labelDate.textContent = new Intl.DateTimeFormat('pt-PT', options).format(now);

// //let's get locality from the user's browser:
// const locale = navigator.language;
// console.log(locale);

//Note:- Check Intl API for other operations in MDN Documentation

// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

//Formatting Currency:-
const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  //.textContent=0
  //it will remove the inner html of the element, and innerHTML is a bit simlilar to textContent but now the difference is that textContent simply returns the text itself while HTML returns everything including the HTML so all the html tags will be included

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  //here we used slice so that we can do the changes on the copied array not on the original array

  movs.forEach(function (mov, i) {
    //now we have to essentially create an HTML that looks like movement row in the DOM:
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //looping over two arrays at the same time: so we called the foreach method on one of them i.e. movements and then we use the current index to also get the data from some other array:
    const date = new Date(acc.movementsDates[i]);

    //acc.movements[i] is gonna be a nicely formatted time string and we can use that string to create a new date object and we need that object so that then from there we can call our usual methods to get the date, month and a year so that's the reason why we need to convert these strings back into a javascript object because only then we can actually work with that data

    const displayDate = formatMovementDate(date, acc.locale);

    //Implementing Currency:
    // const formattedMov = new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(mov);

    const formattedMov = formatCurrency(mov, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
     <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
     <div class="movements__value">${formattedMov}</div>
  </div>
  `;
    //now we need to attach above html somehow into the movements container in our webpage: to do that we will use a method called insertAdjacentHTML:
    containerMovements.insertAdjacentHTML('afterbegin', html);
    //1. beforebegin
    //2. afterbegin: last in first out
    //3. beforeend:  last in last out
    //4. afterend
  });
};

// console.log(containerMovements.innerHTML);

//using reduce method to get the sum of movements:
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, m) => acc + m, 0);

  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  //in each deposit bank gives 1.2% interest fo the deposited amount: and note bank only pays the interest if the interest amount is atleast one euro:
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};

//Computing Usernames:
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    //we used here forEach because we do not want to return anything and save it on array instead we want to have some manipulation inside of these objects which you can also called side effects using forEach
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    //now the whole result is an array and on that array now we can call the join method
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Login to get started';
      clearTimeout(timer);
    } 
    --time;
  };

  let time = 10000;
  tick();

  timer = setInterval(tick, 1000);
  //here the problem with setInterval is it does not get called immediately, it takes time of one sec and then start  executing the callback function that's why we are seeing the wrong time for one sec.

  return timer;
};

//Implementing login:
let currentAccount, timer;
//Fake Always Logged In:-
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//day/month/year

//Event Handler
btnLogin.addEventListener('click', function (e) {
  console.log('login');
  //so what happened as we clicked the login button the whole page got refreshed and that's because this is the button in a form element and so in html the default behavior when we click the submit button if for the page to reload so we need to stop that from happening and for that we need give the callback function the even parameter:
  e.preventDefault();
  //this will now prevent this form from submitting
  //another thing that is great about forms when we click enter after filling the information in a field it automatically triggers the callback function
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Welcome message
    labelWelcome.textContent = `Welcome Back! ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current Date and Time:
    const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); //zero based
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: '2-digit',
      // weekday: 'short',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    //Clear cursor
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    //Update UI
    updateUI(currentAccount);
  }
});

//Implementing Transfers:
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const recieverAcc = inputTransferTo.value;
  const amount = Number(inputTransferAmount.value);
  const got = accounts.find(acc => acc.username === recieverAcc);

  //Clear input fields
  inputTransferTo.value = inputTransferAmount.value = '';

  //Clear cursor
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    got?.username !== currentAccount.username &&
    got
  ) {
    currentAccount.movements.push(-amount);
    got.movements.push(amount);

    //Add Transfer Date:
    currentAccount.movementsDates.push(new Date().toISOString());
    //here we are passing an date object itself, let's convert it into ISO string:
    got.movementsDates.push(new Date().toISOString());

    //Adding timer
    clearInterval(timer);
    timer = startLogOutTimer();

    //Update UI
    updateUI(currentAccount);

    //Note:- In the real world we would probably have an object for each movement and so that object then would contain the amount, tha date, and some other information about movement. And now we don't want to restructure the entire application at this point.
  }
});

//Implementing Loan:
btnLoan.addEventListener('click', function (e) {
  console.log(e);
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  //Math.floor does type coercion itself so we don't have to convert it to number

  //bank only grants a loan if there is atleast one deposit with atleast 10% of the requested loan amount
  const above10 = currentAccount.movements.some(
    mov => mov >= (amount * 10) / 100
  );

  if (amount > 0 && above10) {
    setTimeout(function () {
      currentAccount.movements.push(amount);

      //Add Transfer Date:
      currentAccount.movementsDates.push(new Date().toISOString());

      //Current Account Display:
      updateUI(currentAccount);

      //Adding Timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

//Implementing Deletion
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
  inputClosePin.blur();
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e);
  displayMovements(currentAccount, !sorted);
  console.log(sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//Remainder Operator: nth time
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
/////////////////////////////////////////////////
