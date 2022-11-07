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