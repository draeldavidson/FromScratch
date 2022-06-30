'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//https://restcountries.com/v2/

//THE OLD WAY TO DO AJAX CALLS
const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
            </div>
            </article>
            `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     //RETURNS A JSON OF DATA
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //render country 1
//     renderCountry(data);

//     //neighbor country 2
//     const [neighbor] = data.borders
//     console.log(neighbor);

//     if (!neighbor) return;
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {

//     const data2 = JSON.parse(this.responseText);
//     console.log(data2);
//     renderCountry(data2, 'neighbour')
//     })

//   });
// };

// getCountryAndNeighbour('germany')
// getCountryAndNeighbour('Guatemala')
// getCountryAndNeighbour('France')
// getCountryAndNeighbour('portugal')

//PROMISSES

// const request = fetch('https://restcountries.com/v2/name/usa');
// console.log(request);

// //simplifying the API request
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`).then(function (
//     response
//   ) {
//     console.log(response);
//    return response.json();
//   }).then(function(data){
//     console.log(data);
//     renderCountry(data[0])
//   });
// };

//EVEN SIMPILER
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json()
//         // console.log(response.json())
//     // if (!response.ok)
//     // throw new Error(`Country not found (${response.status})`)
//     )
//     // .catch(err =>console.error([`${err} HELP MEEEEEEE`]))

//     .then(data => {
//       renderCountry(data[0]);
//       console.log(...data);
//       const allNeighbors = data[0].borders;
//       // I wanted to find all neighbouring countries at once
//       if (!allNeighbors) return;
//       allNeighbors.forEach(neighbor => {
//         console.log(neighbor);

//         //ALWAYS RETURN BEFORE ANOTHER CHAIN
//         return fetch(`https://restcountries.com/v2/alpha/${neighbor}`)
//         .then(response => response.json())
//         .then(data =>renderCountry(data,'neighbour'));

//         })
//     //   const neighbor = data[0].borders[0];

//     }).catch(err =>{console.error([`${err} HELP MEEEEEEE`]);
//     renderError(`SOMETHING IS WRONG  ${err.message} HELP MEEEEEEE`)
// })
// .finally(()=>{
//     countriesContainer.style.opacity = 1;
//     console.log(`HI HI HI`);
// })
// };
// const getJSON = function (url) {
//     return fetch(url)
//     .then(response => response.json())

// }
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`)
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) throw new Error('No neighbor found!');
      //ALWAYS RETURN BEFORE ANOTHER CHAIN
      return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`).then(
        data => renderCountry(data, 'neighbour')
      );
    })
    .catch(err => {
      console.error([`${err} HELP MEEEEEEE`]);
      renderError(`SOMETHING IS WRONG  ${err.message} HELP MEEEEEEE`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
      console.log(`HI HI HI`);
    });
};

//   const getCountryData = function (country) {
//     // Country 1
//     getJSON(
//       `https://restcountries.eu/rest/v2/name/${country}`,
//       'Country not found'
//     )
//       .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if (!neighbour) throw new Error('No neighbour found!');

//         // Country 2
//         return getJSON(
//           `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//           'Country not found'
//         );
//       })

//       .then(data => renderCountry(data, 'neighbour'))
//       .catch(err => {
//         console.error(`${err} 💥💥💥`);
//         renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//       })
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       });
//   };

// btn.addEventListener('click', function () {
//   getCountryData('germany');
// });

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1;
};
// getCountryData('gigi')

//THE EVENT LOOP IN PRACTICE

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// //the promise will run first and then whatever condition is attached
// //and after that the timer will start
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res =>{ for (let i = 0; i < 100000000; i++) {
// } console.log(res)});

// console.log('test end');

//PROMISES

// const lotteryPromise = new Promise((resolve, reject) => {
//   if (Math.random() >= 0.5) {
//     resolve('YOU WIN 🏆')
//   }else{
//     reject('You lost... 💩')
//   }
// })

// lotteryPromise.then(response=>console.log(response)).catch(error => console.error(error))

///////////////////////////////////////
// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

const whereAmI2 = function () {
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

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI2);

//ASYNC AWAIT

const whereAmI3 = async function (country) {
  try {
    const pos = await getPosition();
    console.log(pos);

    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const datageo = await resGeo.json();
    console.log(datageo);

    //   fetch(`https://restcountries.com/v2/name/${country}`)
    //     .then(response => response.json()
    //EXACTLY THE SAME as ⬇
    const res = await fetch(
      `https://restcountries.com/v2/name/${datageo.country}`
    );
    console.log(res);
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};
// whereAmI3();
console.log('FIRST');

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

//ASYNCE IIFI
(async function () {
  try {
    const city = await whereAmI3();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
});
// ();

///////////////////////////////////////
// Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');

///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();
