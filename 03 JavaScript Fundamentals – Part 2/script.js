/*
// Activating Strict Mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive');
*/
/*
//////////////////////////////////////////////////
// Functions
'use strict'

function logger() {
    console.log('My name is Muzaffer');
}

// calling, running and invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const Juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return Juice;
}

//console.log(fruitProcessor(5, 0));
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const nuum = '23'
console.log(nuum);
console.log(typeof nuum);
const num = Number(nuum);
console.log(num);
console.log(typeof num);
*/
/*
/////////////////////////////////
// Function Declarations vs. Expressions
'use strict'
// function declaration
 function calAge1(birthYear) {
    return 2022 - birthYear;
 }

 const age1 = calAge1(2000);

 // function expression
 const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
 }
 const age2 = calcAge2(1999);
 console.log(age1, age2);
 */
/*
 ////////////////////////////
 // Arrow function
 // one paramiter one line of code no need for return
 const calAge3 = birthYear => 2022 - birthYear;

 const age3 = calAge3(2000);
 console.log(age3);
// need return here 👇
 const yearsUntilRetinerment = birthYear => {
    const age = 2022 - birthYear;
    const retierment = 65 - age;
    return retierment;
 }
 console.log(yearsUntilRetinerment(2000));

 // multiple parameters
 const yearsUntilRetinerment1 = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retierment = 65 - age;
    // return retierment;
    return `${firstName} retired in ${retierment} years`
 }

 console.log(yearsUntilRetinerment1(2000, 'Muzaffer'));

*/
/*
////////////////////////////////////
// Functions calling other functions

// function cutFruitPieces(fruit){
//    return fruit * 4;
// }

const cutFruitPieces =  (fruit) =>  {
   return fruit * 4;
}

function fruitProcessor(apples, oranges) {
   const applepieces = cutFruitPieces(apples);
   const orangepieces = cutFruitPieces(oranges);

   console.log(apples, oranges);
   const Juice = `Juice with ${applepieces} apples pieceses and ${orangepieces} oranges pieceses.`;
   return Juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
////////////////////////////////
// Reviewing Functions

// const calcAge = function (birthYear) {
//    return 2022 - birthYear;
// }
const calcAge = (birthYear) => 2022 - birthYear;

const yearsUntilRetinerment1 = function (birthYear, firstName)  {
   const age = calcAge(birthYear);
   const retierment = 65 - age;

   if (retierment > 0) {
      console.log(`${firstName} retired in ${retierment} years`) // here it works
      return retierment;
      console.log(`${firstName} retired in ${retierment} years`) // here it doesnt work beacause after the return it breaks 
   } else {
      console.log(`${firstName} is already retired`);
      return -1;
   }
}

console.log(yearsUntilRetinerment1(2000, 'Muzaffer'));
console.log(yearsUntilRetinerment1(1940, 'Omar'));
*/
/*
///////////////////////////////////////////
// Coding challenge 1 functions
'use strict'
 
const calcAverage = (score1, score2, score3) => {
   const average = (score1 + score2 + score3)/3;
   return average;
}

const AVRGdolphin = calcAverage(44, 23, 71);
const AVGkwala = calcAverage(65, 54, 49)

const checkWinner = (avgDolphin, avgKwala) => {
   // this was my method using advanced if 
   return avgDolphin >= 2 * avgKwala ? `Dolphins win (${avgDolphin}) vs (${AVGkwala})` 
   : avgKwala >= 2 * avgDolphin ? `Kwalas wins (${AVGkwala} vs (${avgDolphin})`
   : `no one wins`;
   // if (avgDolphin >= 2 * avgKwala) {
   //    return `dolphin wins`
   // } else if (avgKwala >= 2 * avgDolphin) {
   //    return `Kwala wins`
   // } else {
   //    return `no one wins`
   // }
}

const winner = checkWinner(AVRGdolphin, AVGkwala);


console.log(AVRGdolphin, AVGkwala, winner);
*/
/*
///////////////////////////////////////////
// Introduction to Arrays

const friend1 = 'Muzaffer';
const friend2 = 'Omar';
const friend3 = 'Ahmed';

const friends = ['Muzaffer', 'Omar', 'Ahmed'];
console.log(friends);

const years = new Array(1990,1992,2000);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'hogr';
console.log(friends);

//friends = ['bob', 'nawzad']; it will give us an error
const firstName = 'Muzaffer';
const lastName = 'Dler'
const muzaffer = [firstName , lastName, 2022 - 2000, 'teacher', friends];
console.log(muzaffer);
console.log(muzaffer.length);

const calcAge = function (birthYear) {
   return 2022 - birthYear;
}

const year = [2000,1999,1998,2001];
console.log(calcAge(year)); // doesnt work like that

for(let i = 0; i < year.length; i++){
   console.log(calcAge(year[i]));
}

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[2]);
const age4 = calcAge(year[3]);
console.log(age1,age2,age3,age4);

const ages = [calcAge(year[0]),calcAge(year[1]),calcAge(year[2]),calcAge(year[3])];
console.log(ages);
*/
/*
/////////////////////////////////////
// Basic Array Operations (Methods)

const friends = ['Omar', 'rebaz', 'hevar'];
console.log(friends);
const newLength = friends.push('Raad'); // Add in the last of the array
console.log(newLength);
console.log(friends);

friends.unshift('Siroz'); // Add in the begining of the array
friends.pop() // remove the last element
friends.shift(); // remove the first element

const popped = friends.pop()
console.log(friends, popped);

console.log('omar is in index of ' + friends.indexOf('Omar'));

console.log(friends.includes('Omar')) // ES6 mehtod for index of return true or false

friends.push(23);
console.log(friends.includes(23));

if (friends.includes('Omar')) {
   console.log(`Yes omar is there in index ${friends.indexOf('Omar')}`);
}
*/
/*
/////////////////////////
// coding challenge 2


// const calcTip = function(bill) {
//    return bill >= 50 && bill <= 300 ? bill * 0.15 :
//    bill * 0.20;
// }

// Arrow function
const calcTip = (bill) => {
   return bill >= 50 && bill <= 300 ? bill * 0.15 :
   bill * 0.20;
}

const bills = new Array(125,555,44);
// const tips = new Array(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]));
// using functions
const tips = [];
for(let i =0; i <bills.length; i++) {
   tips.push(calcTip(bills[i]));
}

const total = [];

for(let i =0; i < bills.length; i++){
   total.push(bills[i] + tips[i]);
}
console.log(bills,tips,total);
*/
/*
// Optinal diffrrent ways of for loop
const arr = new Array(12,13,14);
// for (let i =0; i< arr.length; i++){
//    console.log(arr[i]);
// }

// arr.forEach(element => console.log(element) );

// arr.forEach(function(element){
//    console.log(element);
// })

arr.forEach(element => {
   console.log(element);
});
*/
/*
// Arrow function extra
const doubleValue = value => {
   return value* 2;
}

console.log(doubleValue(2));
*/
/*
//  Default Parameters
const volume = ( l, w = 2, h = 1) => l * w * h
console.log(volume(2));
*/
/*
//////////////////////////////
// Introduction to objects
// this is array
const muzafferArray = [
   'muzaffer',
   'dler',
   2022 - 2000,
   'teacher',
   ['Omar', 'Hevar', 'Rebaz']
];

// Object Literal Syntac
const Muzaffer =  {
   firstName: 'muzaffer',
   lastname: 'dler',
   age: 2022 - 2000,
   job: 'teacher',
   firneds: ['Omar', 'Hevar', 'Rebaz']
};

*/
/*
///////////////////////
// Dot vs Bracket Notation
const Muzaffer =  {
   firstName: 'muzaffer',
   lastName: 'dler',
   age: 2022 - 2000,
   job: 'teacher',
   firneds: ['Omar', 'Hevar', 'Rebaz']
};
console.log(Muzaffer);
// dot notaion
console.log(Muzaffer.age);
// brackets notaion
console.log(Muzaffer['age']);

// cobine both first and last name:
const nameKey ='Name';
console.log(Muzaffer['first'+ nameKey]);
console.log(Muzaffer['last'+ nameKey]);

// it doesnt work with a dot notation
// console.log(Muzaffer.'last' + nameKey);

const intrestedIn = prompt('what do you want to know about muzaffer?, choose between firstName, lastName, age, job and friends');
console.log(intrestedIn);

Muzaffer[intrestedIn] ? console.log(Muzaffer[intrestedIn]) : console.log('try a diffrent keyword. choose between firstName, lastName, age, job and friends');

// console.log(Muzaffer[intrestedIn])

Muzaffer.location = 'erbil';
console.log(Muzaffer.location);
Muzaffer['twitter'] = 'not exist';
console.log(Muzaffer['twitter']);

// challange
console.log(`${Muzaffer.firstName} has ${Muzaffer.firneds.length} and his bestfirend is ${Muzaffer.firneds[0]}`)
*/
/*
///////////////////////////
// Object Methods
const Muzaffer =  {
   firstName: 'muzaffer',
   lastName: 'dler',
   birthYear: 2000,
   job: 'teacher',
   firneds: ['Omar', 'Hevar', 'Rebaz'],
   hasDriversLicense: true,

   // arrow function
   // clacAge: () => {
   //    return 2022 - birthYear;
   // }

   //normal function
   // calcAge: function(birthYear) {
   //    return 2022 - this.birthYear;
   // }

   // calcAge: function() {
   //    // console.log(this)
   //    return 2022 - this.birthYear;
   // }
   calcAge: function() {
      this.age = 2022 - this.birthYear;
      return this.age;
   },
   // my solution
   // getSummary: function() {
   //    if (this.hasDriversLicense) {
   //       this.summary = `${this.firstName} is a ${this.age}, and he has a drivers license`
   //    } else {
   //       this.summary = `${this.firstName} is a ${this.age}, and he does not have a drivers license`
   //    }
   //    return this.summary
   // }

   getSummary: function() {
      return `${this.firstName} is a ${this.calcAge()}- years old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} driverse licence`
   }
};
// console.log(Muzaffer.clacAge(Muzaffer.birthYear));
// console.log(Muzaffer['clacAge'](Muzaffer.birthYear));
console.log(Muzaffer.calcAge());

console.log(Muzaffer.age);
console.log(Muzaffer.age);
console.log(Muzaffer.age);

// chalange
// "Muzaffer is a 46-year old teacher, and he has a drivers licence" 
console.log(Muzaffer.getSummary());
*/
/*
////////////////////////////////
// Coding Challenge 3

const mark = {
   fullName: 'Mark Miller',
   mass: 78,
   height: 1.69,
   calcBmi: function () {
      this.bmi = this.mass / this.height;
      return this.bmi;
   }
}

const john = {
   fullName: 'John Smith',
   mass: 92,
   height: 1.95,
   calcBmi: function () {
      this.bmi = this.mass / this.height;
      return this.bmi;
   }
}
mark.calcBmi();
john.calcBmi();
console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi) {
   console.log(`${mark.fullName}'s bmi (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else {
   console.log(`${john.fullName}'s bmi (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}
// it can work like this too.
return mark.bmi > john.bmi ? console.log(`${mark.fullName}'s bmi (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`) : console.log(`${john.fullName}'s bmi (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
*/
/*
////////////////////////////
// Iteration_ The for Loop

// console.log('lifting weight repetion 1');
// console.log('lifting weight repetion 2');
// console.log('lifting weight repetion 3');
// console.log('lifting weight repetion 4');
// console.log('lifting weight repetion 5');
// console.log('lifting weight repetion 6');
// console.log('lifting weight repetion 7');
// console.log('lifting weight repetion 8');
// console.log('lifting weight repetion 9');
// console.log('lifting weight repetion 10');

for(let i = 1; i <= 10; i++) {
   console.log(`ifting weight repetion ${i}`);
}
*/

///////////////////////////////
// Looping Arrays, Breaking and Continuing

const muzafferArray = [
   'muzaffer',
   'dler',
   2022 - 2000,
   'teacher',
   ['Omar', 'Hevar', 'Rebaz'],
   true
];
const types = [];
for(let i =0; i< muzafferArray.length; i += 1){
   console.log(muzafferArray[i], typeof muzafferArray[i]);
   // types[i] = typeof muzafferArray[i];
   types.push(typeof muzafferArray[i]);
}

console.log(types);

const years = [1991, 2000, 2012, 1980];
const age = [];

for(let i=0; i<years.length; i += 1) {
   age.push(2022 - years[i]);
}

console.log(years, age);

//continue and break
console.log(`--- only strings`);
for(let i =0; i< muzafferArray.length; i += 1){
   if(typeof muzafferArray[i] !== 'string') continue;
   console.log(muzafferArray[i], typeof muzafferArray[i]);
}

console.log(`--- Break with number`);
for(let i =0 ; i < muzafferArray.length; i += 1) {
   if(typeof muzafferArray[i] === 'number') break;
   console.log(muzafferArray[i], typeof muzafferArray[i]);
}