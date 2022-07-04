let computerSelection = "";
let playerSelection = "";
let result = "";

const btnrock = document.getElementById("btn-rock");
btnrock.addEventListener("click", () => {
    playerChoice.textContent = "🪨"
    game("rock");
});
const btnpaper = document.getElementById("btn-paper");
btnpaper.addEventListener("click", () => {
    playerChoice.textContent = "📃"
    game("paper");
});
const btnscissors = document.getElementById("btn-scissors");
btnscissors.addEventListener("click", () => {
    playerChoice.textContent = "✂️"
    game("scissors");
});
const playerChoice = document.querySelector(".playerChoice")
const computerChoice = document.querySelector(".computerChoice")
const roundResult = document.querySelector(".roundResult")
const scoreboard = document.querySelector(".scoreboard");
const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
const information = document.querySelector(".information");

function computerPlay() {

    let possibleSelections = ["rock", "paper", "scissors"]
    let randomInt = Math.floor(Math.random() * possibleSelections.length);
    let pcSelection = possibleSelections[randomInt];
    computerSelection = pcSelection;
}

function playerPlay() {
    playerSelection = prompt("Select Rock, Paper or Scissors: ")
}


function playRound(player, pc) {
    computerPlay();
    pc = computerSelection;
    if(pc == "rock") {
        computerChoice.textContent = '🪨';
    }
    if(pc == "paper") {
        computerChoice.textContent = '📃'
    }
    if(pc == "scissors") {
        computerChoice.textContent = '✂️'
    }
    
    
    if (player === pc) {
        result = "d";
    }
    else if (player === "rock" && pc == "scissors") {
        result = "w";
    }
    else if (player === "rock" && pc == "paper") {
        result = "l"
    }
    else if (player === "paper" && pc == "rock") {
        result = "w";
    }
    else if (player === "paper" && pc == "scissors") {
        result = "l";
    }
    else if (player === "scissors" && pc == "paper") {
        result = "w";
    }
    else if (player === "scissors" && pc == "rock") {
        result = "l";
    }
    else {
        result = "wr";
    }

}

function finishGame() {
    const gameFinishedContent = document.createElement("p");
    if (playerWins > computerWins){
        gameFinishedContent.textContent = `You Win this Game. Final Score: You - ${playerScore.textContent}, Computer - ${computerScore.textContent}`;
    }
    else {gameFinishedContent.textContent = `You Lose this Game. Final Score: You - ${playerScore.textContent}, Computer - ${computerScore.textContent}`};
    information.appendChild(gameFinishedContent);
    btnrock.disabled = true;
    btnpaper.disabled = true;
    btnscissors.disabled = true;
    alert("Do You Want to Play Again? Refresh the page")
}

let playerWins = 0
let computerWins = 0

function game(playerSelection) {
    
    playRound(playerSelection, computerSelection);
    if (result == "d") {
        console.log("Its a draw");
        roundResult.textContent = "Its a tie, try again";
    }
    else if (result == "w") {
        console.log("You Win");
        roundResult.textContent = "You Win, awesome";
        playerWins += 1;
    }
    else if (result == "l") {
        console.log("You Lose");
        roundResult.textContent = "You Lose, don't get disappointed";
        computerWins += 1;
    }
    else {
        console.log("Something went wrong");
    }
    
    playerScore.textContent = "Player: " + playerWins;
    computerScore.textContent = "Computer: " + computerWins;
    scoreboard.appendChild(playerScore)
    scoreboard.appendChild(computerScore)

    if (playerWins == 5 || computerWins == 5) {
        finishGame();
    } 
}


