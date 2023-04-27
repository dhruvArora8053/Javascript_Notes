'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////////////////
//AJAX calls:

//traditional way:
const request = new XMLHttpRequest();
//this is a old sochool way of doing AJAX in javascript but we still showing it for 2 reasons:
//1. xml http request exists because you might need it in the future
//2. we want to show you how ajax calls used to be handled with events and callback functions

//next we need the url to which we will make the ajax call:
request.open('GET', 'https://restcountries.com/v3.1/name/india');
//1st argument: type of request
//2nd argument: url to which that ajax call should be made

//with above we basically opened the request and now next we need to also send it: 
request.send();
//so this will now send off the request to the abouve url 

//now inorder to get the result we couldn't simply do something like this:
// const data= request.send();
//basically to set some variable to this result here and the reason why we cannot do this is because the result is simply not there yet so this ajax call that we just send off here is being done in the background while the rest of the code keep running and so this is the ansynchronous non-blocking behavior that we talked about

//so instead what we need to do is to register a callback on the request object for the load event:


