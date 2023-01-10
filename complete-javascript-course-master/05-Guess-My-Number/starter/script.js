'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'guess Number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.guess').value = 23;
// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 23;

// let Secretnumber = Math.trunc(Math.random() * 20) + 1;
// let Score = 20;
// let highScore = 0;
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };
// // const displayScore = function (score) {
// //   document.querySelector('.score').textContent = score;
// // };
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   // console.log(guess);

//   if (!guess) {
//     displayMessage('No Number');
//   } else if (guess === Secretnumber) {
//     document.querySelector('.number').textContent = Secretnumber;
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     displayMessage('Correct Number');

//     if (Score >= highScore) {
//       highScore = Score;
//       document.querySelector('.highscore').textContent = highScore;
//     } else if (guess !== Secretnumber) {
//       if (Score > 1) {
//         displayMessage(guess > Secretnumber ? 'Too High!' : 'Too Low!');
//         document.querySelector('.score').textContent = Score--;
//       } else {
//         displayMessage('You Lost the Game');
//         document.querySelector('.score').textContent = 0;
//       }
//     }
//   } else if (guess !== Secretnumber) {
//     if (Score > 1) {
//       document.querySelector('.message').textContent =
//         guess > Secretnumber ? 'Too High!' : 'Too Low';
//       document.querySelector('.score').textContent = Score--;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost the Game';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.check').style.display = 'none';
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   Score = 20;
//   Secretnumber = Math.trunc(Math.random() * 20) + 1;
//   displayMessage('Start Guessing....');
//   document.querySelector('.score').textContent = Score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('check').style.display = 'block';
// });

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);
let Highscore = 0;
// console.log(`HighScore is ${Highscore}`);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

  if (!guess) {
    console.log((document.querySelector('.message').textContent = 'No Number'));
    // When Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    console.log(score);
    if (score > Highscore) {
      Highscore = score;
      document.querySelector('.highscore').textContent = Highscore;
      console.log(`HighScore is ${Highscore}`);
    }
  }
  else if (guess!==secretNumber){
    if(score>1){document.querySelector('.message').textContent = guess>secretNumber? 'Too High':'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  } else document.querySelector('.message').textContent = 'You Lost';

    
  }
  // guess Greater than SecretNumber
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost';
  //   }
  //   // guess Lesser than SecretNumber
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else document.querySelector('.message').textContent = 'You Lost';
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width('15rem');
});
