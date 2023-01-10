'use strict';
// function calcAge(Birthyear) {
//   const age = 2037 - Birthyear;

//   function PrintAge() {
//     const output = `${firstName} You are ${age},born in ${Birthyear}`;
//     console.log(output);
//     if (Birthyear >= 1981 && Birthyear <= 1996) {
//       const str = `Oh , and you are Millineal,${firstName}`;
//       console.log(str);
//     }
//     function add(a, b) {
//       return a + b;
//     }
//     console.log(add(2, 3));
//   }
//   PrintAge();
//   return age;
// }
// const firstName = 'Ajish';
// calcAge(1991);

// const ajish = {
//   firstName: 'Ajish',
//   lastName: 'Uddin',
//   year: 1990,
//   call: function () {
//     console.log(this.year - 2030);
//     // console.log(this);
//   },
// };

// ajish.call();
// const basheer = { year: 2000 };
// basheer.call = ajish.call;
// basheer.call();

// const f = { year: 2010 };
// f.call = ajish.call;
// f.call();

const ajish = {
  firstName: 'Ajish',
  lastName: 'Uddin',
  year: 1990,

  age: function () {
    const self = this;
    console.log(self.year - 2030);
    console.log(self);
    const isMilleneal = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMilleneal();
  },
  greet: () => console.log(`hey ${self.firstName}`),
};
ajish.age();

const firstName = 'Ajish';
console.log(firstName);
console.log(this.firstName);
