'use strict';

navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
);
//this above code is showing a asynchronous behavior, so the code is not blocked which we can check here:
console.log('Getting position');
//so we have a console.log after the geolocation part here but still console.log got print first and so that's because navigator function above basically offloaded it's work to the background so to the web API environment in the browser and then immediately it move on right here to the console.log
//and so this is a another great opportunity to promisify a callback based API to a promise based API:
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       //success callback function: so when we have success we want to resolve the promise so we want to mark it as fulfilled and so therefore we call the resolve functio and we pass in that position object so in the last section we just passed a simple string into resolve because that would then be the resolved value of the promise so basically the future value of the promise but in this case it has position which is a more meaningful object which we actually need outside of the promise
//       position => resolve(position),

//       //reject callback function:  same with reject
//       err => reject(err)
//     );
//   });
// };
//let's make getPosition more simpler:
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
//if getCurrentPosition automatically call the position and err callbacks and if it automatically passes in the position and err, then we can simply do this:
// navigator.geolocation.getCurrentPosition(resolve, reject);
//so before we specified the callback manually but all we did was to take the position and pass then into resolve but here above that happens automatically so now resolve itself is the callback function which will get called with the position and same with the reject, so let's try this out:
getPosition()
  .then(pos => console.log(pos))
  .catch(err => console.log(err));
//so the promise was marked as successful by the resolve function and so therefore then here the pos callback was called in the then handler and so the position was passed in and here finally we logged it to the console

//now let's take it to the next level:
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
