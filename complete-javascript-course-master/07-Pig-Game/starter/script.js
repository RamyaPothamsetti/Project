'use strict';

const player0 = document.querySelector('#score--0');
const playerToggle0 = document.querySelector('.player--0');
const playerToggle1 = document.querySelector('.player--1');
const player1 = document.querySelector('#score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentscore, activePlayer, playing;
// Starting Conditions

const init = function () {
  score = [0, 0];
  currentscore = 0;
  activePlayer = 0;
  playing = true;

  player0.textContent = 0;
  player1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();
// Switching Player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscore = 0;
  playerToggle0.classList.toggle('player--active');
  playerToggle1.classList.toggle('player--active');
};
// Rolling Dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Genarating a Random Dice Roll
    const dice1 = Math.trunc(Math.random() * 6) + 1;
    console.log(dice1);

    // Displaying Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice1}.png`;

    //Check for rolled 1;if true ,switch to next player
    if (dice1 !== 1) {
      currentscore += dice1;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    }
  } else switchPlayer();
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 10) {
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else switchPlayer();
  }
});
btnNew.addEventListener('click', init);
