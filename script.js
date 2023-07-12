'use strict';

//Capturing all the elements in a variable
let currentScore = 0;
let activePlayer = 0;
let playing = true;
let score = [0, 0];

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const prepareGameStart = function () {
  // Refactor this whole mess
  score = [0, 0];
  currentScore = 0;
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
};

const generateRandomDice = () => Math.floor(Math.random() * 6 + 1);

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//Invoking function to remove scores

btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceNumber = generateRandomDice();

    dice.classList.remove('hidden');
    dice.src = `./images/dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //Add active players currentscore to  activeplayers total score
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //Check if total score is >= 100 if true declare winner else switch player
    if (score[activePlayer] >= 30) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      btnHold.classList.add('hidden');
      btnRoll.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', prepareGameStart);
