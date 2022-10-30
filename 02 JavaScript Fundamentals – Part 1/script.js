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