"use strict";

const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")

const score0El = document.querySelector("#score--0")
const score1El = document.querySelector("#score--1")

const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector(".dice")

const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

diceEl.classList.add("hidden")

let currentScore, activePlayer, scores, playing;


const init = function(){
  currentScore = 0;
  activePlayer = 0;
  scores = [0,0];
  playing = true;

  current0El.textContent = 0
  current1El.textContent = 0
  score0El.textContent = 0
  score1El.textContent = 0

  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')
  diceEl.classList.add("hidden")
}

const switchPlayer = function () {
  currentScore = 0
  document.getElementById(`current--${activePlayer}`).textContent = currentScore
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active")
  player1El.classList.toggle("player--active")
}

init()

btnRoll.addEventListener('click', function () {
  if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden")
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1){
      currentScore += dice
      document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else switchPlayer()
  }
})


btnHold.addEventListener('click', function(){
  if(playing){
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

    if(scores[activePlayer] >= 100){
      playing = false
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
      diceEl.classList.add("hidden")
    } else switchPlayer()
  }
})

btnNew.addEventListener('click', init)















// const player1 = document.querySelector(".player--0");
// const player2 = document.querySelector(".player--1");
// let totalScore1 = document.querySelector("#score--0");
// let totalScore2 = document.querySelector("#score--1");
// let currentScore1 = document.querySelector("#current--0");
// let currentScore2 = document.querySelector("#current--1");
// let change = 1;
// let current1 = 0;
// let current2 = 0;
// let score1 = 0;
// let score2 = 0;

// document.querySelector(".btn--roll").addEventListener("click", function () {
//   if (score1 < 100 && score2 < 100) {
//     const random = Math.trunc(Math.random() * 6) + 1;
//     if (random === 1) {
//       if (change === 1) {
//         current1 = 0;
//         currentScore1.textContent = current1;
//         change = 2;
//         player1.classList.remove("player--active");
//         player2.classList.add("player--active");
//       } else {
//         current2 = 0;
//         currentScore2.textContent = current2;
//         change = 1;
//         player2.classList.remove("player--active");
//         player1.classList.add("player--active");
//       }
//     }
//     document.querySelector(".dice").src = `dice-${random}.png`;
//     document.getElementsByClassName("dice")[0].style.display = "block";

//     if (change === 1 && random !== 1) {
//       current1 += random;
//       currentScore1.textContent = current1;
//     }
//     if (change === 2 && random !== 1) {
//       current2 += random;
//       currentScore2.textContent = current2;
//     }
//   }
// });

// document.querySelector(".btn--hold").addEventListener("click", function () {
//   if (change === 1 && score1 < 100) {
//     score1 += current1;
//     totalScore1.textContent = score1;
//     if (score1 >= 100) {
//       player1.classList.add("player--winner");
//       player1.classList.remove("player--active");
//       document.getElementsByClassName("dice")[0].style.display = "none";
//     } else {
//       current1 = 0;
//       currentScore1.textContent = current1;
//       change = 2;
//       player1.classList.remove("player--active");
//       player2.classList.add("player--active");
//     }
//   } else if (change === 2 && score2 < 100) {
//     score2 += current2;
//     totalScore2.textContent = score2;
//     if (score2 >= 100) {
//       player2.classList.add("player--winner");
//       player2.classList.remove("player--active");
//       document.getElementsByClassName("dice")[0].style.display = "none";
//     } else {
//       current2 = 0;
//       currentScore2.textContent = current2;
//       change = 1;
//       player2.classList.remove("player--active");
//       player1.classList.add("player--active");
//     }
//   }
// });

// document.querySelector(".btn--new").addEventListener("click", function () {
//   document.getElementsByClassName("dice")[0].style.display = "none";
//   player1.classList.add("player--active");
//   player2.classList.remove("player--active");
//   player1.classList.remove("player--winner");
//   player2.classList.remove("player--winner");
//   current1 = 0;
//   current2 = 0;
//   score1 = 0;
//   score2 = 0;
//   currentScore2.textContent = current2;
//   totalScore2.textContent = score2;
//   currentScore1.textContent = current1;
//   totalScore1.textContent = score1;
// });
