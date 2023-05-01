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
  // countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      return;
      fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())

    .then(data => renderCountry(data[0], neighbour))
    .catch(err => {
      console.error(`${err} ⬇️⬇️⬇️`);

      renderError(`Something went wrong ⬇️⬇️⬇️ ${err}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
