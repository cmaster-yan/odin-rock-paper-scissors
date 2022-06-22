// Variable that stores computer election
let computerSelection = "";
// Variable that stores user election
let playerSelection = "";
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
    playerPlay();
    pc = computerSelection;
    player = playerSelection.toLowerCase();
    
    if (player === pc) {
        return "d";
    }
    else if (player === "rock" && pc == "scissors") {
        return "w";
    }
    else if (player === "rock" && pc == "paper") {
        return "l"
    }
    else if (player === "paper" && pc == "rock") {
        return "w";
    }
    else if (player === "paper" && pc == "scissors") {
        return "l";
    }
    else if (player === "scissors" && pc == "paper") {
        return "w";
    }
    else if (player === "scissors" && pc == "rock") {
        return "l";
    }
    else {
        return "wr";
    }

}

function game() {
    playerWins = 0
    computerWins = 0
    for (i=1; i<5; i++) {
        playRound(playerSelection, computerSelection);
        if ("d") {
            console.log("Its a draw");
        }
        else if ("w") {
            console.log("You Win");
            playerWins += 1;
        }
        else if ("l") {
            console.log("You Lose");
            computerWins += 1;
        }
        else {
            console.log("Something went wrong")
        }
    }
    
    if (playerWins > computerWins) {
        console.log("You Win. Best of 5")
    }
    else if (playerWins < computerWins) {
        console.log("You Lose. Best of 5")
    }
    else {
        console.log("Its a Tie. Best of 5")
    }  

}

game();
