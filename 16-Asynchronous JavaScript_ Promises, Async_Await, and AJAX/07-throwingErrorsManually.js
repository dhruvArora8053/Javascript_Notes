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

//this helper function will wrap up the: fetch, error handling and conversion to json:
const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
};
//so now this function will return a promise and so this is then just like other promise that we can call here in our chain

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       //let's take a look at response object:
//       //ok: false, status: 404
//       //and the reason for the ok to false is ofcourse status code 404,
//       //now when the request goes well so that what would happen when we click the button, now:
//       //ok: true, status: 200
//       //so 200 literally stands for OK

//       //so we can now use the fact that above response has the ok property set to false to basically reject the promise ourselves manually so we can do that by creating a new error:
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       //so we create the new error by using the Error constructor function and then we pass in the message which is gonna be the error message then we use the throw keyword here which will immediately terminate the current function so just like return does it.
//       //now the effect of creating and throwing an error in any of these then methods is that the promise will immediately reject so basically the promise returned by this then handler here will be a rejected promise and that rejection will then propogate all the way down to the catch handler which we already set up below,
//       //so now the error message that we created here so that's 'country not found (404)' this is exactly the rejection that we created above by creating this new Error and so again any error that happens in any of the callback function here so in any then handler will immediately terminate that then handler and will propogate down to the catch method and then in there we handle that error so therefore that's why we then see the error displayed in the UI so that err.message is excactly the above message that we pass into the new Error and infact the same is true for any other error
//       //so before we had above new Error, the error that we saw was different one and that's because somewhere in the render country function we are trying to read the flag from the data that we recieved but the data that we recieved did not contain the flag and so that created that previous error and then that error cause the rejection of that promise which was then one more time handled in a catch method
//       //so again any error will cause any promise to reject but here above we aree simply creating our own error to basically reject the promise on purpose so that we can then handle that error down in the chain so in below catch method

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       //   const neighbour = data[0].borders?.[0];
//       //Now let's through an error on the neightbour:
//       const neighbour = 'dfkl';

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       //Breaking DRY:
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       //making a function, look above
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} ⬇️⬇️⬇️`);
//       renderError(`Something went wrong ⬇️⬇️⬇️ ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

///////////
//Start from here:-
// getCountryData('portugal');
//so here we are seeing the 404 error, the problem here is during the fetch there was a 404 error which is because our API couldn't find any country with above name but still even though there was obviously a big problem with this request but the fetch function still did not reject in this case and by the many people think that in this case the promise should actually be rejected right away but again it just doesn't and so we will have to do it manually, look above in the getCountryData()

///////Refactored Solution using getJSON function:
const getCountryData = function (country) {
  //Country 1
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not found '
  )
    .then(data => {
      renderCountry(data[0]);

      //   const neighbour = 'dfkl';
      const neighbour = data[0].borders?.[0];

      if (!neighbour) 
      //for now neighbour country ex: australia
      throw new Error('No neigbour found!');

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} ⬇️⬇️⬇️`);
      renderError(`Something went wrong ⬇️⬇️⬇️ ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
