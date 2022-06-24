'use strict';

///////////////////////////////////////
// SELECTORS

//☁️ POP UP
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//☁️ TO SCROLL
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
//☁️  TABS
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabContent = document.querySelectorAll('.operations__content');
//☁️ MENU FADE
const nav = document.querySelector('.nav');
//☁️ STICKY NAV
const header = document.querySelector('.header');
//☁️ LAZY LOADING IMAGES
const imgTargets = document.querySelectorAll('img[data-src');


/////////////////////////////////////////////////////////
//                 MODALS
/////////////////////////////////////////////////////////
//☁️  POP UP MODAL SECTION
const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});
//OLD WAY TO DO A FOR EACH LOOP
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//☁️ TO SCROLL SECTION
btnScrollTo.addEventListener('click', function (event) {
  event.preventDefault();

  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(event.target.getBoundingClientRect());
  console.log('Current scroll (X/Y', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //SCROLLING
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//☁️ PAGE NAVIGATION SECTION

//⬇ THIS WORKS BUT ESSENTIALLY COPPIES THE SAME FUNCTION FOR ALL THREE BUTTONS ⬇

// document.querySelectorAll('.nav__link').forEach(function (element) {
//   element.addEventListener('click', function (event) {
//     event.preventDefault();
//     //USE GET ATTRIBUTE TO GET THE NAME OF THE ANCHOR TAG
//     const id = document.querySelector(this.getAttribute('href'));
//     console.log('Link', id);
//     id.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// ⬇ EVENT DELEGATION

//1. add event listener to common parent element
//2. determine what element originated the event

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target);

    //MATCHING STRATEGIES
    if (event.target.classList.contains('nav__link')) {
      console.log('link');
      const id = document.querySelector(event.target.getAttribute('href'));
      id.scrollIntoView({ behavior: 'smooth' });
    }
  });

//☁️ TABBED CONTAINER SECTION

// ⬇ BAD PRACTICE WILL SLOW DOWN THE PAGE ⬇

// tabs.forEach(tab => tab.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');
  // console.log(clicked);
  if (!clicked) return;
  //TO MAKE THE TABS GO BACK DOW JUST REMOVE THE ACTIVE FROM ALL BEFORE ADDING IT THE THE NEW ONE
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // MAKE THE TAB CONTENT APPEAR
  tabContent.forEach(cont =>
    cont.classList.remove('operations__content--active')
  );

  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//☁️ MENU FADE ANIMATION SECTION

//WHEN THE MOUSE IS OVER THE OBJECT

const mouseFade = function (event, opacity) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    //HAVE THE SIBLING COMPONENTS FADE
    siblings.forEach(element => {
      if (element !== link) element.style.opacity = this;
    });
    logo.style.opacity = this;
  }
  //WHEN WE MADE THE  NAV STICKY IT OVERRIDDED THE OPACITY
  //SO INSTEAD OF PASSING THE NUM AS "OPACITY" WE DO IT AS "THIS"
  // console.log("im faded");
};

// ⬇ THIS WORKS BUT NOT AS CLEAN ⬇
// nav.addEventListener('mouseover', function (event) {
//   // console.log('HI');
//   mouseFade(event, 0.5);
// });
// //WHEN THE MOUSE IS NO LONGER OVER THE OBJECT
// nav.addEventListener('mouseout', function (event) {
//   // console.log('bye...');
//   mouseFade(event, 1);

// });

// ⬇ BIND METHOD CLEANS IT UP ⬇
nav.addEventListener('mouseover', mouseFade.bind(0.5));
//WHEN THE MOUSE IS NO LONGER OVER THE OBJECT
nav.addEventListener('mouseout', mouseFade.bind(1));

//☁️ STICKY NAVIGATION SECTION

// ⬇ THIS IS GOOD BUT NOT GREAT ⬇
// const initCoords = section1.getBoundingClientRect();
// console.log(initCoords);
// window.addEventListener('scroll', function (event) {
//   // console.log(window.scrollY);

//   if (window.scrollY > initCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//TESTING
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry=>{
//     console.log(entry);
//   })
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver (obsCallback,obsOptions);

// observer.observe(section1)

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
});

headerObserver.observe(header);

//☁️ REVEALING ELEMENTS ON SCROLL SECTION

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//☁️ LAZY LOADING IMAGES SECTION

// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  // ⬇ DOESNT RMOVE THE LOW QUALITY IMAGE AS FAST AS IT REMOVES THE FILTER ⬇ 
  // entry.target.classList.remove('lazy-img');

  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img');

  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin:'200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

//☁️ SLIDERS SECTION

const slides = document.querySelectorAll('.slide');

const slider = document.querySelector('.slider')
slider.style.transform = 

slides.forEach((slide,index)=>slide.style.transform = `translateX(${100*index}%)`)

//-200% further left -100% left 0% center 100% right 200% further right

//
//////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////

// //WAYS TO SELECT ELEMENTS
// console.log(document.documentElement);
// console.log(document.body);
// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// //CREATING AND INSERTING ELEMENTS
// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.innerHTML =
//   'give me your cookies <button class="btn btn--close-cookie"> nom nom nom <button>';

// header.prepend(message);
// // header.append(message)
// //how to have a dom elememnt in two places at once
// // header.append(message.cloneNode(true))

// //DELETE ELEMENTS
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     //NEW WAY
//     // message.remove();
//     //OLD WAY DOM TRAVERSING
//     message.parentElement.removeChild(message);
//   });

//EVENT LISTENERS

// const h1 = document.querySelector('h1');

// const alertH1 = function (event) {
//   alert('Hey Hoe');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// //STYLES

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// // message.style.height = '10%';

// //doesnt work
// console.log(message.style.color);
// //works
// console.log(message.style.backgroundColor);
// //works
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10)+30+'px';
// console.log(getComputedStyle(message).height);

// //ATRIBUTES
// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// rgb(255, 255, 255);

// const ranInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${ranInt(0, 255)},${ranInt(0, 255)},${ranInt(0, 255)})`;
// console.log(randomColor());

// document
//   .querySelector('.nav__link')
//   .addEventListener('click', function (event) {
//     // console.log('LINK');
//     this.style.backgroundColor = randomColor();
//     //STOP PROPAGATION NOT A GOOD PRACTICE BUT IS A SOLUTION TO STOP BUBBLING
//     // event.stopPropagation();
//   });

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (event) {
//     // console.log('LINK');
//     this.style.backgroundColor = randomColor();
//   });

// document.querySelector('.nav').addEventListener('click', function (event) {
//   // console.log('LINK');
//   this.style.backgroundColor = randomColor();
//   //TRUE TELLS THE EVENT LISTENER TO STOP LISTENING FOR BUBBLING AND TO LISTEN TO CAPTURING
//   //CAPTURING IS RARELY USED
// },true);
