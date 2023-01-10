'use strict';
// // constructor Function

// // const Person = function (firstName, birthYear) {
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;
// // };
// // console.log(Person);

// // const jonas = new Person('Jonas', 1991);
// // console.log(jonas);
// // // 1.New empty object is created {}
// // // 2.function is called ,this= {}
// // // 3.{} i slinked to prototype
// // // 4. function is automatically return {}
// // const matilda = new Person('matilda', 2017);
// // const jack = new Person('jack', 1975);
// // console.log(matilda, jack);

// // console.log(jonas instanceof Person);

// // // Prototypes

// // Person.prototype.calcAge = function () {
// //   return 2037 - this.birthYear;
// // };

// // console.log(jonas.calcAge());
// // console.log(Person);

// // console.log(Person.prototype === Object.prototype);
// // console.log(jonas.hasOwnProperty('name'));

// // console.log(Object.prototype);

// // // Challenge
// // const Car = function (make, Speed) {
// //   this.make = make;
// //   this.Speed = Speed;
// // };

// // const bmw = new Car('BMW', 120);
// // const mercedes = new Car('Mercedes', 95);

// // Car.prototype.accelerate = function () {
// //   this.Speed += 10;
// //   console.log(`${this.make} is going at ${this.Speed} kmph`);
// // };

// // Car.prototype.brake = function () {
// //   this.Speed -= 5;
// //   console.log(`${this.make} is going at ${this.Speed} kmph`);
// // };

// // bmw.accelerate();
// // bmw.accelerate();
// // bmw.brake();
// // console.log(bmw);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // Set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name `);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);

// jessica.calcAge();
// jessica.greet();
// console.log(jessica);
// console.log(jessica.age);

// const walter = new PersonCl('Walter White', 1965);
// console.log(walter);
// // Getter and Setter

// const account = {
//   owner: 'Ajish',
//   movemnets: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   get latest() {
//     return this.movemnets.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movemnets.push(mov);
//   },
// };

// console.log(account.latest);
// console.log(account.movemnets);
// account.latest = 1000;

// console.log(account.movemnets);

// class Carcl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Carcl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.speedUS = 150;
// console.log(ford);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Inhertance Between classes : Construtor Function

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2000, 'Computer Science');

// mike.introduce();
// Student.prototype.constructor = Student;
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// Coding Challenge

// const Car = function (make, Speed) {
//   this.make = make;
//   this.Speed = Speed;
// };

// Car.prototype.accelerate = function () {
//   this.Speed += 10;
//   console.log(`${this.make} is going at ${this.Speed} kmph`);
// };

// Car.prototype.brake = function () {
//   this.Speed -= 5;
//   console.log(`${this.make} is going at ${this.Speed} kmph`);
// };

// const EV = function (make, Speed, charge) {
//   Car.call(this, make, Speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.Speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.Speed} kmph  and the charge is ${this.charge}`
//   );
// };
// const Tesla = new EV('Tesla', 140, 23);
// Tesla.chargeBattery(90);
// Tesla.brake();
// Tesla.accelerate();
// console.log(Tesla);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Inhertance Between Classes :ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // Set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name `);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }

// class StudentCL extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happend first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(`${2037 - this.birthYear}`);
//   }
// }

// const Martha = new StudentCL('Martha Jonas', 2000, 'Computer Science');
// console.log(Martha);
// Martha.introduce();
// Martha.calcAge();
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between Classes:Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(` ${2037 - this.birthYear}`);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2017, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// ES6 Classes Example
// class Account {
//   // Public Fields
//   locale = navigator.language;

//   // Private Fileds(Instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this.movements = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks for opening an Account ${this.owner}`);
//   }

//   // Public Methods
//   getMovemnets() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//   }
//   withdrawal(val) {
//     this.#movements.push(-val);
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Approved`);
//     }
//   }
//   // Private Methods
//   #approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(1000);
// acc1.withdrawal(250);
// acc1.requestLoan(10000);
// console.log(acc1.getMovemnets());
// console.log(acc1);
// console.log(acc1.#pin);

class Carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
}
class EVCL extends Carcl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const Rivian = new EVCL('Rivian', 120, 23);
console.log(Rivian);
Rivian.accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(20);

console.log(Rivian.speedUS);
