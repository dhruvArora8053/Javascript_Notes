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
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, m) => acc + m, 0);
  labelBalance.textContent = `${acc.balance}€`;
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
  const amount = Number(inputLoanAmount.value);

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

  sorted = !sorted;
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
// console.log(accounts);
//let's find object of jonas and save it into a jonas variable:
const jonas = accounts.find(account => account.owner === 'Jonas Schmedtmann');
// console.log(jonas);
//basically we use find method to find one element with it's unique property

//Flat method:
//let's say that the bank itself wants to calculate the overall balance of all the movements of all the accounts:
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

//let's unpack:
const allMovements = accountMovements.flat();
console.log(allMovements);

//let's sum:
const sum = allMovements.reduce((acc, mov) => acc + mov);
console.log(sum);

//let's chain:
const chain = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);

console.log(chain);

//flatMap method:
//it essentially combines a map and a flat method into just one method which is better for performance

const useflatMap = accounts.flatMap(acc => acc.movements);
console.log(useflatMap);
//remember, flatMap method only goes one level deep and we cannot change it so if you do need to go deeper than just one level you still need to use the flat method

//Creating and filling Arrays:
//remember a nodelist looks like an array but it is not an actual array so it cannot have methods like map, filter and etc.
//now let's say we do not have movements stored in accounts instead it is stored in UI and we have to take all those movements from the UI and calculate their sum:
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  //here we used Array.from() to create an array from the result of queryselectorAll() which is a nodelist which is not really an array but an array like structure and that array like can easily be converted to an array using Array.from() and then as a second step we even included a mapping function which then transforms that initialy array to an array exactly as we want it so basically converting the raw element to it's text content and replaceint the euro sign with nothing.
  console.log(movementsUI);

  //another way
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});

//Array Methods Practice:-

//1. Calculate how much has been deposited total in the bank:
const totalDepostit = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov);

console.log(totalDepostit);

//2. Calculate count how many deposits have there been in the bank with atleast $1000:
const atleast1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

console.log(atleast1000);

//same thing using reduce
const atleast1000s = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => (mov >= 1000 ? acc + 1 : acc), 0);
console.log(atleast1000s);

//3. Create an object which contains the sum of the deposits and of the withdrawals:
// We can also use reduce to return an array or object or etc.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, mov) => {
      // mov > 0 ? (acc.deposits += mov) : (acc.withdrawals += mov);
      acc[mov > 0 ? 'deposits' : 'withdrawals'] += mov;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

//4. Create a simple function to convert any string to a titlecase:
//this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['and', 'a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titlecase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');

//   const firstWord = capitalize(titlecase);

//   console.log(firstWord);
// };

// convertTitleCase('this is a nice title');
// convertTitleCase('this is a LONG title but not too long');
// convertTitleCase('and here is another title with an EXAMPLE');

//4. Create a simple function to convert any string to a titlecase:
//this is a nice title -> This Is a Nice Title

const convertTitleCase = function (str) {
  const capitalize = function (str) {
    return str.replace(str[0], str[0].toUpperCase());
  };

  const exceptions = ['and', 'a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = str
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  console.log(capitalize(titleCase));
};

convertTitleCase('this is a nice title');
convertTitleCase('this is a LONG title but not too long');
convertTitleCase('and here is another title with an EXAMPLE');
