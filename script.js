const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 30);

    if (randomNumber < 10) {
        return rock;
    }
    else if (randomNumber < 20) {
        return paper;
    }
    else if (randomNumber < 30) {
        return scissors;
    }
}

function getPlayerChoice() {
    while (true) {
        playerSelection = prompt("Rock, Paper or Scissors?");

        if (playerSelection == null) {
            alert("Canceled");
            return -1;
        }
        else {
            playerSelection = playerSelection.toLowerCase();
            
            // this is the way it is in order to avoid TypeError: toLowerCase() possibly accessing a null variable
            if (playerSelection != rock && playerSelection != paper && playerSelection != scissors) {
                alert("You've entered something wrong. Try again!");
                continue;
            }
            else {
                return playerSelection;
            }
        }
    }

}

function doesPlayerWin() {
    if (computerSelection === rock) {
        switch (playerSelection) {
            case rock:
                // it's a tie
                break;
            case paper:
                return true;
            case scissors:
                return false;
        }
    }
    else if (computerSelection === paper) {
        switch (playerSelection) {
            case rock:
                return false;
            case paper:
                // it's a tie
                break;
            case scissors:
                return true;
        }
    }
    else if (computerSelection === scissors) {
        switch (playerSelection) {
            case rock:
                return true;
            case paper:
                return false;
            case scissors:
                // it's a tie
                break;
        }
    }
    else {
        console.log("Something went wrong.");
    }
}

function playRound() {
    
    if (getPlayerChoice() === -1) {
        return -1;
    }

    computerSelection = getComputerChoice();

    let playerWon = doesPlayerWin();

    if (playerWon === true) {
        playerScore++;
        
        if (playerSelection === scissors) {
            return alert(`😄 Cool, ${playerSelection} beat ${computerSelection}!`);
        }
        else {
            return alert(`😄 Cool, ${playerSelection} beats ${computerSelection}!`);
        }
    }
    else if (playerWon === false) {
        computerScore++;
        if (computerSelection === scissors) {
            return alert(`😔 Unfortunately, ${computerSelection} beat ${playerSelection}...`);
        }
        else {
            return alert(`😔 Unfortunately, ${computerSelection} beats ${playerSelection}...`);
        }
    }
    else {
        alert("🤔 It's a tie! Let's try this one more time.");
    }
}

function game() {
    while (playerScore != 3 && computerScore != 3) {
        if (playRound() == -1) {
            return;
        }

        if (playerSelection != computerSelection) {
            alert(`Current score is: ${playerScore} - ${computerScore}`);
        }

        if (playerScore == 3) {
            alert("Congratulations! 🙌 You won.");
        }
        else if (computerScore == 3) {
            alert("Sorry! 🤖 Computer won this time.")
        }
    }

    playerScore = 0;
    computerScore = 0;
}

game();