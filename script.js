'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// most code is synchronous
// synchronus code execute line by line
// each line wait for prev line to finish
// synchronous is blocking means it does stop execution next line untill it's own code finished

// problem occur like
// block execution due to synchronous code
// alert("block execution due to synchronous code");
// console.log(2+3);

// this problem can be solve by asynchrous
// asynchronous is no-blocking means it does not stop execution next line
// asynchronous code run after finishing it's code
// rest of code does not wait to finish asychronous code
// some callback func are asynchronous like
// Timer, load event , AJAX CALL
// let a = 2;
// let b = a;
// b = 1 + 3;
// console.log(a)
// console.log(b)

// https://github.com/public-apis/public-apis#geocoding
// https://restcountries.com/v3.1/name/{name}
// convert acutal js object becuase json data acutally big string of data

// ///////////////////////////////////////
// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/usa');
// request.send();
// request.addEventListener('load', function (e) {
//     // console.log(typeof this.responseText, this.responseText)
//     // const data = JSON.parse(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(typeof data, data)
//     // let create html by fetching api data of countries
//     const html = `
//     <article class="country">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(data.population/100000000).toFixed(1)}m people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//             <p class="country__row"><span>💰</span>${data.currencies.USD.name}</p>
//           </div>
//     </article>`
//     countriesContainer.insertAdjacentHTML("beforeend",html);
//     countriesContainer.style.opacity='1';
// });

///////////////////////////////////////
// fetch multiple country's data
// const getCountryNeighbour = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load', function (e) {
//         // console.log(typeof this.responseText, this.responseText)
//         // const data = JSON.parse(this.responseText);
//         const [data] = JSON.parse(this.responseText);
//         console.log(typeof data, data)
//         // let create html by fetching api data of countries
//         const html = `
//         <article class="country">
//               <img class="country__img" src="${data.flags.svg}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}m people</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages.eng.name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies.USD}</p>
//               </div>
//         </article>`
//         countriesContainer.insertAdjacentHTML("beforeend", html);
//         countriesContainer.style.opacity = 1;
//     });
// };

// getCountryNeighbour('india');
// getCountryNeighbour('USA');
// getCountryNeighbour('pakistan');
// getCountryNeighbour('germany');

// const first = [1, 2, 4, 5];
// const second = first;
// second[0] = 0;
// console.log(second, first)

// let a = 2;
// let b = a;
// b = 2 + 3;
// console.log(b, a)

// two ajax func call parallery it's non-blocking or asynchronous
// both run at the same time 2nd func will call before end of 1st func exceution

// let this problems to use callBack hell
// we have made asynchronous to synchronous
///////////////////////////////////////
// const render = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}m people</p>
//           <p class="country__row"><span>🗣️</span>${data.languages.eng.name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies.USD}</p>
//         </div>
//   </article>`
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };
// const getCountryNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function (e) {
//     // console.log(typeof this.responseText, this.responseText)
//     // const data = JSON.parse(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(typeof data, data)
//     // let create html by fetching api data of countries 1
//     render(data);

//     // let create html by fetching api data of countries 1
//     const neighbour = data.ccn3;
//     if (!neighbour) return;
//     // 2nd ajax call
//     const request1 = new XMLHttpRequest();
//     request1.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request1.send();
//     request1.addEventListener('load', function (e) {
//       const [data1] = JSON.parse(this.responseText);
//       render(data1, 'neighbour')
//     });
//   });
// };

// getCountryNeighbour('usa');
// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3")
//       setTimeout(() => {
//         console.log("4");
//         setTimeout(() => {
//           console.log("5");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// each time depend it's parent fishined func
// it hard to understand and have move chnages to bugs it's worst code
// this problem can be solve by promices

// callback hell means callback inside callbach inside bacllback to execute code synchronously

// promise
// promise is an object that is result of asynchronous task
// like fetch or ajax call asynchronous task and return value
// const promise = fetch("https://www.google.com")

// promise state
// Pending       (...waiting for result of asynchronous task) until  the result is undefined.
// Fulfilled     (...the result is a value.)
// Rejected      (...the result is an error object)

// Note
// 1.You must use a Promise method to handle promises.
// .then()
// .error()

// 2. promise set only once and state can change.
// 3. must create(Build) promise then consume it.
// Note: but in the case of fetch only consume it bcz fetch return builed promise.

// perfoming asynchronous task
// const callback = (resolve, reject) => !true ? resolve("It's resolved 😃") : reject("It's rejected 😢");

// // building promise
// const prmse = new Promise(callback);

// // consume it means getting value of asynchronous code in the form or resolve or rejected callback func
// prmse.then(value => console.log(value));
// prmse.catch((error) => console.log(error));
// return also return fulfiled promise

// let code by fetch
// Note
// 1. fetch method return a promise
// 2. staring promis is pending state
// 3. body is not reader in api use .json() fetch method and it return a promise

const myError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const render = function (data, className = '') {
  const html = `
  <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            data.population / 1000000
          ).toFixed(1)}m people</p>
          <p class="country__row"><span>🗣️</span>${data.languages.eng.name}</p>
          <p class="country__row"><span>💰</span>${data.currencies.USD}</p>
        </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryData = function (country) {
  // const prms = fetch(`https://restcountries.com/v3.1/name/${country}`);
  // prms.then(res => res.json()).then(([data]) =>render(data));
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      render(data[0]);
      const neighbour = data[0]?.ccn3;
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(neighbour => neighbour.json())
    .then(data => render(data[0], 'neighbour'))
    .catch(error => {
      myError(`Oops! something went wrong😢, ${error.message}`);
      console.error('cought error 😁: ', error);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
      // remove the spinner ;
    });
};
btn.addEventListener('click', function (e) {
  getCountryData('usa');
});
// myPromise.then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );

// most effect way of fetching dat from api is
// async and await:-
async function asynFunc() {
  const res = await fetch('http//www.google.com😅');
  const data = res.json();
}
console.log('FIRST');
// async make func to asynchronous task
// await block the execution unitl task or promise did come out or unitl data fetched

// Error handling using try & catch
// It's nothing to do with asyn & await but it's does it's own work to find out error🤗
// Example:-
// regular code in try and catch use for getting error of try code
// const x = 2;
// x = 3;
// try {
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err + '  ' + 'Error with key and value');
//   alert(err.message + '  ' + 'Error with value only');
// }
const KEY = '53027a4';
const Query = 'subhan';
function resp() {
  try {
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${Query}`).then(res => {
      console.log(res);
      // return res.json();
    });
  } catch (err) {
    alert(err);
  }
}
resp();
