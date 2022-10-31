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