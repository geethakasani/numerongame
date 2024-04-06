//Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1, num2, correctAnswer;

// Iteration 3: Creating variables required to make the game functional
const number1Element = document.getElementById('number1');
const number2Element = document.getElementById('number2');
const number3Element = document.getElementById('number3');
const operatorButtons = document.querySelectorAll('#buttons img');
const timerElement = document.getElementById('timer');
let score = 0;

// Iteration 4: Creating a function to initialize the game
function initializeGame() {
    score=0;
    randomizeNumbers();
    startTimer();
}
function generateRandomNumber() {
    return Math.floor(Math.random() * 101);
}
function generateCorrectAnswer(num1, num2) {
    const operators = ['+', '-', '*', '/', '%'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    switch (randomOperator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return Math.floor(num1 / num2); 
        case '%':
            return num1 % num2;
        default:
            return 0;
    }
}
function displayNumbers() {
    number1Element.textContent = num1;
    number2Element.textContent = num2;
    number3Element.textContent = correctAnswer;
}

// Iteration 5: Creating a randomize function to make the game functional
function randomizeNumbers() {
    num1 = generateRandomNumber();
    num2 = generateRandomNumber();
    correctAnswer = generateCorrectAnswer(num1, num2);
    displayNumbers();
}
// Iteration 6: Making the Operators (button) functional
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const operator = button.alt;
        const userAnswer = evaluateExpression(num1, num2, operator);
        if (userAnswer === correctAnswer) {
            updateScore(1); 
        } 
        randomizeNumbers();
        updateScoreDisplay();
    });
});
function updateScore(amount) {
    score += amount; 
}

function decreaseScore(amount) {
    score -=Math.max(0,score-amount);
}
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score-board');
    if (scoreDisplay) {
        scoreDisplay.textContent = `Score: ${score}`;
    }
}
function evaluateExpression(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return Math.floor(num1 / num2);
        case '%':
            return num1 % num2;
        default:
            return 0;
    }
}

// Iteration 7: Making Timer functional
let timerInterval; 

function startTimer() {
    clearInterval(timerInterval); 
    let timeLeft = 60;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `${timeLeft} `;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        } else if (timeLeft % 20 === 0) {
            randomizeNumbers();
            updateScoreDisplay();
        }
    }, 1000);
}
function endGame() {
    localStorage.setItem("playerScore",score);
    window.location.href = 'gameover.html'; 
}

// Start the game
initializeGame();
 

