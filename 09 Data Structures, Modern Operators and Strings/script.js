'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelevery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      time,
      address
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*
//Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(a, b, c, x, y, z);
console.log(arr);

// const [first, secound] = restaurant.categories;
// console.log(first, secound);
// const [first, , third] = restaurant.categories;
// console.log(first, third);

let [main, , secoundary] = restaurant.categories;
console.log(main, secoundary);

// switching variables
// const temp = main;
// main = secoundary;
// secoundary = main;
// console.log(main, secoundary);

[main, secoundary] = [secoundary, main];
console.log(main, secoundary);

// recive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
console.log(nested);
// const [i, , j] = nested;
// console.log(i, j);

// nested destrucotring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: resturanName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(resturanName, hours, tags);

// Defaul values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);
console.log(restaurant);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested obj
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelevery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelevery({
  address: 'new york',
});