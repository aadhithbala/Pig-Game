'use strict';

//Capturing all the elements in a variable
let currentScore = 0;
let activePlayer = 0;

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const prepareGameStart = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
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

prepareGameStart(); //Invoking function to remove scores

btnRoll.addEventListener('click', function () {
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
});
