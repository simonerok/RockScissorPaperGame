window.addEventListener("DOMContentLoaded", init);
let player = document.querySelector("#player1");
let cpu = document.querySelector("#cpu");

/* START */
function init() {
  console.log("init");
  getRandomChoice();
  userChoice();
}

/* COMPUTER VALG */
function getRandomChoice() {
  console.log("GetRandomChoice");
}

/* USER VALG */
function userChoice() {
  console.log("userChoice");
}

//******************* TIMER ********************/
//Sætter timer på 10 sek
var setTime = 10;
var visTimer = setInterval(function () {
  if (setTime <= 0) {
    //stopper timeren når 0 sek er nået
    clearInterval(visTimer);
    document.getElementById("timer").innerHTML = "Finished";
  } else {
    document.getElementById("timer").innerHTML = setTime + " seconds remaining";
  }
  setTime -= 1;
}, 1000);

//******************** FORUDSÆTNING FOR AT TABE OG VINDE *****************/

let point = 2;
let cpuPoint = 1;

if (point <= 3) {
  console.log("3 point");
  youLoose();
} else if (point == cpuPoint) {
  draw();
} else {
  draw();
}

//**************** LOOSE SCREEN *******************/
function youLoose() {
  console.log("youLoose");
  document.querySelector("#lose").classList.remove("hidden");
  document.querySelector("#playAgain").classList.remove("hidden").addEventListener("click", init);
}

//****************** WIN SCREEN ***************** //
function youWin() {
  console.log("youWin");
  document.querySelector("#win").classList.remove("hidden");
  document.querySelector("#playAgain").classList.remove("hidden").addEventListener("click", init);
}

//**************** DRAW SCREEN *******************/
function draw() {
  console.log("draw");
  document.querySelector("#draw").classList.remove("hidden");
  document.querySelector("#playAgain").classList.remove("hidden").addEventListener("click", init);
}
