window.addEventListener("DOMContentLoaded", init);
let player = document.querySelector("#player1");
let cpu = document.querySelector("#cpu");
let point = 0;

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




/* Win screen */
// hard coded indtil videre
function stopGame(){
  console.log("stopGame")
  // console.log("point");
  // den skal ikke være her? eller hvad lmao
  if (point >= 0){
    userWins();
  }


}

/* Loose screen */

/* Draw screen */
