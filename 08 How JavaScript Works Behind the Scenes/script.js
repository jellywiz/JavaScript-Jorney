'use strict';
/*
// Scoping in Practice
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

*/
/*
// this keyword
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(2000);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAgeArrow(2000);

const jonas = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

jonas.calcAge();

const mitela = {
  year: 2017,
};

mitela.calcAge = jonas.calcAge;
mitela.calcAge();

const f = jonas.calcAge;
console.log(f);
// f();
*/

/*
// Regular Functions vs. Arrow Functions
const jonas = {
  firstName: 'Jonas',
  year: 1995,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);
    // new modern solution
    const isMilinuim = () => {
      console.log(this);
      console.log(this.year);
      console.log(this.year >= 1980 && this.year <= 2000);

      //     // old solution
      //     const self = this; // self or that
      //     const isMilinuim = function () {
      //       console.log(this);
      //       console.log(self.year);
      //       console.log(self.year >= 1980 && self.year <= 2000);

      //     // console.log(this.year);
      //     // console.log(this.year >= 1980 && this.year <= 2000);
      //   };
    };
    isMilinuim();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
  // greet: function () {
  //   console.log(`Hey ${this.firstName}`);
  // },
};
jonas.calcAge();
jonas.greet();

// Arrgumments key
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 4);
addExpr(2, 4, 5, 10, 4);

const addArrow = (a, b) => {
  console.log(arguments); // it wont be defined
  return a + b;
};
addArrow(2, 4);
*/
/*
// Primitives vs. Objects (Primitive vs. Reference Types)
let age = 20;
let oldAge = age;

age = 21;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Muzaffer',
  age: 20,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);
*/
///////////////////////////
// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
// refrence types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// console.log(jessica, marriedJessica);

// copying object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alica', 'Bob'],
};

const marriedJesiccaCopy = Object.assign({}, jessica2);
marriedJesiccaCopy.lastName = 'Davis';
marriedJesiccaCopy.family.push('Omar');
console.log(jessica2, marriedJesiccaCopy);
