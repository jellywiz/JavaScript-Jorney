'use strict';

const btnsOpenModel = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const bntCloseModel = document.querySelector('.close-modal');

for (let i = 0; i < btnsOpenModel.length; i++) {
  console.log(btnsOpenModel[i].textContent);
}
