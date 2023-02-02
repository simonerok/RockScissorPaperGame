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

/* Win screen */

/* Loose screen */

/* Draw screen */
