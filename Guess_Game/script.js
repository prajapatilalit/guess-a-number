'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//create function for dry principle code or refractoring the code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const numberStyleWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const numberStyleBackgroundColor = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

displayNumber('?');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when the player have no number
  if (!guess) {
    displayMessage('⛔ No Number!');
    //when player win
  } else if (guess === secretNumber) {
    displayMessage('💖 Correct Number!');
    displayNumber(secretNumber);

    numberStyleBackgroundColor('#60b347');

    numberStyleWidth('30rem');

    // high score logic
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guesses is  wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 TO High!' : '📉 TO Low!');

      score--;
      displayScore(score);
    } else {
      displayMessage('😠 You lost the game!');

      displayScore(0);
    }
  }
});
// reset to a new game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing ...');

  displayScore(score);

  displayNumber('?');

  document.querySelector('.guess').value = '';
  numberStyleBackgroundColor('#222');

  numberStyleWidth('15rem');
});
