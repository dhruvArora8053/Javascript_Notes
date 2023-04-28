'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////////////////
//Let's create a sequence of ajax calls so that the second one runs only after the first one has finished:

const renderCountry = function (data) {
  const html = `<article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();

  request.open('GET', 'https://restcountries.com/v3.1/name/portugal');

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render Country 1
    renderCountry(data);

    //Get Neighbour Country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX call country 2
    const request = new XMLHttpRequest();
    request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
    request.send();
  });
};

getCountryAndNeighbour('portugal');
