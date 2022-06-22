// Variable that stores user election
let playerSelection = prompt("Pick Rock, Paper or Scissors: ").toLowerCase;
// Variable that stores computer election
let computerSelection = "";

function computerPlay() {

    let possibleSelections = ["rock", "paper", "scissors"]
    let randomInt = Math.floor(Math.random() * possibleSelections.length);
    let pcSelection = possibleSelections[randomInt];
    computerSelection = pcSelection;
}

function play(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It´s a draw"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win"
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose"
    }
    

}
