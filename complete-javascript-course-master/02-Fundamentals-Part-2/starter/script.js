// function calcTip(BillAmount) {
//   if (BillAmount >= 50 && BillAmount <= 300) {
//     return BillAmount * 0.15;
//   } else {
//     return BillAmount * 0.2;
//   }
// }
// const tip = calcTip(400);

// const Bills = [122, 144, 150];

// const tips = [calcTip(Bills[0]), calcTip(Bills[1]), calcTip(Bills[2])];

// console.log(Bills, tips);

// const Total = [Bills[0] + tips[0], Bills[1] + tips[1], Bills[2] + tips[2]];
// console.log(Total);

// const ajish = {
//   firstName: "Ajish",
//   lastName: "Uddin",
//   BirthYear: 1997,
//   BirthPlace: "Visakhapatnam",
//   CalcAge: function () {
//     // console.log(this);
//     return 2022 - this.BirthYear;
//   },
//   hasDriversLicense: false,
//   job: "Software Engineer",

//   Summary: function () {
//     console.log(
//       `${this.firstName} is a ${this.CalcAge()} old ${this.job} and he has ${
//         this.hasDriversLicence ? "a" : "no"
//       } Drivers License `
//     );
//   },
// };

// console.log(ajish.CalcAge());

// console.log(ajish.Summary());

// const mark = {
//   fullname: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   CalcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };
// const john = {
//   fullname: "John Smith",
//   mass: 92,
//   height: 1.95,
//   CalcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// if (mark.CalcBMI() > john.CalcBMI()) {
//   console.log(
//     `${mark.fullname}'s BMI (${mark.CalcBMI()}) is higher than ${
//       john.fullname
//     }'s (${john.CalcBMI()})`
//   );
// }
//function declration
function CalcAge1(birthyear1) {
  return 2037 - birthyear1;
}
const age1 = CalcAge1(2000);
// console.log(age1);

// function expression

const calcAge2 = function (birthyear2) {
  return 2037 - birthyear2;
};
const age2 = calcAge2(2000);
console.log(age2, age1);

const cutpieces = function (fruits) {
  return fruits * 4;
};
const fruitsProcessor = function (apples, oranges) {
  const applepieces = cutpieces(apples);
  const orangepieces = cutpieces(oranges);
  const juice = `juice with ${applepieces} pieces of apple and ${orangepieces} pieces of oranges`;
  return juice;
};
console.log(fruitsProcessor(2, 4));

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(1, 2, 3));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (averageDolphins, averageKoalas) {
  if (averageDolphins >= 2 * averageKoalas) {
    console.log(`Dolphin wins ${averageDolphins} vs ${averageKoalas} `);
  } else if (averageKoalas >= 2 * averageDolphins) {
    console.log(`Koalas wins ${averageKoalas} vs ${averageDolphins} `);
  } else {
    console.log(`No team Wins`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);

const calAge3 = function (birthyear1) {
  return 2027 - birthyear1;
};
const years = [1999, 1997, 1998, 2000];
const Ages = [
  calAge3(years[0]),
  calAge3(years[1]),
  calAge3(years[calAge3.length - 1]),
];

console.log(Ages);

const friends = ["Michel", "John", "Peter"];
friends.push("jay");

console.log(friends, friends.length);
friends.pop(friends.length - 1);
console.log(friends, friends.length);
friends.unshift("Ajish");
console.log(friends);
friends.pop("peter");
console.log(friends);

const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 45];
const tips = [calcTip1(bills[0]), calcTip1(bills[1]), calcTip1(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

const Ajish = {
  firstName: "Ajish",
  LastName: "Uddin",
  birthyear: 1997,
  job: "bjasc",
  Friends: ["Micheal", "John", "Peter"],
  hasDriversLicense: true,
  calcage: function () {
    return 2022 - this.birthyear;
  },
  getSummary: function () {
    return `${
      this.firstName
    } is a ${this.calcage()}year old Student , and he has ${
      this.hasDriversLicense ? "a" : "No"
    } Drivers License`;
  },
};
console.log(Ajish);

const Calctip2 = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};
const Tips1 = [Calctip2(bills[0]), Calctip2(bills[1]), Calctip2(bills[2])];

const total1 = [bills[0] + Tips1[0], bills[1] + Tips1[1], bills[2] + Tips1[2]];

console.log(bills, Tips1, total1);

console.log(
  `${Ajish.firstName} has ${Ajish.Friends.length} friends, and best friend is ${Ajish.Friends[0]}`
);

console.log(Ajish.getSummary());

const mark = {
  firstName: "mark",
  lastName: "miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  firstName: "john",
  lastName: "miller",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(mark.calcBMI(), john.calcBMI());
const newArray = ["ajish", "uddin", "shaik"];
for (let i = newArray.length - 1; i >= 0; i--) {
  console.log(newArray[i]);
}

for (let excercise = 1; excercise < 4; excercise++) {
  console.log("starting excercise");
  for (let rep = 1; rep <= 6; rep++) {
    console.log(
      `Excercise ${excercise} lifting weights repetition ${excercise}`
    );
  }
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`loop is about to end...`);
}

const Billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const Tipss = [];
const Totall = [];

const calctip11 = (Billss) =>
  Billss >= 50 && Billss <= 300 ? Billss * 0.15 : Billss * 0.2;

for (let i = 0; i < Billss.length; i++) {
  const tipp = calctip11(Billss[i]);
  Tipss.push(tipp);
  Totall.push(tipp + Billss[i]);
}
console.log(Billss, Tipss, Totall);

const calcAverage1 = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage1(Totall));
