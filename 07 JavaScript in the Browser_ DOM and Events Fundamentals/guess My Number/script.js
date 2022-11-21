'use strict';
/*
document.querySelector('.message');
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const checkBtn = document.querySelector('.check');
const number = document.querySelector('.number');
let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (
    document.querySelector('.guess').value > 20 ||
    document.querySelector('.guess').value < 0
  ) {
    document.querySelector('.guess').style.border = '4px solid red';
    displayMessage('The number should be between 1 and 20');
  } else if (!guess) {
    document.querySelector('.guess').style.border = '4px solid red';
    displayMessage('No Number');
  } else {
    document.querySelector('.guess').style.border = '4px solid #eee';
    if (guess === randomNum && score > 0) {
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.message').textContent = 'Well Done Correct';
      number.textContent = randomNum;
      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    } else if (guess !== randomNum) {
      if (score > 1) {
        displayMessage(guess > randomNum ? 'Too High' : 'Too Low');
        score -= 1;
      } else {
        displayMessage('Game Over! Please try again');
        document.querySelector('body').style.backgroundColor = 'Red';
        score = 0;
      }
      document.querySelector('.score').textContent = score;
    }
    // else if (guess > randomNum) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too High';
    //     score -= 1;
    //   } else {
    //     document.querySelector('.message').textContent =
    //       'Game Over! Please try again';
    //     score = 0;
    //   }
    // } else {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too Low';
    //     score -= 1;
    //   } else {
    //     document.querySelector('.message').textContent =
    //       'Game Over! Please try again';
    //     score = 0;
    //   }
    // }
    // document.querySelector('.score').textContent = score;
  }
});

const againBtn = document.querySelector('.again');

againBtn.addEventListener('click', () => {
  score = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').style.border = '4px solid #eee';
  document.querySelector('.guess').value = null;
  document.querySelector('.score').textContent = score;
  number.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

const guessInput = document.querySelector('.guess');

guessInput.addEventListener('keypress', event => {
  const guess = Number(document.querySelector('.guess').value);
  if (event.key === 'Enter') {
    const guess = Number(document.querySelector('.guess').value);
    if (
      document.querySelector('.guess').value > 20 ||
      document.querySelector('.guess').value < 0
    ) {
      document.querySelector('.guess').style.border = '4px solid red';
      displayMessage('The number should be between 1 and 20');
    } else if (!guess) {
      document.querySelector('.guess').style.border = '4px solid red';
      displayMessage('No Number');
    } else {
      document.querySelector('.guess').style.border = '4px solid #eee';
      if (guess === randomNum && score > 0) {
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = 'green';
        displayMessage('Well Done Correct');
        number.textContent = randomNum;
        if (highscore < score) {
          highscore = score;
          document.querySelector('.highscore').textContent = score;
        }
      } else if (guess !== randomNum) {
        if (score > 1) {
          displayMessage(guess > randomNum ? 'Too High' : 'Too Low');
          score -= 1;
        } else {
          displayMessage('Game Over! Please try again');
          document.querySelector('body').style.backgroundColor = 'Red';
          score = 0;
        }
        document.querySelector('.score').textContent = score;
      }
      // else if (guess > randomNum) {
      //   if (score > 1) {
      //     document.querySelector('.message').textContent = 'Too High';
      //     score -= 1;
      //   } else {
      //     document.querySelector('.message').textContent =
      //       'Game Over! Please try again';
      //     score = 0;
      //   }
      // } else {
      //   if (score > 1) {
      //     document.querySelector('.message').textContent = 'Too Low';
      //     score -= 1;
      //   } else {
      //     document.querySelector('.message').textContent =
      //       'Game Over! Please try again';
      //     score = 0;
      //   }
      // }
      // document.querySelector('.score').textContent = score;
    }
  }
});
