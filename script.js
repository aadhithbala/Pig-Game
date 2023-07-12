'use strict';

//Capturing all the elements in a variable

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

//Roll button click event

btnRoll.addEventListener('click', function () {
  const diceNumber = generateRandomDice();
  dice.src = `./images/dice-${diceNumber}.png`;
});
