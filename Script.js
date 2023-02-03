window.addEventListener("DOMContentLoaded", init);
let player = document.querySelector("div .player");
let cpu = document.querySelector("div .cpu");
let buttonClicked;
let options = ["rock", "paper", "scissors"];
let cpuChoice;

// const winner = getWinner(buttonClicked, getRandomChoice());
/* START */
function init() {
  console.log("init");
  ButtonClickable();
}

/* PLAYER VALG */
function ButtonClickable() {
  const buttonContainer = document.querySelectorAll("#buttons button");
  buttonContainer.forEach((button) => button.addEventListener("click", playerChoice));
}

function playerChoice() {
  //when a specific button is pushed, show corresponding hand

  buttonClicked = this.dataset.hand;
  console.log(buttonClicked);
  document.querySelector(".chosen").classList.remove("chosen");
  this.classList.add("chosen");

  getRandomChoice();
  // getRandomChoice();//call on cpu's choice while running own choice animation

  //if buttonClicked corressponds to data attribut add correct classes
  if (buttonClicked == "signRock") {
    //add and remove suitable css classes
    player.classList.remove("rock", "paper", "scissors");
    player.classList.remove("shake");
    player.offset;
    player.classList.add("shake");
    player.offset;
    player.addEventListener("animationend", () => {
      player.classList.remove("shake", "rock", "paper", "scissors");
      player.classList.add("rock");
    });
    //show score after animation has ended
    showScore();
  } else if (buttonClicked == "signPaper") {
    //add and remove suitable css classes
    player.classList.remove("rock", "paper", "scissors");
    player.classList.remove("paper");
    player.classList.remove("shake");
    player.offset;
    player.classList.add("shake");
    player.offset;
    player.addEventListener("animationend", () => {
      player.classList.remove("shake", "rock", "paper", "scissors");
      player.classList.add("paper");
    });
    //show score after animation has ended
    showScore();
  } else {
    //add and remove suitable css classes
    player.classList.remove("rock", "paper", "scissors");
    player.classList.remove("scissors");
    player.classList.remove("shake");
    player.offset;
    player.classList.add("shake");
    player.offset;
    player.addEventListener("animationend", () => {
      player.classList.remove("shake", "rock", "paper", "scissors");
      player.classList.add("scissors");
    });
    //show score after animation has ended
    showScore();
  }

  //  console.log(userChoice, cpuChoiced, winner, playerScore, cpuScore);
  const winner = getWinner(buttonClicked, cpuChoice);
  console.log(winner + "hejsa");
}

//******************** PLAY ROUND*****************/
/* count score */
let playerScore = 0;
let cpuScore = 0;

const choices = document.querySelectorAll(".buttons");
const scores = document.getElementById("point");
const restart = document.getElementById("PlayAgain_btn");

// Computer choice

function getRandomChoice() {
  cpuChoice = options[Math.floor(Math.random() * options.length)];

  console.log(cpuChoice);
  if (cpuChoice == "rock") {
    //add and remove suitable css classes

    cpu.classList.remove("rock", "paper", "scissors");
    cpu.classList.remove("shake");
    cpu.offset;
    cpu.classList.add("shake");
    cpu.offset;
    cpu.addEventListener("animationend", () => {
      cpu.classList.remove("shake", "rock", "paper", "scissors");
      cpu.classList.add("rock");
    });
    //show score after animation has ended
    showScore();
  } else if (cpuChoice == "paper") {
    //add and remove suitable css classes
    cpu.classList.remove("rock", "paper", "scissors");
    cpu.classList.remove("shake");
    cpu.offset;
    cpu.classList.add("shake");
    cpu.offset;
    cpu.addEventListener("animationend", () => {
      cpu.classList.remove("shake", "rock", "paper", "scissors");
      cpu.classList.add("paper");
    });
    //show score after animation has ended
    showScore();
  } else {
    //add and remove suitable css classes
    cpu.classList.remove("rock", "paper", "scissors");
    cpu.classList.remove("shake");
    cpu.offset;
    cpu.classList.add("shake");
    cpu.offset;
    cpu.addEventListener("animationend", () => {
      cpu.classList.remove("shake", "rock", "paper", "scissors");
      cpu.classList.add("scissors");
    }); //show score after animation has ended
    showScore();
  }
}

// Get game winner
function getWinner(buttonClicked, cpuChoice) {
  //compare player sign with cpuChoice array items,
  //make player's buttonClicked to lower case to ensure correct comparison of values

  if (buttonClicked.toLowerCase().includes(cpuChoice)) {
    return "draw";
  } else if (buttonClicked === "signRock") {
    if (cpuChoice === "paper") {
      cpuScore++;
      return "computer";
    } else {
      playerScore++;
      return "player";
    }
  } else if (buttonClicked === "signPaper") {
    if (cpuChoice === "scissors") {
      cpuScore++;
      return "computer";
    } else {
      playerScore++;
      return "player";
    }
  } else if (buttonClicked === "signScissors") {
    if (cpuChoice === "rock") {
      cpuScore++;
      return "computer";
    } else {
      playerScore++;
      return "player";
    }
  }

  //   // all draw options
  //   if (buttonClicked  == "signPaper" && options == "scissors" || buttonClicked == "signRock"
  //   && options == "paper" || buttonClicked =="signScissors" && options == "rock"){

  //   }
  //   //if CPU wins conditions
  // else if (buttonClicked  == "signPaper" && options == "scissors" || buttonClicked == "signRock"
  // && options == "paper" || buttonClicked =="signScissors" && options == "rock") {
  //   youLose();
  // }
  //  else {draw();}
}

// Show score
function showScore() {
  const showPlayerScore = document.getElementById("playerScore");
  const showCPUScore = document.getElementById("computerScore");

  showPlayerScore.textContent = `Player: ${playerScore}`;
  showCPUScore.textContent = `Computer: ${cpuScore}`;

  if (playerScore > 3) {
    console.log("3 point");
    youWin();
  } else if (cpuScore == 3) {
    youLose();
  } else {
    draw();
  }
}

// // Starter round
// choices.forEach((choice) =>
//   choice.addEventListener("click", (event) => {
//     playRound(event);
//     updateScore();
//   })
// );

//******************** CONDITION FOR WINNING OR LOOSING *****************/

//**************** LOOSE SCREEN *******************/
function youLose() {
  console.log("youLose");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#lose").offset;
  document.querySelector("#lose").classList.remove("hidden");
  document.querySelector("#playAgain").classList.remove("hidden");
  document.querySelector("#playAgain").addEventListener("click", () => {
    document.querySelector("#lose").classList.add("hidden");
    init();
  });
}

//****************** WIN SCREEN ***************** //
function youWin() {
  console.log("youWin");
  document.querySelector("#win").classList.remove("hidden");
  document.querySelector("#playAgain").classList.remove("hidden");
  document.querySelector("#playAgain").addEventListener("click", init);
}

//**************** DRAW SCREEN *******************/
function draw() {
  console.log("draw");
  document.querySelector("#playAgain").classList.remove("hidden");
  document.querySelector("#playAgain").addEventListener("click", init);
}
