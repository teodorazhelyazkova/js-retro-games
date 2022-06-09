const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");
const startButton = document.querySelector("#start-button");
const gameOverDisplay = document.querySelector("#game-over");

let hitPosition, countDownTimerId;
let result = 0;
let gameTime = 5;
let currentTime = gameTime;
let movingMoleTimerId = null;

timeLeft.textContent = gameTime;
score.textContent = result;

function clearMole() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
}

function randomSquare() {
  clearMole();

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    squares.forEach((square) => {
      square.removeEventListener("mousedown", activateGrid);
    });
    clearMole();
    clearInterval(countDownTimerId);
    clearInterval(movingMoleTimerId);
    startButton.classList.remove("button-hidden");
    gameOverDisplay.textContent = `GAME OVER! Your final score is ${result}.`;
  }
}

function moveMole() {
  movingMoleTimerId = setInterval(randomSquare, 500);
}

function activateGrid(event) {
  if (event.target.id == hitPosition) {
    result++;
    score.textContent = result;
    hitPosition = null;
  }
}

startButton.addEventListener("click", () => {
  squares.forEach((square) => {
    square.addEventListener("mousedown", activateGrid);
  });
  gameOverDisplay.textContent = "";
  startButton.classList.add("button-hidden");
  score.textContent = 0;
  result = 0;
  if (currentTime == 0) {
    currentTime = gameTime;
    timeLeft.textContent = currentTime;
  }
  countDownTimerId = setInterval(countDown, 1000);
  moveMole();
});
