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
//188:- Implementing smooth scrolling:
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  //Get coordinates of the element that we want to scroll to
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  /*
  x=left: measured from the left--> dist. between the element and the left side of the viewport
  y=top: measured form the top--> dist. between the element and the top of the viewport 

  1. when we scroll x and y changes
  2. boundingClientRect is relative to the visible viewport
  */
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  //y coordinate here: is the dist between the current top position of the viewport and at the top of the page
  console.log(
    'Current height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling:
  //traditional
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  ///here we added pageXoffset and pageYoffset because you will get the result correct if you are scrolling from the top of the web page but you are scrolling from little below then it won't get scrolled way to the section1, it is because
  //before scroll: x=0 and y=744--> total dist. between section top and web top
  //--> current top viewport position from section: 744

  //little scroll: x=0 and y=444--> total dist. between section top and viewport top
  //--> current top viewport position: 444

  //now when we scrollTo for 444px then it would get scrolled from web top to somewhere in the middle 444px distance

  //that's why we need to give total distance for all scenarios i.e:
  //top page dist to the current viewport top dist+ current viewport dist to the element dist
  //i.e. 444+300

  //modern
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//LECTURES:-
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
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
    //here we don't have to select the message element again because we already have it in memory so there's no need to run document.queryselector, ofcourse we could do it and it would work as well so we could select the element with the class of cookie-message but again that's no necessary becasue we already have it stored in memory

    //old way:
    // message.parentElement.removeChild(message);
  });

//This way of moving up and down in the DOM tree like selecting the parent element is called DOM traversing.

//////////////////////////////////////////////////
//187:- Manipulating: Styles, Attributes and Classes:-

//Styles:
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
//thse styles are actually set as inline styles, so styles set here directly in the dom

console.log(message.style.height);
//empty script in console
console.log(message.style.backgroundColor);
//it only works for inline styles that we set ourselves also using the style property

//we can still get styles if we really need it:
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
//this will give you the style even if we haven't declared it in the CSS

//let's say we wanted to increase the height of the message banner by 40 pixels:
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(message.style.height);

//Manipulating root CSS styles:
document.documentElement.style.setProperty('--color-primary', 'orangered');
//we can also use setProperty to manipulate element styles too

//Attributes:-
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
//here in the console the URL is different than the src in the html, because the src in the console is an absolute URL while in the html it is just a relative URL, relative to the folder in which index.html file is located and if we want to get the html URL than we will be needing to use getAttribute
console.log(logo.className);
//so this works because on images they are supposed to have the alt, and the src attributes on them and so we specify them on the html then javascirpt will atutomatically create these properties on the object but if we add some other property that is not a standard then javascript will not automatically create a property on the object
//so let's add on the nav image for ex: designer property set it to 'Jonas':
console.log(logo.designer);
//now here we get undefined and again that is because this is not a standard property that is expected to be on images but there is another way of reading this value from the dom
console.log(logo.getAttribute('designer'));
console.log(logo.getAttribute('src'));

//Now just as we can read these values for these attributes, we can also set them:
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

logo.setAttribute('company', 'Bankist');

//Another example of absolute and relative links:
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributs:-
//let's add data-version-number attribute to nav logo:
console.log(logo.dataset.versionNumber);
//here we use camelcase versionNumber while in the html we used dash, so these special attributes are always stored in the dataset object. We use data attributes quite a lot when we work with the UI and especially when we need to store data in user interface

//Classes:-
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c', 'j');
logo.classList.contains('c', 'j');

//We can also set a class:
//Don't use this:
logo.className = 'jonas';
//becasue this will overwrite all the existing classes and also it allows us to only put one class on any elment

//////////////////////////////////////////////////
//189:- Types of Events and Event Handlers:-
