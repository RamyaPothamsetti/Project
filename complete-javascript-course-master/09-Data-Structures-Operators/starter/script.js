'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, MainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   },
//   orderDelivery: function ({ time, address, MainIndex, starterIndex }) {
//     console.log(
//       time,
//       address,
//       this.starterMenu[starterIndex],
//       this.mainMenu[MainIndex]
//     );
//   },
//   OrderPasta: function (ingredient1, ingredient2, ingredient3) {
//     console.log(ingredient1, ingredient2, ingredient3);
//   },

//   OrderPizza: function (mainingrideint, ...otheringredient) {
//     console.log(mainingrideint);
//     console.log(otheringredient);
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'dkndgnsdg',
//   MainIndex: 2,
//   starterIndex: 1,
// });

// const ingredients = [
//   prompt(`ingredinet 1`),
//   prompt(`ingredinet 2`),
//   prompt(`ingredinet 3`),
// ];
// Spread Operator
// restaurant.OrderPasta(...ingredients);
// Rest Operator
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(10, 10, 10);

// const x = [10, 12, 13, 14, 15, 16, 18, 20];

// add(...x);

// restaurant.OrderPizza('mushroom', 'jbsfb', 'inbndjk', 'bjkbsikjs');

// const [pizza, , Risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, otherfood);
// console.log(restaurant.order(2, 1));
// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: Hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, Hours, tags);

// // Default Values

// const { menu = [], starterMenu = [] } = restaurant;
// console.log(menu, starterMenu);

// // Mutating variables

// let a = 100;
// let b = 200;
// const obj = { a: 20, b: 30, c: 40 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  openingHours,
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, MainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
  },
  orderDelivery({ starterIndex = 1, MainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[MainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  OrderPasta(ingredient1, ingredient2, ingredient3) {
    console.log(ingredient1, ingredient2, ingredient3);
  },
  orderPizza(mainingrideint, ...otheringredient) {
    console.log(mainingrideint, otheringredient);
  },
};

// const ingredients = prompt(`Let's make pasta Ingredients 1?`);
// prompt(`Ingredients 2?`), prompt(`Ingredients 3?`);
// const ex = restaurant.OrderPasta(...ingredients);
// Spread Operator
const arr = [1, 2, 3, 4];
const badarr = [5, 6, arr[0], arr[1], arr[2]];
console.log(badarr);
const goodwayarr = [1, 2, ...arr];
console.log(goodwayarr);
console.log(...goodwayarr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const [pizza, , Risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherfood);
// restaurant.orderDelivery({
//   time: '22:00',
//   address: 'Ramatalkies',
//   starterIndex: 2,
//   MainIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Ramatalkies',
// });

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// // Reassigning array
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, maincourse] = restaurant.order(2, 2);
// console.log(starter, maincourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default Values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
// // destructuring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // set default values for objects
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// console.log(a, b);
// const objj = { a: 1, b: 2, c: 7 };
// ({ a, b } = objj);
// console.log(a, b);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);

add(2, 3, 6, 5, 4, 7, 89, 65, 2, 62, 6, 2, 2, 2, 98);
const x = [23, 56, 56];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'qqwf');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

const allplayers = [...players1, ...players2];
console.log(allplayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'asfsa'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

console.log(...restaurant.mainMenu);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = 'jonas';
const letters = [...str];
console.log(letters);

// const Ingredientss = [
//   prompt('ingredient1'),
//   prompt('ingredient2'),
//   prompt('ingredient3'),
// ];

// console.log(restaurant.OrderPasta(...Ingredientss));

const [pizza1, ...others] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza1, others);
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(sat);

const addd = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3, 5, 6, 8, 9, 6, 2, 5, 6, 32);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--AND--');

console.log(0 && 1);

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
restaurant.numGuests = 0;
const guests = restaurant.numGuests ?? 10;
console.log(guests);

const rest1 = {
  name: 'capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numguests = rest2.numGuests || 10;

// Or Assignmnet Operator
//

// Nullisg Assignmnet Operator

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);

console.log(rest2);

console.log(menu);

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el} `);
}

console.log([...menu.entries()]);
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours?.mon.open);

console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day},we open at ${open}`);
}

console.log(restaurant.order?.(0, 1)) ?? 'method does not exist';
console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days`;
console.log(openStr);

for (const day of properties) {
  openStr += ` ${day},`;
}
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(day);
  console.log(open);
  console.log(close);
  console.log(`on ${day}  we open at ${open} and close at ${close}`);
}
const odds = Object.values(game.odds);
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1} : ${player}`);
let average = 0;
// for (const odd of odds) average += odd;
// console.log(average);
// average /= odds.length;
// console.log(average);
const oddds = Object.values(game.odds);

for (const odd of odds) average += odd;
console.log(average);
average /= odds.length;
console.log(average);

for (const [team, bet] of Object.entries(game.odds)) {
  console.log(team);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${bet}`);
}

const arrayy = [1, 2, 3, 4, 5, 6];
for (const item of arrayy) console.log(item);
// Set are Unique don't allow Duplicates
console.log('--Set--');
const orderSet = new Set(['pasta', 'pizza', 'pasta', 'pizza']);
console.log(orderSet.size);
console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Garlic Bread');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ['chef', 'waiter', 'chef', 'manager', 'waiter'];
console.log(staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique.length);
console.log(staffUnique);
console.log(new Set(['chef', 'waiter', 'chef', 'manager', 'waiter']).size);

// Maps
const rest = new Map();
rest
  .set('name', 'classico Italiano')
  .set(1, 'Firenze,Italy')
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are Open :D')
  .set(false, 'We are Close :(');
console.log(rest);

const time = 21;

console.log(rest.get('name'));
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('name'));
rest.delete(1);
// rest.clear();
console.log(rest.size);
let arrr = [1, 2];
rest.set(arrr, 'test');
console.log(rest.get(arrr));
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);

const question = new Map([
  ['question', 'What is the Best Language in the World?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct💥'],
  [false, 'Try Again'],
]);
console.log(question);
console.log(Object.entries(openingHours));
// Convert Object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(question.get('question'));

for (const [key, value] of question) {
  // console.log(`${value}`);
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}
// console.log(question.get(true));
// const answer = Number(prompt('Yor Answer'));
// console.log(answer);
// console.log(question.get(question.get('Correct') === answer));

// Convet Map to Array

const arr11 = [...question];
console.log([...question.entries()]);
console.log(question.values());
console.log(question.keys());
console.log(arr11);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
console.log(gameEvents);
const eventUnique = [...new Set(gameEvents.values())];
console.log(eventUnique);

gameEvents.delete(64);

console.log(`${90 / gameEvents.size}`);

for (const [time, event] of gameEvents) {
  const half = time <= 45 ? 'First' : 'Second';
  console.log(`[${half} half ]${time}: event${event}`);
}

const airline = 'Tap Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log('B737'[0]);
console.log(plane.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(-airline.lastIndexOf(' ') - 1));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const checkMiddleSeat = function (seat) {
  //B and E are Middel Seats
  const letter = seat.slice(-1);
  letter === 'E' || letter === 'B'
    ? console.log(`You got the  Middle seat`)
    : console.log(`You got Lucky`);
};
checkMiddleSeat('11B');
checkMiddleSeat('3E');
checkMiddleSeat('3D');

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

const passenger = 'joNas';
const passengerToLowerCase = passenger.toLowerCase();
const passengerCorrect =
  passengerToLowerCase[0].toUpperCase() + passengerToLowerCase.slice(1);
console.log(passengerCorrect);

const CorrectFormat = function (name) {
  const passengerToLowerCase = name.toLowerCase();
  const passengerCorrect =
    passengerToLowerCase[0].toUpperCase() + passengerToLowerCase.slice(1);
  console.log(passengerCorrect);
};
CorrectFormat('aJISH');

// Comapring Email
const email = 'hello@jonas.io';
const logEmail = '  Hello@Jonas.IO  ';
const NormalizedEmail = logEmail.toLowerCase().trim();

console.log(NormalizedEmail === email ? 'Logged In' : 'InCorrect');
console.log(NormalizedEmail);

// Replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', ' $').replace(',', '.');
console.log(priceUS, priceGB);

const announcement =
  'All Passengers come to Boarding door 23.Boarding door 23!';

console.log(
  announcement.replaceAll('door', 'gate').replaceAll('Boarding', 'Board')
);

const plane1 = 'AirBus A320neo';
console.log(plane.includes('A320'));
console.log(plane1.startsWith('A320'));

if (plane1.startsWith('AirBus') && plane1.endsWith('neo')) {
  console.log('Part of new AirBus Family');
}

const checkBaggage = function (items) {
  const item = items.toLowerCase();
  if (item.includes('knife') || item.includes('gun')) {
    console.log('yoe are not allowed');
  } else console.log('you are allowed');
};
checkBaggage('I have a laptop,some Food and Pcket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and gun for protection');

const capitalize = function (names) {
  const name = names.split(' ');
  const toUppercase = [];
  for (const n of name) {
    // toUppercase.push(n[0].toUpperCase() + n.slice(1));
    toUppercase.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(toUppercase.join(' '));
};

capitalize('ajish uddin');
capitalize('basheer uddin');

const message = 'got to gate 23';

const maskcard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
};

maskcard(654456165184894);
maskcard('654986184548');
const message2 = 'Bad weather...All Departures Delapyed...';
console.log(message2.repeat(5));

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  for (const row of rows) {
    const [first, second] = row.toLocaleLowerCase.trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
  }
});
