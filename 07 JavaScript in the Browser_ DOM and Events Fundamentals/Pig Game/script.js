'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); // add if its not there/ remove if its there
  player1El.classList.toggle('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1- Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2- Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3- Check for roll 1 if true
    if (dice !== 1) {
      // Add dice to current Score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; // change later
    } else {
      // Switch to next player
      switchPlayer();
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active'); // add if its not there/ remove if its there
      // player1El.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
    //   document.getElementById(`score--${activePlayer}`).textContent =
    //     Number(document.getElementById(`score--${activePlayer}`).textContent) +
    //     currentScore;
    //   currentScore = 0;
    //   document.getElementById(`current--${activePlayer}`).textContent =
    //     currentScore;
    //   activePlayer = activePlayer === 0 ? 1 : 0;
    //   player0El.classList.toggle('player--active'); // add if its not there/ remove if its there
    //   player1El.classList.toggle('player--active');
  }
});
