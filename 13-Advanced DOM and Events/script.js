'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
//remember node list is not an array but it still does have default forEach method so it doesn't have most of the methods that arrays have but forEach is one of the methods that a node list has as well

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////
//186:- Selecting, Creating and Deleting elements:

//Selecting Elements:-
console.log(document.documentElement);
//selecting the entire document of a webpage, so just document above is not enough to select the document element because this is not the real DOM element so for ex: if we want to apply CSS styles to the entire page we always need to select document element

//selecting head and the body
console.log(document.head);
console.log(document.body);
//for these special elements we don't even need to write any selector otherwise we can also use querySelecotr:
console.log(document.querySelector('.header'));
//and this wil return the first element that matches the above selector

//to select multiple elements:
const allSections = document.querySelectorAll('.section');
console.log(allSections);

//to select through id:
console.log(document.getElementById('section--1'));

//Get elements by tage name:
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
//this method actually returns an html collection so that's different from a node list because an html collection is actually so-called live collection and that means that if the DOM changes then this collection is also immediately updated automatically so for ex: if we delete one button element from then that element would also get removed from the allButtons but the same does not happen with the nodelist, it doesn't get updated

//Get elements by class name:
console.log(document.getElementsByClassName('btn'));
//this one also returns the html collection

//Creating and Inserting Elements:-
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';
//this will return a dom element that we can save somewhere now this element is not yet anywhere in our DOM all this is a dom object that we can now use to do something on it but it is not yet in the dom itself so it's nowhere to be found in our webpage, if we want it on the page then we need to manually insert it to the page:
//Inserting Element:
const header = document.querySelector('.header');
header.prepend(message);
//now the message is really in our dom, we just inserted this element into our html so right into our dom so prepending basically adds the element as the first child of the parent element but we can also add it as the last child:

header.append(message);
//now what we see here is that the element was actually only insert at once, that's because message element is now indeed a live element living in the dom and so therefore it cannot be at multiple palces at the same time, it's just like a person that also cannot be at two place simultaneously

//but now what if we actually wanted to insert multiple copies of the same element?
//well in that case we actually would have to first copy the first element:
// header.append(message.cloneNode(true));
//here the true means all the child elements will also be copied

//Two more methods to insert element:
header.before(message);
//this one will insert a message element before the header element

header.after(message);
//this one will insert a message element after the header element

//Delete Elements:-
//as we click the cookie the button, remove the message element:
