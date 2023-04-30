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

//////////////////////////////////////////////////
//Start from here:-

//Actually we already have a small chain of promises because of below json function so these below two thens called in sequence are basically already a small chain but anyway we will now take chaining to a new level and actually chain together two sequenctial ajax calls:
//so just like before we fist get data about the country and so that's the part that we already have here but then we also want to get the data about the neighbouring country and so again the second ajax call depends on the data from the first call and so they need to be done in sequence:
const getCountryData = function (country) {
  //Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      //Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0], neighbour));
      //by returning this above promise here then the fulfilled value of the next then method will be a fulfilled value of this previous promise, it's a little confusing but what you need to understand is above then method return a new promise and here then we can one more time handle the success value of that promise and now we are calling then method above again so one more we are calling it callback function parameter response because above we are dealing with the fulfilled value of a fetch promise and that is a response

      // return 23;
    });
  // .then(data => alert(data));
  //in the last section we actually oversimplified how things really work so actually the then method always returns a promise no matter if we actually return anything or not but if we do return a value then that value will become the fulfillment value of the returned promise, here we above returned 23 and on chained then method it became the fulfilled value of the returned promise
};

getCountryData('portugal');

//So right we have above 4 steps using then but ofcourse we could extend this as much as we want so even if we wanted the neighbour of neighbour of the neighbour like 10 countries we could easily do this by chaining all these promises one after another and all without the callback hell
