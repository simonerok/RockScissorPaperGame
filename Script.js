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

/* COMPUTER VALG */
/* function getRandomChoice() {
  console.log("GetRandomChoice");

}

/* USER VALG */
function userChoice() {
  console.log("userChoice");
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

//******************** PLAY ROUND*****************/
/* count score */
let playerScore = 0;
let cpuScore = 0;

const choices = document.querySelectorAll(".buttons");
const scores = document.getElementById("point");
const restart = document.getElementById("PlayAgain_btn");

function playRound() {
  const playerChoice = userChoice();
  const cpuChoice = getRandomChoice();
  const winner = getWinner(userChoice, getRandomChoice);

  console.log(userChoice, cpuChoice, winner, playerScore, cpuScore);
}

// Computer choice
function getRandomChoice() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Get game winner
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      cpuScore++;
      return "computer";
    } else {
      playerScore++;
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      cpuScore++;
      return "computer";
    } else {
      playerScore++;
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      cpuScore++;
      return "computer";
    } else {
      playerScore++;
      return "player";
    }
  }
}

// Show score
function showScore() {
  const showPlayerScore = document.getElementById("playerScore");
  const showCPUScore = document.getElementById("computerScore");

  showPlayerScore.textContent = `Player: ${playerScore}`;
  showCPUScore.textContent = `Computer: ${cpuScore}`;
}

// Starter round
choices.forEach((choice) =>
  choice.addEventListener("click", (event) => {
    playRound(event);
    updateScore();
  })
);

//******************** CONDITION FOR WINNING OR LOOSING *****************/
if (playerScore <= 3) {
  console.log("3 point");
  youLose();
} else if (playerScore == cpuPoint) {
  draw();
} else {
  youWin();
}

//**************** LOOSE SCREEN *******************/
function youLose() {
  console.log("youLose");
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
