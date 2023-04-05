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
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  //.textContent=0
  //it will remove the inner html of the element, and innerHTML is a bit simlilar to textContent but now the difference is that textContent simply returns the text itself while HTML returns everything including the HTML so all the html tags will be included

  movements.forEach(function (mov, i) {
    //now we have to essentially create an HTML that looks like movement row in the DOM:
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
     <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
     <div class="movements__value">${Math.abs(mov)}€</div>
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
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, m) => acc + m, 0);
  labelBalance.textContent = `${balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  //in each deposit bank gives 1.2% interest fo the deposited amount: and note bank only pays the interest if the interest amount is atleast one euro:
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = `${interest}€`;
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

    //Display Movements
    displayMovements(currentAccount.movements);

    //Display Balance
    calcDisplayBalance(currentAccount.movements);

    //Display Summary
    calcDisplaySummary(currentAccount);
  }
});

//Implementing Transfers:
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//find:-
console.log(accounts);
//let's find object of jonas and save it into a jonas variable:
const jonas = accounts.find(account => account.owner === 'Jonas Schmedtmann');
console.log(jonas);
//basically we use find method to find one element with it's unique property
