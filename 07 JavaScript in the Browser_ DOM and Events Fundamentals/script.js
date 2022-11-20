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

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (
    document.querySelector('.guess').value > 20 ||
    document.querySelector('.guess').value < 0
  ) {
    document.querySelector('.guess').style.border = '4px solid red';
    document.querySelector('.message').textContent =
      'The number should be between 1 and 20';
  } else if (!guess) {
    document.querySelector('.guess').style.border = '4px solid red';
    document.querySelector('.message').textContent = 'No Number';
  } else {
    document.querySelector('.guess').style.border = '4px solid #eee';
    console.log(typeof guess);
  }
});
