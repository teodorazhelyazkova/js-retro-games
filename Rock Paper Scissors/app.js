const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
const paperLabel = "paper";
const rockLabel = "rock";
const scissorsLabel = "scissors";

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.ceil(Math.random() * possibleChoices.length);

  switch (randomNumber) {
    case 1:
      computerChoice = rockLabel;
      break;
    case 2:
      computerChoice = paperLabel;
      break;
    case 3:
      computerChoice = scissorsLabel;
      break;
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  const winCondition1 =
    computerChoice === rockLabel && userChoice === paperLabel;
  const winCondition2 =
    computerChoice === paperLabel && userChoice === scissorsLabel;
  const winCondition3 =
    computerChoice === scissorsLabel && userChoice === rockLabel;

  if (computerChoice === userChoice) {
    resultDisplay.innerHTML = "it's a draw!";
  } else if (winCondition1 || winCondition2 || winCondition3) {
    resultDisplay.innerHTML = "you win!";
  } else {
    resultDisplay.innerHTML = "you lost!";
  }
}
