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
  //Now their are two ways of handling rejections:

  //a. the first one is to pass a second callback function into the then method:
  //so the first callback function here is always gonna be called for the fulfilled promise so for a successful one but we can also pass in a second callback which will be called when the promise was rejected:
  //Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json()
      // ,err => alert(err)
      //now we lose the connection and now we do the request and so now actually we handled the error by displaying this alert window and the second one error that we saw previously is now gone so now infact we no longer have this uncaught error in a console because we did actually catch the error right above so handling the error is also called catching the error
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;
      //now in this case their are then no more errors because basically the chain stops above when that error happens and when it's handled right above but now what if their was actually no error in above fetch promise so basically what if above fetch promise was actually fulfilled but the second one below was rejected

      //well then we would also have to catch an error below same like we did for the above:
      //Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      response => response.json()
      //  ,err => alert(err)
    )
    //b. however this process is a little bit annoying and so infact there is a better way of basically handling all these errors globally just in one central place so instead of all of this callback function here we can handle all the errors no matter where they appear in the chain right at the end of the chain by adding a catch method:
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      //usually simply logging the error to the console is not enough in a real application with a real user interface and so instead of just logging something to the console let's also display and error message for the use to see:
      console.error(`${err} ⬇️⬇️⬇️`);

      //and actually above 'err' that is generate here is a real javascript object so we can create errors in javascript with a constructor for ex just like a map or a set and any error in javascript that was created like this contains the message property so we can use that here to basically only print the message of that error and not the whole object itself
      renderError(`Something went wrong ⬇️⬇️⬇️ ${err.message}. Try Again!`);
      //and indeed we get our custom error down in a console with emojis and then our owm message in the UI.

      //Their is one more quick method that is also available on all promises so besides then and catch there is also the 'finally' method so let's add a finally here:
    })
    .finally(() => {
      //the callback function that we defined here will always be called whatever happens with the promise so no matter if the promise is fulfilled or rejected this callback function that we defined above is gonna be called always so that's the between the other two so the then method is only called when the promise if fulfilled while err one is only called when the promise is rejected.
      //now the finally mehtod is not always useful but sometimes it actually is so we use this method for something that always needs to happen no matter the result of the promise and one good example of that is to hide a loading spinner like the rotating circle that we see everywhere in web applications whey we load some data so these applications show a spinner when an asynchronous operations starts and then hide it once the operation completes and that happens no matter if the operation was successfull or not and so for that the finally method is perfect
      //and in our case what we always need to do is to fade-in the container, so this part always happens no matter what so no matter if we render the country in the case of success or if we render the error in case of an error no matter what we need to do that and so let's deactive that process from functions and paste it here:
      countriesContainer.style.opacity = 1;
      //just notice that this actually works because catch itself also returns a promise so that's the only why this is working s
    });

  //so again this catch method here at the end of the chain will basically catch any errors that occur in any place in above whole 4 promise chain and no matter where that is so errors basically propagate down the chain until they are caught and only if they're not caught anywhere then we get that uncaught error that we saw right in the beginning
};

///////////
//Start from here:-
//1. In this section, let's talk about how to handle errors in promises:
//and to start remember that a promise in which an error happens is a rejected promise and so in this section we're gonna see how to handle promise rejections now actually the only way in which the fetch promise rejects is when the user loses his internet connection and so for now that's gonna be the only error that we will handle here

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
//Put the network offline then click the button:-
//now when we clicked the button then we got these two errors in a console but second one is the most important 'we now have an uncaught promise' because we have failed to fetch and so at this point for the first time the promise that's returned from the fetch function was actually rejected and so let's now handle this rejection, go above into getCountryData() function

//Not let's try to simulate another error, so let's say we're trying to search for a country that simply doesn't exist and so our API is not gonna find any result for that:
// getCountryData('dfjkls');
//well now we get this wierd error in the UI, let's handle it on the next section

