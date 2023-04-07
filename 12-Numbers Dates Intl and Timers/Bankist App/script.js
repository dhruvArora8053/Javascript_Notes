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
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //.textContent=0
  //it will remove the inner html of the element, and innerHTML is a bit simlilar to textContent but now the difference is that textContent simply returns the text itself while HTML returns everything including the HTML so all the html tags will be included

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  //here we used slice so that we can do the changes on the copied array not on the original array

  movs.forEach(function (mov, i) {
    //now we have to essentially create an HTML that looks like movement row in the DOM:
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
     <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
     <div class="movements__value">${mov.toFixed(2)}€</div>
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
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  //in each deposit bank gives 1.2% interest fo the deposited amount: and note bank only pays the interest if the interest amount is atleast one euro:
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

//Implementing login:
let currentAccount;
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

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    //Clear cursor
    inputLoginPin.blur();

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

    //Update UI
    updateUI(currentAccount);
  }
});

//Implementing Loan:
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  //Math.floor does type coercion itself so we don't have to convert it to number

  //bank only grants a loan if there is atleast one deposit with atleast 10% of the requested loan amount
  const above10 = currentAccount.movements.some(
    mov => mov >= (amount * 10) / 100
  );

  if (amount > 0 && above10) {
    currentAccount.movements.push(amount);
  }

  updateUI(currentAccount);

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
  displayMovements(currentAccount.movements, !sorted);
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

