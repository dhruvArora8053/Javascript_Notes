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

const getCountryData = function (country) {
  //Now their are two ways of handling rejections:

  //1. the first one is to pass a second callback function into the then method:
  //so the first callback function here is always gonna be called for the fulfilled promise so for a successful one but we can also pass in a second callback which will be called when the promise was rejected:
  //Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json(),
      err => alert(err)
      //now we lose the connection and now we do the request and so now actually we handled the error by displaying this alert window and the second one error that we saw previously is now gone so now infact we no longer have this uncaught error in a console because we did actually catch the error right above so handling the erro is also called catching the error
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;
      //now in this case their are then no more errors because basically the chain stops above when that error happens and when it's handled right above but now what if their was actually no error in above fetch promise so basically what if above fetch promise was actually fulfilled but the second one below was rejected

      //well then we would also have to catch an error below same like we did for the above:
      //Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then(
          response => response.json(),
          err => alert(err)
        )
        .then(data => renderCountry(data[0], neighbour));
    });
    //however this process is a little bit annoying
};

///////////
//Start from here:-
//In this section, let's talk about how to handle errors in promises:
//and to start remember that a promise in which an error happens is a rejected promise and so in this section we're gonna see how to handle promise rejections now actually the only way in which the fetch promise rejects is when the user loses his internet connection and so for now that's gonna be the only error that we will handle here

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
//Put the network offline then click the button:-
//now when we clicked the button then we got these two errors in a console but second one is the most important 'we now have an uncaught promise' because we have failed to fetch and so at this point for the first time the promise that's returned from the fetch function was actually rejected and so let's now handle this rejection, go above into getCountryData() function
