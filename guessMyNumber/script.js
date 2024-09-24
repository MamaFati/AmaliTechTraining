'use strict';
// get a class name fron html call massage.
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct number!!!!!!!!';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// handling events
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let mainScore = document.querySelector('.score');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct number!!!!!!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '⚡ Too High!';
      score--;
      mainScore.textContent = score;
    } else {
      message.textContent = '😭 You lost the gane!';
      mainScore.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '⚡ Too low!';
      score--;
      mainScore.textContent = score;
    } else {
      message.textContent = '😭 You lost the gane!';
      mainScore.textContent = 0;
    }
  }
});
// when the user click on again!!
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  number.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing....';
  mainScore.textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
});
