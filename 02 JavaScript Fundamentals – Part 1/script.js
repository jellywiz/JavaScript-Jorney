/*
let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

// 40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("Muzaffer");
console.log(23);
///////////////////////////////////////
// Variable name conventions
let firstName = "Muzaffer";
let first = "MJ";
let lastName = "Dler";

console.log(firstName);
console.log(first);
console.log(lastName);

let jonas_matilda = "JM";
let $function = 27;

const PI = 3.1415;

// accepted
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// not accepted
let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);
*/
///////////////////////////////////////
// Data Types
/*
true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'muzaffer');

console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(typeof year);

console.log(typeof null);
*/

/*
/////////////////////////////////////
// Let, const and var

let age = 20;
age = 21;

const birthYear = 2000;
// Doesnt work with const for mutation
// birthYear = 2001;

var job = 'programmer';
job = 'teahcer';

// dont do that declare a variable
lastname = 'Dler';
console.log(lastname);
*/
/*
/////////////////////////////////////////
// Baasic Operators

// math operators
const currentYear = 2022;
const ageMuzaffer = currentYear - 2000;
const ageOmar = currentYear - 1998;
console.log(ageMuzaffer, ageOmar);

console.log(ageMuzaffer * 2, ageOmar / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 which means 2 * 2 * 2 = 8

const firstName = 'muzaffer';
const lastName = 'Dler';
console.log(firstName + ' ' +lastName);

// assigment operators 
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1;
x--; // x = x - 1;
console.log(x);

// comparrison operators 
console.log(ageMuzaffer > ageOmar); // <, >, >=, <=
console.log(ageOmar >= 18);

const isFullAge = ageOmar >= 18;
console.log(currentYear - 1998 > currentYear - 2022);
console.log(isFullAge);
*/

/*
////////////////////////////////////////
// Operator Precedence

const currentYear = 2022;
const ageMuzaffer = currentYear - 2000;
const ageOmar = currentYear - 1998;
console.log(currentYear - 1998 > currentYear - 2022);

console.log(25 - 10 - 5);

let x, y;
x = y  = 25-10-5; // x = y = 10
console.log(x,y);

const averageAge = (ageMuzaffer + ageOmar) / 2;
console.log(ageMuzaffer, ageOmar, averageAge)
*/
 /*
// assigment 
// const massMark = 78, hightMark = 1.69, massJohn = 92, hightJohn = 1.95;
const massMark = 95, hightMark = 1.88, massJohn = 85, hightJohn = 1.76;
const BMImark = massMark / hightMark ** 2;
const BMIjohn = massJohn / (hightJohn * hightJohn);
let markHigherBm = BMImark > BMIjohn;
console.log(BMImark, BMIjohn, markHigherBm)
*/

/*
//////////////////////////////////////////
// Strings and Template Literals
const firstName = 'Muzaffer', job = 'Web Developer', birthYear = 2000, year = 2022;

const MJ = "Hello, I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job + '!';
console.log(MJ);

const MJnew =  `Hello, I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(MJnew);

console.log(`We can use this for any regular strings!!`);

console.log('Starting with \n\
multile \n\
lines \
')

console.log(`Starting with
multiple
lines`);
*/

/*
//////////////////////////////
// Taking Decisions_ if _ else Statements

const age = 15; // isOldEnough = age >= 18

if (age >= 18) {
    console.log('Omar can start driving 🚙');
} else {
    const yearsRemaining = 18 - 15;
    console.log(`Omar is too young, wait another ${yearsRemaining} years :)`)
}

const birthYear = 2012;
let century;
if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

/*
/////////////////////////////////////
// challange 2 Taking Decisions_ if _ else Statements
const massMark = 78, hightMark = 1.69, massJohn = 92, hightJohn = 1.95;
// const massMark = 95, hightMark = 1.88, massJohn = 85, hightJohn = 1.76;
const BMImark = massMark / hightMark ** 2;
const BMIjohn = massJohn / (hightJohn * hightJohn);
console.log(BMImark, BMIjohn);

if ( BMImark > BMIjohn) {
    console.log(`Marks BMI (${BMImark}) is Higher than John's (${BMIjohn})`);
} else {
    console.log(`John's BMI (${BMIjohn}) is Higher than Marks (${BMImark})`);
}
*/
/*
//////////////////////////////
// Type Conversion and Coercion
const inputYear = '2000';
console.log(inputYear, typeof inputYear);
console.log(typeof Number(inputYear)); 
console.log(Number(inputYear) + 18);

console.log(Number("Muzaffer")); // NaN means not a number
console.log(typeof NaN); // NaN is a invalide number

console.log(String(23), typeof String(23), 23, typeof 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11' string 
n = n - 1;
console.log(n);

let h = "12" + 1;
console.log(h);
*/
/*
//////////////////////////////////////
// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Muzaffer'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spended all ;)");
} else {
    console.log('You should get a job!')
}

let height = 10;

if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is undefined');
}
*/

/*
////////////////////////////////////////
// Equality Operators_ == vs. ===
const age = '18'; 
if(age === 18) console.log('You just became an adult (strict)');
if(age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt("What is your faviort number"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is a cool number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 7, 23 not 9');
}

if (favourite !== 23) {
    console.log('Why not 23??');
}
*/
/*
///////////////////////////////////////////
// Logical Operations

const hasDriversLicencse = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicencse && hasGoodVision);
console.log(hasDriversLicencse || hasGoodVision);
console.log(!hasDriversLicencse);

const shouldDrive = hasDriversLicencse && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sara is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

const isTired = false;
console.log(hasDriversLicencse || hasGoodVision || isTired)

if (hasDriversLicencse && hasGoodVision && !isTired) {
    console.log('Sara is able to drive');
} else {
    console.log('Some else should drive');
}
*/

////////////////////////////////////////////////
// Coding challenge 3

// // my way
// const dolphinScore = [96, 108, 89];
// const kwalaScore = [88, 91, 110];
// let dolphinAverage = 0;
// let kwalaAverage = 0;
// for (let i =0; i < dolphinScore.length; i++){
//     dolphinAverage += dolphinScore[i];
// }
// for (let i =0; i < kwalaScore.length; i++){
//     kwalaAverage += kwalaScore[i];
// }
// dolphinAverage /= 3;
// kwalaAverage /= 3;
// console.log(kwalaAverage);
// console.log(dolphinAverage);
// if (dolphinAverage > kwalaAverage) {
//     console.log('Dolphin wins by ' + (dolphinAverage - kwalaAverage) + ' points!');
// } else if (kwalaAverage > dolphinAverage) {
//     console.log('Kwala wins by ' + (kwalaAverage - dolphinAverage) + ' points!')
// } else {
//     console.log('No one wins');
// }

// const scoreDolphin = (96 + 108 + 89) / 3;
// const scoreKwala = (88 + 91 + 110) / 3;
// console.log(scoreDolphin, scoreKwala);

// if (scoreDolphin > scoreKwala) {
//     console.log('Dolphin wins the trophy 🏆');
// } else if (scoreKwala > scoreDolphin) {
//     console.log('Kwalas wins the trophy 🏆');
// } else {
//     console.log('Both wins the trophy 🏆');
// }

// Bones 1 
const scoreDolphin = (97 + 112 + 101) / 3;
const scoreKwala = (109 + 95 + 106) / 3;
console.log(scoreDolphin, scoreKwala);

if (scoreDolphin > scoreKwala && scoreDolphin >= 100) {
    console.log('Dolphin wins the trophy 🏆');
} else if (scoreKwala > scoreDolphin && scoreKwala >= 100) {
    console.log('Kwalas wins the trophy 🏆');
} else if (scoreDolphin === scoreKwala && scoreDolphin >= 100 && scoreKwala >= 100) {
    console.log('Both wins the trophy 🏆');
} else {
    console.log('No one wins the trophy 😔')
}