// Iteration 8: Making scoreboard functional

function displayScore() {
    const scoreBoard = document.getElementById("score-board");
    const playerScore = localStorage.getItem("playerScore");
    scoreBoard.textContent = playerScore ? playerScore : 0;
}
displayScore();
const playAgainButton = document.getElementById("play-again-button");
playAgainButton.addEventListener("click", function () {
    window.location.href = "game.html"; 
});

