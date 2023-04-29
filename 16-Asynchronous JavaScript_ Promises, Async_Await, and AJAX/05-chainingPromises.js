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
//so just like before we fist get data about the country and so that's the pare that we already have here but then we also want to get the data about the neighbouring country and so again the second ajax call depends on the data from the first call and so they need to be done in sequence:
const getCountryData = function (country) {
  //Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      //Country 2
      fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    });
};

getCountryData('portugal');
