var scores = [0, 0]; // Player scores
var currentPlayer = 0; // Current player (0 or 1)
var currentTurnTotal = 0; // Current turn total
var diceImage = document.getElementById("diceImage");
var player1ScoreDisplay = document.getElementById("player1Score");
var player2ScoreDisplay = document.getElementById("player2Score");
var currentPlayerDisplay = document.getElementById("currentPlayerDisplay");
var turnTotalDisplays = [
  document.getElementById("turnTotal1"),
  document.getElementById("turnTotal2"),
];

function rollDice() {
  var diceValue = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  var diceImagePath = `images/dice-${diceValue}.png`; // Assuming dice images are named as dice1.png, dice2.png, ...
  diceImage.src = diceImagePath;
  if (diceValue === 1) {
    currentTurnTotal = 0;
    turnTotalDisplays[currentPlayer].textContent = currentTurnTotal;
    switchPlayer();
  } else {
    currentTurnTotal += diceValue;
    turnTotalDisplays[currentPlayer].textContent = currentTurnTotal;
  }
}

function switchPlayer() {
  currentTurnTotal = 0;
  turnTotalDisplays[currentPlayer].textContent = currentTurnTotal;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentPlayerDisplay.textContent = currentPlayer + 1;
}

function hold() {
  scores[currentPlayer] += currentTurnTotal;
  currentTurnTotal = 0;
  updateScores();
  if (scores[currentPlayer] >= 100) {
    alert("Player " + (currentPlayer + 1) + " wins!");
    resetGame();
  } else {
    switchPlayer();
  }
}

function updateScores() {
  player1ScoreDisplay.textContent = scores[0];
  player2ScoreDisplay.textContent = scores[1];
}

function resetGame() {
  scores = [0, 0];
  currentPlayer = 0;
  currentTurnTotal = 0;
  updateScores();
  currentPlayerDisplay.textContent = "1";
  diceImage.src = ""; // Reset the dice image
  turnTotalDisplays[0].textContent = "0";
  turnTotalDisplays[1].textContent = "0";
}

function newGame() {
  resetGame();
}

document.getElementById("rollButton").addEventListener("click", rollDice);
document.getElementById("holdButton").addEventListener("click", hold);
document.getElementById("newGameButton").addEventListener("click", newGame);
