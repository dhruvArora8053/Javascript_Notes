"use strict";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

//Create a Date:
const now = new Date();
console.log(now);

console.log(new Date("Apr 07 2023 22:14:37"));
console.log(new Date("December 24, 2015"));
//simply giving javascript a string here and it will then automatically parse the time based on that

//Creating Dates:-
console.log(account1.movementsDates[0]);
//and 'Z' at the last means the UTC so that's coordinated universal time which is basically the time without any time zone in London and also without daylight savings

//we can also pass in year, month, day, hour, minute or even second into the constructor:
console.log(new Date(2037, 10, 19, 15, 23, 5));
//here you might have noticed that here we have 10 but November is actually the mont 11 and so that means that the months in javascript are zero based

//AutoCorrect:
console.log(new Date(2037, 10, 31));
console.log(new Date(2037, 10, 33));
//so in month November their are only 30 days so javascript automatically moves date to 1-Dec

//Unix Time:- January 1, 1970
//we can also pass into the date constructor fucntion the amount of milliseconds passed since the beginning of the Unix time:
console.log(new Date(0));

//3 days from the unix time
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//These dates that we just created here are infact just another special type of object and so therefore they have their own methods just like arrays or maps or strings:
//we can use these methods to set or get comoponents of a date:
const future = new Date(2037, 10, 19, 15, 23, 44);
console.log(future);
console.log(future.getFullYear()); //always use getFullYear
console.log(future.getMonth()); //10
console.log(future.getDate()); //19
console.log(future.getDay()); //4, sun-->0
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //44

console.log(future.toISOString());
//this is a ISO string which follows some kind of international standard and maybe you notice that this is actually similar to the string that we used before coming from account1

//we can also get the timestamp for the date: and remeber that the timestamp is the milliseconds which have passed since Janauary 1, 1970:
console.log(future.getTime());
//and so we can see that this huge amount has passed since that date and now we can take this number and reverse this:
console.log(new Date(2142237224000));

//To get current timestamp:
console.log(Date.now());

future.setFullYear(2040);
console.log(future);
//now the 'future' date got mutated to Nov 19 2040
//and there also exists setMonth, setDate, and so on and so forth


