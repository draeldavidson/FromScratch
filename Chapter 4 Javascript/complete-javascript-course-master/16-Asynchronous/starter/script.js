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
//   countriesContainer.style.opacity = 1;
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

        if(!neighbor) throw new Error('No neighbor found!')
          //ALWAYS RETURN BEFORE ANOTHER CHAIN
          return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`)
          .then(data =>renderCountry(data,'neighbour'));
            
  
  
      }).catch(err =>{console.error([`${err} HELP MEEEEEEE`]);
      renderError(`SOMETHING IS WRONG  ${err.message} HELP MEEEEEEE`)
  })
  .finally(()=>{
      countriesContainer.style.opacity = 1;
      console.log(`HI HI HI`);
  })
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
  
btn.addEventListener('click', function () {
    getCountryData('germany');
    
})

const renderError = function (message) {
    countriesContainer.insertAdjacentText('beforeend',message);
    // countriesContainer.style.opacity = 1;
}
// getCountryData('gigi')