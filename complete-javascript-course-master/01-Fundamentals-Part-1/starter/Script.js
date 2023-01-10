let js = "amazing";
// if (js === "amazing") alert("Javascript is Fun!");
let firstName = "Ajish";
console.log(firstName);

const markHeight = 78;
const markMass = 1.69;
const johnHeight = 92;
const johnMass = 1.95;

const BMIMark = markHeight / markMass ** 2;
const BMIJohn = johnHeight / johnMass ** 2;
console.log(BMIJohn, BMIMark);

if (BMIJohn < BMIMark) console.log("Marks's BMI is higher than John");
else console.log("John's BMI is higher than Mark");

const age = 17;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log(`ajish (${age}) can start driving license🚗`);
} else {
  console.log(`ajish age is not enough fro driving license`);
}
if (isOldEnough) {
  console.log(`ajish (${age}) can start driving license🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(
    `ajish is too young (${age}) wait for for another ${yearsLeft} year`
  );
}

const birthYear = 1999;
let century;
if (birthYear <= 2000) {
  century = 20;
} else century = 21;

console.log(`${century}`);

if (BMIJohn < BMIMark) {
  console.log(`Mark BMI ${BMIMark} is higher than John BMI ${BMIJohn}`);
} else {
  console.log(`John BMI ${BMIJohn} is higher than Mark BMI ${BMIMark}`);
}

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// const fav = Number(prompt(`what is your fav number`));
// console.log(`${fav}`);

// if (fav === 25) {
//   console.log(`amazing `);
// } else {
//   console.log(`sorry`);
// }

let markHeight1 = 1.69;
let markMass1 = 78;
let BMIMark1 = markMass / markHeight ** 2;

let johnHeight1 = 1.95;
let johnMass1 = 92;
let BMIJohn1 = johnMass / johnHeight1 ** 2;

let markhighBMI1 = BMIJohn1 > BMIMark1;
console.log(markhighBMI1);

const scoreDolphins = (97 + 112 + 81) / 3;

const scoreKoalas = (109 + 95 + 86) / 3;

console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolhins Won");
} else if (scoreDolphins < scoreKoalas && scoredKoalas >= 100) {
  console.log("Koalas won");
} else if (
  scoreKoalas === scoreDolphins &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log(draw);
} else {
  console.log("No one wins the Trophy");
}

const Bill = 275;
const tip = Bill <= 300 && Bill >= 50 ? Bill * 0.15 : Bill * 0.2;
console.log(tip);
console.log(`The Bill was ${Bill},the Tip was ${tip}
,and the Total value ${Bill + tip}`);
