'use strict';

try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  console.log(err.message);
}
//and you that the error now no longer appears down here in the console so the script does no longer die in this case and instead we can simply catch the error right here and then handle it accordingly

try {
  let y = 1;
  const x = 2;
  y = 3;
} catch (err) {
  console.log(err.message);
}
//now no error

//Let's now use try catch to actually handle real errors in async functions:
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
const whereAmI = async function (country) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    console.log(response);
    if (!response.ok) throw new Error('Problem getting location data');

    //getting json
    const data = await response.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    //here in this catch block we can now handle any errors just like we did before in the catch method:
    console.error(err.message);
    renderError(`Something went wrong 🛑 ${err.message}`);
  }
};

whereAmI('portugal');
