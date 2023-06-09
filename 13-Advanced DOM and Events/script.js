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
  console.log(e.target);
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
  //before scroll: x=0 and y=744--> total dist. between section top and web top(top viewoport)
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
//192:- Event delegation, Implementing Page Navigation:
//Without Event Delegation:
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('Link');

//     //implementing smooth scrolling
//     const id = this.getAttribute('href');
//     //href has the id of respective sections and we used getAttribute here to get relative html written(not the absolute link)
//     console.log(id);

//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//     //the exact string that we get from the href attribute is already the perfect selector, so we can just use this and this is a pretty common technique that we use for implementing a navigation like this so we put the id of the elements that we want to scroll to in the href attribute so that then in the javascript we can read that href and then we can select the element that we want to scroll to
//   });
// });
//so this mehtod worked beautifully for smooth scrolling, now as you see this works just fine but the problem is that it's not really efficient so we are adding here the exact same callback function, we are adding it once to each of these three elements. So the exact same function is now attached to these three elements and this kind of unnecessary, ofcourse it would be fine for three elements but what if we had 1000 or like 10,000 elements?
//If we were to attach an event handler to 10,000 elements like this then we would effectively be creating 10,000 copies of the same exact function and so that would certainly impact the performance and it's really just not a clean solution in that case. And so the better solution without a doubt is to use event delegation:

//So in event delegation we use the fact that events bubbles up and we do that by putting the event listener on a common parent of all the elements that we are interested in:
//so in our above example it's nav__links container that's around all of these 3 nav__link so we will put our event handler on nav__links element and then when a user clicks one of the links then the event is generated and bubbles up, and then we can basically catch that event in this common parent element and handle it there because we also know where the event actually originated:

//1. Add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  //figuring where the event happend
  // console.log(e.target);
  e.preventDefault();

  //Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    console.log('LINK');

    const id = e.target.getAttribute('href');
    // console.log(id);

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

//We successfully implemented event delegation which is lot better and a lot more efficient than simply attaching the same event handler to multiple elements instead, we simply edit one big event handler function to the parent element of all the elements that we're interested in and then we simply determined where the click event came from

/////////////////////////////////////////////////
//194:- Building a Tabbed Component:
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabs.forEach(tab => tab.addEventListener('click', () => console.log('TAB')));
//as we learned previously doing this is a bad practice because what if we had like 200 tabs then we would have 200 copies of above exact callback function and that would simply slow down the page so that's not at all desirable so let's use one more time event delegation:

//Remember for event delegation we need to attach the event handler on the common parent element of all the element that we're interested in:
tabsContainer.addEventListener('click', function (e) {
  //here on the tab we have two elements, button and it's child span element, so basically what we want is to get the button no matter if we click on the span or on the button itself so we need a way of selecting the parent element that is always a tab
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //now we always get the tab, because now it finds the closest parent with the class name operations__tab which indeed the button itself so the tab

  //But if we click on the tabs container we get the null and that's because null is the result of the closest method when there is no matching parent element to be found
  //so now we have to basically ignore any clicks that happen on that area:
  //Guard clause
  if (!clicked) return;
  //so basically what we're doing here is called a guard clause so it's basically an if statement which will return early if some condition is matched so in this case when there's nothing clicked then we want to immediately finsish this function

  //clearing all the tabs movement:
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

  //adding active to clicked tab
  clicked.classList.add('operations__tab--active');

  //Activate content area
  //now remember that the information about which content area should be displayed is in the clicked element data attribute
  console.log(clicked.dataset.tab);

  //clearing all the tabs content:
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////////////////////////////////////////////////
//195:- Passing arguments to Event Handlers:
//Menu Fade Animation:

//Event Delegation: remember this works because the target bubbles up
const nav = document.querySelector('.nav');

//we have already used the mouseenter event and mouseover is actually similar to mouseenter with the big difference that mouseenter does not bubble but here we need the event to actually bubble, their are also also kind of opposite events of mouseover and mouseenter and we use these bascially to undo what we do on the hover so the opp of mouseenter is mouseleave and opp of mouseover is mouseout
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    //so you see that this time around, we're not using the closest methods and that's because their are simply no child elements that we could accidently click here in this link
    const link = e.target;

    //selecting sibling elements
    //so basically selecting all the other links and remember that we can do that by going to the parent and then selecting the children from there no in this case the parent of nav__link is nav__item and the only thing that nav__item includes is always just one link so you see each of the link is actually inside of one nav__item and so now we would have to move up manually not just once but twice and so instead of doing that we will again use the closest method
    //so again instead of moving up manually like one or two steps we can simply search for a parent which matches a certain query and that's a bit more robust because even if we would maybe change the structrure of html here the our javascript would keep working:
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    //here we chose parent first of all links which is nav and so now from there we can search for nav__links again so these are then gonna be siblings of our initial links

    //selecting logo
    //we could select this logo element manually by it's class name but let's just suppose that there are many navigations on this page and so again to make the solution really robust it's best to simply move up to the closest parent(in this case the navigation) and then from there we simply search for an image:
    const logo = e.target.closest('.nav').querySelector('img');
    //and so then this will work not only on this navigation but it would work also on others

    //changing opacity of siblings
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 0.5;
    });

    //changing opacity of logo
    logo.style.opacity = 0.5;
  }
});

//UNDO Behavior: NOT FOLLOW DRY
// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = e.target.closest('.nav').querySelector('img');

//     //changing opacity of siblings
//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 1;
//     });

//     //changing opacity of logo
//     logo.style.opacity = 1;
//   }
// });

//REFACTORED SOLUTION:
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

const handleHover = function (e) {
  // console.log(this, e.currentTarget);

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = e.target.closest('.nav').querySelector('img');

    //changing opacity of siblings
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    //changing opacity of logo
    logo.style.opacity = this;
  }
};
//in this above function we can only ever have one real parameter and that is the event but if we want to pass additional values into the handler function then we need to use the this keyword like we just did below

//MORE REFACTORED:
//we can do even better by using the bind method so remember that the bind mehtod creates a copy of the function that it's called on and it will set the this keyword in this function call to whatever value we pass into bind
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
//here in this bind function the this keyword value is set 0.5 and 1 respectively

////////////////////////////////////////////////
//196:- Implementing a Sticky Navigation: The Scroll Event
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// //this event will be fired off each time when we scroll on our page
// window.addEventListener('scroll', function (e) {
//   // console.log(e);
//   //as we scrolled a little bit and it already created so many events in a console so it got fired all these times(if we see on our console) so the scroll event is not really efficient and usually it should be avoided
//   // console.log(window.scrollY);
//   //and remember this is the position basically from the top of the view port to the very top of the page

//   console.log(initialCoords);
//   //implementing sticky
//   if (initialCoords.top <= 0) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });
// //So using the scroll event for performing a certain action at a certain position of the page in really not a way to go and again that's because the scroll event here fires all the time no matter how small the change is in the scroll and so that makes for a pretty bad performance and especially on mobile

const section2 = document.querySelector('#section--2');
console.log(section2.getBoundingClientRect().top);

////////////////////////////////////////////////
//196:- Intersection Obsever API
// //This API allows our code to basically observe changes to the way that a ceratin target element intersect another element or the way it intersects the viewport:

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// //so this callback function here will get called each time that the observed element so our target element section1 here is intersecting the root element at the threshold that we defined

// const obsOptions = {
//   //this object first needs a root property and this root is the element that the target is intersecting so here section1 is the target and the root element will be the element that we want our target element to intersect:
//   root: null,
//   //so we could here now select an element or as an alternative we can write null and then we will be able to observe our target element intersecting the entire viewport

//   // threshold: 0.1, //10%
//   //and this is basically the percentage of intersection at which the obsever callback will be called

//   //let's try another thresolds:
//   threshold: [0, 0.2],
//   //so 0% here means that bascially our callback will trigger each time that the target element moves completely out of the view and also as soon as it enters the view
//   //and 1 would be when the 100% of the target is visible in the viewport but that would be impossible because the section1 itself is already bigger than the viewport
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// //so now we have to use this observer to basically observe a certain target:
// observer.observe(section1);

// //So in the current example whenever the first section so our target here section1 is intersecting the viewport at 10%, so the viewport because that's the root and 10% because that's the threshold so whenver that happens then obsCallback function will get called and that's no matter if we are scrolling up or down

//Implementing Sticky Navigation Using Intersection Observer API:-
const header1 = document.querySelector('.header');
const navHeight = document.querySelector('.nav').getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  //here the threshold is only one so we don't need to loop over the entries
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObsever = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  //so when 0% of the header is visible then we want to stick the navigation

  rootMargin: `-${navHeight}px`, //header finishes before 90px
});
headerObsever.observe(header1);

//////////////////////////////////////////////////
//198:- Revealing Elements On Scroll:-


/////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
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
//and this will return the first element that matches the above selector

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
//now what we see here is that the element was actually only insert at once, that's because message element is now indeed a live element living in the dom and so therefore it cannot be at multiple places at the same time, it's just like a person that also cannot be at two place simultaneously

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
//these styles are actually set as inline styles, so styles set here directly in the dom

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
console.log(logo.getAttribute('src'));
console.log(logo.className);
//so this works because on images they are supposed to have the alt, and the src attributes on them and so we specify them on the html then javascirpt will atutomatically create these properties on the object but if we add some other property that is not a standard then javascript will not automatically create a property on the object
//so let's add on the nav image for ex: designer property set it to 'Jonas':
console.log(logo.designer);
//now here we get undefined and again that is because this is not a standard property that is expected to be on images but there is another way of reading this value from the dom
console.log(logo.getAttribute('designer'));

//Now just as we can read these values for these attributes, we can also set them:
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));

//Another example of absolute and relative links:
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes:-
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
//becasue this will overwrite all the existing classes and also it allows us to only put one class on any element

//////////////////////////////////////////////////
//189:- Types of Events and Event Handlers:-
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great you are reading the heading');
// });
//as we hover over h1, we get the alert!
//you can also take a look of events list in MDN

//Another way of attaching an event listener to the element:
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great you are reading the heading');
// };
//For each of the events that we just saw in the MDN there is one on-event property however, this way of listening to events is a bit old school and now we usually always use addEventListener

//Why addEventListener is better?
//1. It allows us to add multiple event listeners to the same event so we could add another event listener on the same element and both will run but in the case of 'on events' the second one will override the first one

//2. We can actually remove an event handler incase we don't need it anymore and to do that first we need to export the function into the named function:
const alertH1 = function (e) {
  alert('addEventListener: Great you are reading the heading');

  h1.removeEventListener('mouseenter', alertH1);
  //because of this our event listener will only execute for once
};

// h1.addEventListener('mouseenter', alertH1);
// //another
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

//Third way of listening events on the html itself: should not be used

/////////////////////////////////////////////////
//191:- Event Propagation in Practice:-
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

//nav link
document.querySelector('.nav__link').addEventListener('click', function (e) {
  // e.preventDefault();
  this.style.backgroundColor = randomColor();
  //remember that in an event handler that this keyword points always to the element on which that even handler is attached
  // console.log('LINK', e.target, e.currentTarget);
  //e.target is essentially where the event originated so where the event first happened and this is not the element on which the handler is attached

  // console.log(this === e.currentTarget); //true

  //Stopping propogation/bubbling:-
  e.stopPropagation();
  //now the parent did not change their background colors which means that the event never arrived at those elements that's why they weren't handled there and again that is because we stopped the propagation right here

  //but in practice it's not a good idea to stop propagation so stopping the event propagation like this can sometimes fix problems in very complex applications with many handlers for the same events but in general it's not really a good idea to stop propagation of events
});

//nav links
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  // console.log('CONTAINER', e.target, e.currentTarget);
});
//now when we click to the 'Features' nav__link, the container nav__links also got it's own random background color, so why do you think this is happening?
//Because the event actually happens in document root and from there it then travels down to the target element and so in this case that is the nav__link and then from there it bubbles up and bubbling up means that basically it's as if the event had also happened in all of the parent elements of nav__link and so that is the reason why this exact event in now also being handled by nav__links event listener

//Now what do think happens when we click only outside here at the nav__links?
//no color get change on the nav__link and that's because nav__links is the parent element and so from here the event only bubbles up to it's parent elements

//header
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  // console.log('NAV', e.target, e.currentTarget);
  // console.log(this===e.currentTarget);
});
//now when we clicked nav__link, with nav_links the nav color also got changed

//e.target:
//now when we clicked nav__link once again the e.target in a console is similar for the all three targets and i.e. nav__link. So in all three handlers the target element will always be the same and that's ofcourse the element where click first happened and it appear in all the three handlers because all of them are essentially handling the exact same event and again that is because of event bubbling

//e.currentTarget:
//but the currentTarget is not the same it is because currentTarget points to where the event had happened and where the handler is attached to.

//So as we just saw these three event handlers that we set up above recieve events from the target elements and also from the bubbling phase so in other words the event handler functions are listening for click events that happen on the element itself and they are also listening for events that keep bubbling up from their child elements and that's why the color changes in all of the parent elements here as well.

//So the two phases that we just described are phase two and phase three but now what about the capture phase, the pahse one?
//well as we learned, events are captured when they come down from the document route all the way to the target but our event handlers are not picking up these events during the capture phase, they're only listening for events in the bubbling phase but not in the capturing phase?
//it is because of the default behavior of the add event listener method and the reason for that is that the capturing phase is usually irrelevant for us, it's just not that useful now on the other hand, the bubbling phase can be very useful for something called event delegation. However, if we really do want to catch events during the capturing phase then we can define a third parameter in the addEventListener function

// header
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true //(default is false)
// );
//so in this case where this used capture parameter is set to true, now the event handler will no longer listen to bubbling events but instead to capturing events, now in practice it's gonna look same here but as we take a look in our log, you will see that the nav is actually the first appearance, so you see that now the first element through which the event passes is the naviagation and the reason for that is that this element is now actually listening for the event as it travels down from the dom while these other ones are listening for the event as it travel back up and that happens later and therfore the nav is now the first one to show up

//////////////////////////////////////////////////
//192:- Event delegation, Implementing Page Navigation:
//////////////////////////////////////////////////
//193:- DOM Traversing:
//DOM traversing is basically walking through the DOM which means that we can select an element base on another element and this is very important because sometimes we need to select elements relative to a certain other element, for ex: a direct child or a direct parent element or sometimes we don't even know the structure of the dom at runtime and in all these cases we need dom traversing:

const h1 = document.querySelector('h1');

//Going Downwards: selecting child elements:

console.log(h1.querySelectorAll('.highlight'));
//so this here indeed selects all the elements with the highlight class that are children of the h1 element and that would work no matter how deep these child elements would be inside of the h1 element. And also if there were other highlight elements on the page so element with the highlight class they would not  get selected becuase the would not be children of the h1 element

//to access direct children:
console.log(h1.childNodes);
//so this really gives us every single node of every single type that here exists

//selecting only elements:
console.log(h1.children);
//and this gives us the html collection which is a live collection so it's updated and here we indeed only got the three elements that are actually inside of the h1 and remember this only works for direct children

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'magenta';

//Going Upwards: selecting parent elements:

console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
//so it selected the closest header to our h1 element so the closest parent element that has the header class and then it simply applied all style to that element

// h1.closest('h1').style.background = 'var(--gradient-primary)';
//now it's the h1 element itself so we can think of the closest here as basically being the opposite of querySelector so both recieve a query string as an input but querySelector finds children no matter how deep in the dom tree while the closest method finds parents and also no matter how far up the dom tree

//Going Sideways: selecting siblings:

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
//selecting h1's parent element and then getting it's all children

//ex:
[...h1.parentElement.children].forEach(child => {
  // if (child !== h1) child.style.transform = 'scale(0.5)';
  //indeed all the other siblings are now 50% smaller
});
/////////////////////////////////////////////////
//194:- Building a Tabbed Component:
/////////////////////////////////////////////////
//195:- Passing arguments to Event Handlers:
////////////////////////////////////////////////
//196:- Implementing a Sticky Navigation: The Scroll Event
////////////////////////////////////////////////
//197:- Intersection Obsever API
//////////////////////////////////////////////////
//198:- Revealing Elements On Scroll:-
/////////////////////////////////////////////////
