'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////////////////
//Let's create a sequence of ajax calls so that the second one runs only after the first one has finished:

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

const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

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
    const request1 = new XMLHttpRequest();
    request1.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request1.send();
    //and so you're starting to see now that the second ajax call now in the way we are setting it up here is really dependent on the first one:

    request1.addEventListener('load', function () {
      const [data2] = JSON.parse(request1.responseText);
      console.log(data2);

      //Reneder country 2
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');
//so you see here we attach the first callback function and then inside of that we have yet another one so in other words here we have nested callbacks
//But now imagine we wanted to do more requests in sequence like the neighbour of the neighbour and like 10 times over so in that we would end up with callbacks inside of callbacks inside of callbacks like 10 times and actually for that kind of structure and for that kind of behavior we have a special name and this is the callback hell:
//so basically callback hell is when we have a lot of nested callbacks in order to execute ansynchronous tasks in sequence and infact this happens for all asynchronous tasks which are handled by callbacks and not just ajax calls, for ex:
setTimeout(() => {
  console.log('Sequence: 1');
  setTimeout(() => {
    console.log('Sequence: 2');
    setTimeout(() => {
      console.log('Sequence: 3');
      setTimeout(() => {
        console.log('Sequence: 4');
        setTimeout(() => {
          console.log('Sequence: 5');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
//now the problem with callback hell is that it makes our code look very messy but even more important it makes our code hard to maintain and very difficult to understand and to reason about and the code that is hard to understand and difficult to reason about will have more bugs and it's just worse code
//escaping callback hell through: promises
