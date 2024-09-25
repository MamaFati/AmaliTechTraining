'use strict';
// get a class name fron html call massage.
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct number!!!!!!!!';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// handling events
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highestScore = 0;
let mainScore = document.querySelector('.score');
let message = document.querySelector('.message');
// number 
let displayGuessNumber = document.querySelector('.number');
document.querySelector('.check').addEventListener('click',  () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct number!!!!!!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayGuessNumber.style.width = '30rem';
    displayGuessNumber.textContent = secretNumber;
    // change 
    if (currentScore > highestScore) {
      highestScore = currentScore;
      document.querySelector('.highestScore').textContent = highestScore;
    }
  } else if (guess > secretNumber) {
    // 
    if (currentScore >= 1) {
      message.textContent = '⚡ Too High!';
      currentScore--;
      mainScore.textContent = currentScore;
    } else {
      message.textContent = '😭 You lost the gane!';
      mainScore.textContent = 0;
    }
    // 
  } else if (guess < secretNumber) {
    // 
    if (currentScore >= 1) {
      message.textContent = '⚡ Too low!';
      currentScore--;
      mainScore.textContent = currentScore;
    } else {
      message.textContent = '😭 You lost the gane!';
      mainScore.textContent = 0;
    }
    
    // 
  }
});
// when the user click on again!!
document.querySelector('.again').addEventListener('click', () => {
  currentScore = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  displayGuessNumber.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing....';
  mainScore.textContent = currentScore;
  displayGuessNumber.textContent = '?';
  document.querySelector('.guess').value = '';
});

const displayScore = (currentScore,message)=> {
  if (currentScore >= 1) {
      message.textContent = '⚡ Too low!';
      currentScore--;
      mainScore.textContent = currentScore;
    } else {
      message.textContent = '😭 You lost the gane!';
      mainScore.textContent = 0;
    }

}