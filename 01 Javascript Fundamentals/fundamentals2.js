//////Strict Mode:-
//strict mode is a special mode that we can activate in javascript which makes it easier for us to write secure javascript code

"use strict";
//this statement basically has to be the very first statement in the script so if we have any code before this then strict mode will not be activated, comments are allowed because javascript will ignore them.

//strict mode makes it easier for us developers to avoid accidental errors so bascially it avoids us to introduce bugs in our code and that's because of two reasons:
//1. strict mode forbids us to do certain things
//2. it will actually create visible errors for us in certain situations in which without strict mode javascript will simply fail silently without letting us know that we did a mistake.

//Examples:-
let hasDriversLicense = false;
const passTest = true;

//if (passTest) hasDriverLicense = true; //introducing bug
if (hasDriversLicense) console.log("I can drive");
//if here strict mode was not added then we would never get an error of 'hasDriverLicense is not defined'

//now another thing that strict mode does is to introduce a short list of variable names that are reserved for features that might be added to the language a bit later. For Example:

//const interface = "Audio"; //output: unexpected strict mode reserved word
//const private = 534; //output: unexpected strict mode reserved word
//const if= 23 //output: unexpected toke 'if'

///////Function Declaration Vs Expression:
//dec: function age(par1, par2){}
//can call a function declaration before defining it

//exp: const age= function(par1, par2){}
//cannot call a function declaration before defining it

////////Arrow Functions:-
//const age= birthYear => 2037-birthYear;

//////Arrays:- 
//arrays are mutable so even with const you will still be able to manipulate elements but whi const you cannot change an entire array that would be illegal

//////Arrays Vs Object:-
//in arrays we can access element just through by order of elements 
//but in objects you can have different types of data in one strucutre like firsName, lastName, job, friends, sports and etc. with key value pairs.

//dot notation vs bracket notation:
//through bracket notation you can evaluate some expression inside brackets and eventually can come up with some value and can access element through it

//////Arrays Vs Object:-
//in arrays we can access element just through by order of elements 
//but in objects you can have different types of data in one strucutre like firsName, lastName, job, friends, sports and etc. with key value pairs.

//dot notation vs bracket notation:
//through bracket notation you can evaluate some expression inside brackets and eventually can come up with some value and can access element through it

///////Function Declaration Vs Expression:
//dec: function age(par1, par2){}
//can call a function declaration before defining it

//exp: const age= function(par1, par2){}
//cannot call a function declaration before defining it

////////Arrow Functions:-
//const age= birthYear => 2037-birthYear;

//////Arrays:- 
//arrays are mutable so even with const you will still be able to manipulate elements but whi const you cannot change an entire array that would be illegal