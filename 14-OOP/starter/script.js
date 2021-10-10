'use strict';

// /*------------------------ constructor function and the 'new' operator --------------------------------*/
// const Person = function (firstName, birthYear) {
//   console.log(this);
//   // Instances properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // // Never create a methods in a constructor methods
//   // this.calcAge = function () {
//   //   console.log(2021 - this.birthYear);
//   // };
// };

// const jorge = new Person('Jorge', 1992);
// const omar = new Person('Omar', 1998);
// const pedro = new Person('Pedro', 1995);
// const jay = 'Jay';

// console.log(jorge, omar, pedro);

// console.log(jorge instanceof Person);
// console.log(jay instanceof Person);

// /*
// 1.- New {} is created
// 2.- function is callend, this = {}
// 3.- {} link to the prototype
// 4.- function automatically return {}
// */

// console.log('---------------------');

// /*---------------- Adding methods to the prototype  --------------*/
// // Adding methods and properties to the prototype is the best way to ensurance all the intances create with the prototype will have this methods.
// Person.prototype.calcAge = function () {
//   console.log(
//     `I'm ${this.firstName} and I'am ${2021 - this.birthYear} years old`
//   );
// };
// Person.prototype.species = 'Homo spiens';

// console.log(Person.prototype);

// jorge.calcAge();
// omar.calcAge();
// pedro.calcAge();

// console.log(jorge.__proto__);
// console.log(
//   `jorge.__proto__ === Person.prototype : ${
//     jorge.__proto__ === Person.prototype
//   }`
// );

// console.log(
//   `Person.prototype.isPrototypeOf(jorge) : ${Person.prototype.isPrototypeOf(
//     jorge
//   )}`
// );

// console.log(
//   `jorge.hasOwnProperty('species') : ${jorge.hasOwnProperty('species')}`
// );
// console.log(
//   `jorge.hasOwnProperty('firstName') : ${jorge.hasOwnProperty('firstName')}`
// );

// console.log(jorge.__proto__.__proto__); // Object.prototype (top of prototype chain)
// console.log(jorge.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 2, 7, 4, 5, 2, 1, 3, 8, 5, 4, 3]; // new Array === []
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(function () {});

/*----------------------------------------- ES6 classses---------------------------------------------*/

/*---------------- class expression --------------------*/
// const PersonClExp = class {};

// /*---------------- class declaration --------------------*/
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   /* static methods and properties */
//   static eyes = 2;
//   static hello() {
//     console.log('Hello nice person 👋');
//   }

//   // Intances methdos and properties
//   calcAge() {
//     console.log(` My age is ${2021 - this.birthYear}`);
//   }
//   greet() {
//     console.log(`Hello I'm ${this.firstName}`);
//   }

//   get age() {
//     return 2021 - this.birthYear;
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name`);
//     }
//   }
// }

// PersonCl.hey = function () {
//   console.log('Hey there 👋');
// };
// PersonCl.hey();
// PersonCl.hello();
// console.log(PersonCl.eyes);

// const jorge = new PersonCl('Jorge Rodriguez', 1992);
// console.log(jorge);
// jorge.calcAge();

// const walter = new PersonCl('Walter White', 1923);

// console.log(jorge.__proto__);
// console.log(jorge.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hello I'm ${this.firstName}`);
// // };

// jorge.greet();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizes
// // 3. Classes executed in strict mode

// const account = {
//   owner: 'Jorge',
//   movements: [200, 530, 120, 300],

//   // get and set are function who act like object properties
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// // set -> we print like object propertie
// console.log(account.latest);

// // get
// account.latest = 50;

// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(` My age is ${2021 - this.birthYear}`);
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

//////////////////////////////////////////////////////////////////////
// Inheritance Beetween "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 1990, 'Computer science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.dir(Student.prototype.constructor);

////////////////////////////////////////////////////////////////////////////////
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  /* static methods and properties */
  static eyes = 2;
  static hello() {
    console.log('Hello nice person 👋');
  }

  // Intances methdos and properties
  calcAge() {
    console.log(` My age is ${2021 - this.birthYear}`);
  }
  greet() {
    console.log(`Hello I'm ${this.firstName}`);
  }
}

class Student extends PersonCl {
  constructor(fullName, birthYear, course) {
    // If we added new properties to the constructor we have to add the super() function fisrt and then have to add the new properties.
    super(fullName, birthYear);
    this.course = course;
    // If we do not add new propeties we can ommit the super() function.
  }

  /*----------- Instance Methods -----------*/
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // We can re write the father function.
  calcAge() {
    console.log(
      `I'm ${2021 - this.birthYear} years old, but as a student I feel like ${
        2021 - (this.birthYear - 10)
      }`
    );
  }
}

const martha = new Student('Martha Jones', 2000, 'Computer Sciencie');
martha.introduce();
martha.calcAge();
