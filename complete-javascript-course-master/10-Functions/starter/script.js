'use strict';
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     price,
//     numPassengers,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('A320');
// console.log(bookings);

// const flight = 'LH1234';
// const Ajish = {
//   name: 'Ajish Uddin',
//   passport: 13163548454,
// };
// const Basheer = {
//   name: 'Basheer Uddin',
//   passport: 1316354844,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr ' + passenger.name;
//   if (passenger.passport === 13163548454) alert('Checked In');
//   else alert('Wrong Paasport');
// };

// checkIn(flight, Basheer);
// console.log(Basheer);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
// newPassport(Ajish);
// checkIn(flight, Ajish);
// console.log(Ajish);

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join('');
// };
// // Higher Order Function
// const tranformer = function (st, fn) {
//   console.log(`Original String: ${st}`);
//   console.log(`Transformed String: ${fn(st)}`);
//   console.log(`Transformed by : ${fn.name}`);
// };

// tranformer('JavaScript is the best', upperFirstWord);
// tranformer('JavaScript is the best', oneWord);

// Excercise
// const addTwo = function (num) {
//   return num + 2;
// };

// const addS = function (word) {
//   return word + 'S';
// };

// const map = function (array, addTwo) {
//   const newarray = [];
//   for (const item of array) {
//     newarray.push(addTwo(item));
//   }
//   console.log(newarray);
// };

// map([1, 2, 3], addTwo);

// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);
// ['ajish', 'uddin', 'shaik'].forEach(high5);

// // Function Returning Function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('hey');
// greeterHey('Ajish');

// const greet1 = greeting => name => console.log(`${greeting} ${name}`);

// greet('Hi')('Ajish');

// const luftansa = {
//   airline: 'Luftansa',
//   iatacode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iatacode}${this.flightNum}` });
//   },
// };

// luftansa.book(239, 'Ajish Uddin');
// console.log(luftansa);

// const eurowings = {
//   airline: 'eurowings',
//   iatacode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'euswiss Air Lines',
//   iatacode: 'LX',
//   bookings: [],
// };

// const book = luftansa.book;

// // Call Method
// book.call(eurowings, 289, 'Ajish Uddin');
// console.log(eurowings);
// book.call(swiss, 289, 'Ajish Uddin');
// console.log(swiss);

// // Apply Method
// const flightData = [583, 'Basheer Uddin'];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);
// console.log(swiss);

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(10, 200));

// const addVat = addTax.bind(null, 0.23);
// console.log(addVat(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVatrate = addTaxRate(0.23);

// console.log(addVatrate(100));

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join('\n')}
//  '(Write option number)`
//       )
//     );

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') console.log(this.answers);
//     else if (type === 'string')
//       console.log(`Poll results are ${this.answers.join(',')}`);
//   },
// };
// poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hello');
// greeterHey('Basheer');
// greet('Hey')('Ajish');

// const luftansa = {
//   airline: 'Luftansa',
//   iatacode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iatacode}${flightNum}`,
//       name: `${name}`,
//     });
//   },
// };

// luftansa.book(239, 'Ajish Uddin');
// console.log(luftansa);

// const eurowings = {
//   airline: 'eurowings',
//   iatacode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'euswiss Air Lines',
//   iatacode: 'LX',
//   bookings: [],
// };

// // Call Method
// const book = luftansa.book;
// const flightData = [200, 'Ajish Shaik'];
// book.call(swiss, ...flightData);
// console.log(swiss);

// book.call(eurowings, 239, 'Ajish');
// console.log(eurowings);

// book.call(swiss, 589, 'Basheer');
// console.log(swiss);

// book.call(luftansa, 100, 'Salma');
// console.log(luftansa);

// // Bind Method
// const bookluftansa = luftansa.book.bind(luftansa);
// const bookEuroWings = luftansa.book.bind(eurowings);
// const bookSwiss = luftansa.book.bind(swiss);
// bookSwiss(1000, 'John Cena');
// const bookEuroWings16 = luftansa.book.bind(eurowings, 16);
// bookEuroWings16('Ajish');

// // With Event Listners
// luftansa.planes = 300;
// luftansa.buyplane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', luftansa.buyplane.bind(luftansa));

// const secureBooking = function () {
//   let passengerCount = 10;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// // Closure with IIFE
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

const tax = (rate, value) => value + value * rate;
console.log(tax(0.1, 100));

const VAT = tax.bind(this, 0.23);

console.log(VAT(100));

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
