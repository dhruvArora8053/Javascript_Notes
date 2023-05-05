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
//Start Here:-
// const whereAmI = async function (country) {
//   const response = await fetch(
//     `https://restcountries.com/v3.1/name/${country}`
//   );
//   //2. this here will return a promise and so in an async function like this one we can use the await keyword basically await for the resutlt of this promise so basically await will stop the code execution at this point of the function until the promise is fulfilled and so until the data has been fetched in this case, you might think isn't stopping the code means blocking the executon?
//   //no it won't because stopping exectution in an async fucntion which is what we have here is actually not a problem because this function is running asynchronously in the background and so therefore it is not blocking the main thread of execution so it's not blocking the call stack and infact that's what so special about async and await so it's a fact that it makes our code look like regular synchronous code while behind the scenes everything is infact asynchronous but anyway
//   //as soon as above promise is resolved then the value of this whole await expression that we have is gonna be the resolved value of the promise and so we can simply store that into a variable:
//   console.log(response);

//   //getting json
//   const data = await response.json(); //this itself returns a new promise
//   console.log(data);
//   renderCountry(data[0]);
// };
// whereAmI('portugal');
// console.log('First');
//3. even calling the function first we still going to have 'First' in a console first because above one is an async funciton and once the function is called it is then loaded off to the background and so above fetch will be running in the background whithout blocking our main thread

//4. before we had to mess with callback functions but also by consuming promises with the then method but now with async await that is just completely gone so this above function looks like normal synchronous code where we simply assign values to a variable and that makes it so much easier and more clean

//5. async and await infact are simply syntactic sugar over the then method in promises so ofcourse behing the scenes we are still using promises

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

//1. this function is now an asynchronous function so a function that will basically keep running in the background while performing the code that inside of it then when this function is done it automatically returns a promise
