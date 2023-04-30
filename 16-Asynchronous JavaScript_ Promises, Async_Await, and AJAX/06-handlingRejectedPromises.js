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
    });
};

/////////////////////////////////////////////////
//Start from here:-

//In this section, let's talk about how to handle errors in promises:
//and to start remember that a promise in which an error happens is a rejected promise and so in this section we're gonna see how to handle promise rejections now actually the only way in which the fetch promise rejects is when the user loses his internet connection and so for now that's gonna be the only error that we will handle here

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
