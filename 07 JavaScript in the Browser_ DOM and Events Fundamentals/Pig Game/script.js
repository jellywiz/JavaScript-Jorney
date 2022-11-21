'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// rolling dice functionality
btnRoll.addEventListener('click', () => {
  // 1- Generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2- Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3- Check for roll 1 if true
  if (dice !== 1) {
    // Add dice to current Score
    currentScore += dice;
    current0El.textContent = currentScore; // change later
  } else {
    // Switch to next player
  }
});
