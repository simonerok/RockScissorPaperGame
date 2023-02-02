window.addEventListener("DOMContentLoaded", init);
let player = document.querySelector("div .player");
let cpu = document.querySelector("#cpu");
let buttonClicked;
var Rockcounter = 0;
/* START */
function init() {
  console.log("init");
  ButtonClickable();
  getRandomChoice();
    
}

function ButtonClickable() {
  const buttonContainer = document.querySelectorAll("#buttons button");
  buttonContainer.forEach(button => button.addEventListener("click", playerChoice));
}


/* COMPUTER VALG */
function getRandomChoice() {
  console.log("GetRandomChoice");
}


function playerChoice() {
  //when a specific button is pushed, show corresponding hand
  
  buttonClicked = this.dataset.hand;
  console.log(buttonClicked);
  document.querySelector(".chosen").classList.remove("chosen");
  this.classList.add("chosen");

 //if buttonCliked corressponds to data attribut, 
 //appendChild to player class so that image is visible

 if (buttonClicked == "signRock") {
  player.classList.remove("rock", "paper", "scissors");
  player.classList.remove("shake");
  player.offset;
  player.classList.add("shake");
  player.offset;
  player.addEventListener("animationend", () =>{
  player.classList.remove("shake", "rock", "paper", "scissors");
  player.classList.add("rock")
  }
  );
  
 }
 else if (buttonClicked =="signPaper") {
  player.classList.remove("rock", "paper", "scissors");
  player.classList.remove("paper")
  player.classList.remove("shake");
  player.offset;
  player.classList.add("shake");
  player.offset;
  player.addEventListener("animationend", () =>{
    player.classList.remove("shake", "rock", "paper", "scissors");
  player.classList.add("paper")
  }
  );
 } 
 else
  {
  player.classList.remove("rock", "paper", "scissors");
  player.classList.remove("scissors")
  player.classList.remove("shake");
  player.offset;
  player.classList.add("shake");
  player.offset;
  player.addEventListener("animationend", () =>{
    player.classList.remove("shake", "rock", "paper", "scissors");
  player.classList.add("scissors")
  }
  );
 }

}


/* Win screen */

/* Loose screen */

/* Draw screen */
