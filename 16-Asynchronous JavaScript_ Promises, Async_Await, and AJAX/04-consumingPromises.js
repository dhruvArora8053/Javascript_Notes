'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
        <p class="country__row"><span>💰</span>${data.currencies.name}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// //////////////////////////////////////////////////
// //Start from here:-
// // const request = new XMLHttpRequest();
// // request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
// // request.send();

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   //and as we alredy know calling the fetch function like this will then immdediately return a promise so as soon as we start the request and in the beginning this promise is ofcourse still pending because the asynchronous task of getting the data is still running in the background now ofcourse at a certain point the promise will then be settled and either in a fulfilled or in a rejected state but for now let's assume success so assume that promise will be fulfilled and that we have a value available to work with so to handle this fullfilled state we can use the then method that is available on all promises:

//   //now into the then method we need to pass a callback function that we want to be executed as soon as the promise is actually fulfilled so as soon as the result is available:
//   //now this callback function will actually recieve one argument once it's called by javascript and that argument is the resulting value of the fulfilled promise:
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// //first part here is pretty straight forward which is above fetch function returning a promise and then we handled that promise using the then method but then actually to read the data from the response we need to call the json method on that response object now this json method will itself return a promise and so if we then return that promise from the first then method then all this basically becomes a new promise itself and so since the first then method is itself a promise we can then again call the then method on it and so then again we have a callback and this time we get access to the data because the resolved value of the first promise is going to be the data itself

// getCountryData('portugal');

// Refactored:
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryData('portugal');

//Now you might be thinking, well we're still using callback here, right?
//and that is actually true so promises do not get rid of callbacks but they do infact get rid of callback hell


