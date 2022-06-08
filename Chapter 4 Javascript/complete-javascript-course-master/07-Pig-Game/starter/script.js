'use strict';

//SELECTING ELEMENTS
const player0Element = document.querySelector('.player--0');
const score0Element = document.querySelector('#score--0');
const current0Element = document.getElementById('current--0');

const player1Element = document.querySelector('.player--1');
const score1Element = document.getElementById('score--1');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
//BUTTON SECTION
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores, currentScore, activePlayer, playing;

// STARTING CONDITIONS
const newGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0Element.textContent = 0;
  current1Element.textContent = 0;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceElement.classList.add('hidden');
  currentScore = 0;
  scores = [0, 0];

  activePlayer = 0;
  if (activePlayer == 0) {
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
  }
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');

  playing = true;
};

newGame();

//SWITCH PLAYER AND RESET CURRENT PLAYER FUNCTION
const switchPlayer = function () {
  //RESET CURRENT SCORE
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //SWITCH PLAYER
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//ROLLING DICE BUTTON
btnRollDice.addEventListener('click', function () {
  if (playing) {
    //random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    //display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //check for rolled 1:
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

//HOLD BUTTON
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    console.log(scores[activePlayer]);
    //CHECK IF SCORE IS >=100
    if (scores[activePlayer] >= 100) {
      //END GAME
      playing = false;

      console.log(`Player ${activePlayer + 1} WINS!`);
      diceElement.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }

    //SWITCH PLAYER
    switchPlayer();
  }
});

//NEW GAME BUTTON
btnNewGame.addEventListener('click', newGame);
