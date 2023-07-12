'use strict';

//Capturing all the elements in a variable
let score = 0;
let activePlayer = 0;

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const prepareGameStart = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
};

const generateRandomDice = () => Math.floor(Math.random() * 6 + 1);

const switchPlayer = function () {};

prepareGameStart(); //Invoking function to remove scores

btnRoll.addEventListener('click', function () {
  const diceNumber = generateRandomDice();

  dice.classList.remove('hidden');
  dice.src = `./images/dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    score += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = score;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
