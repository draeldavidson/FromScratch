'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.number').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent= message;
}
//subtracts from score when answer is wrong
const wrongAnswer = function () {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('😡 Game Over!');
    document.querySelector('.score').textContent = 0;
  }
};

const calcHighScore = function () {
    if (score> highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;

    }
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
  
    // NO INPUT
    if (!guess) {
      displayMessage('⛔️ No Number!');
      //CORRECT NUMBER
    } else if (guess === secretNumber) {
      displayMessage('🥳 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '25rem';
      calcHighScore();
      //GUESS TOO HIGH
    } else if (guess > secretNumber) {
      displayMessage('📈 Too High!');
      wrongAnswer();
      //GUESS TOO LOW
    } else if (guess < secretNumber) {
      displayMessage('📉 Too Low!');
      wrongAnswer();
    }
  });
  
  ///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
    // location.reload();
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';

})






















/** 
I MOVED THE SCORE CODE INTO ITS OWN FUNCTION (DRY METHOD)

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // NO INPUT
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else if (guess === secretNumber) {
    //CORRECT NUMBER
    document.querySelector('.message').textContent = '🥳 Correct Number!';
    //GUESS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '📈 Too High!';

    }else{
        document.querySelector('.message').textContent = '😡 Game Over!';
        document.querySelector('.score').textContent = 0;

    }
    //GUESS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '📉 Too Low!';

    }else{
        document.querySelector('.message').textContent = '😡 Game Over!';
        document.querySelector('.score').textContent = 0;

    }
  }
});*/
