const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    let index = Math.floor(Math.random() * 3);
    let computerChoice = choices[index];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Tie!"
    }
    else{
        switch (playerChoice) {
            case "rock":
               result = (computerChoice === "paper" ? "You Lose!" : "You Win!");
                break;
            case "paper":
                result = (computerChoice === "scissors" ? "You Lose!" : "You Win!");
                break;
            case "scissors":
                result = (computerChoice === "rock" ? "You Lose!" : "You Win!");
                break;
            default:
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}` ;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`; 
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result) {
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
    }
}