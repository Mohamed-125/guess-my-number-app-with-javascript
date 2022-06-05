'use strict';

const correctNumber = Math.floor(Math.random() * 20 + 2);

const numberInput = document.querySelector('input');
const checkButton = document.querySelector('.check');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const againBtn = document.querySelector('.again');
console.log(correctNumber);

// when i click on the check btn
checkButton.addEventListener('click', () => {
  // if the number is the same

  if (numberInput.value == correctNumber) {
    document.body.style.backgroundColor = 'green';
    number.innerText = correctNumber;
    highScore.innerText = score.innerText;
    message.innerText = 'Correct Number ';
  }

  // if the number is wrong
  else {
    if (numberInput.value < correctNumber) {
      message.innerText = 'Too Low';
    }
    if (numberInput.value > correctNumber) {
      message.innerText = 'Too High';
    }
    score.innerText = score.innerText - 1;
  }
});

againBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#222';
  score.innerText = 20;
  message.innerText = 'Start guessing...';
  numberInput.value = null;
  number.innerText = '?';
});
