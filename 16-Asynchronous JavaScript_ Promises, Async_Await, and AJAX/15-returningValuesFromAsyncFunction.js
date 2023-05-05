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

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

//////////////////////////////////////////////////
//Start Here:-
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  //Geolocation
  const pos = await getPosition();
  console.log(pos);
  const { latitude: lat, longitude: lng } = pos.coords;

  //Reverse Geocoding
  const responseGeo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json`
  );

  const dataGeo = await responseGeo.json();
  console.log(dataGeo);

  //Country data
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}` //dataGeo.country
  );

  console.log(response);

  //getting json
  const data = await response.json(); //this
  console.log(data);
  renderCountry(data[0]);
};
whereAmI('portugal');
