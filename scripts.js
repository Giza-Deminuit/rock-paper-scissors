
/**Will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
 * We’ll use this function in the game to make the computer’s play. */
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1 // Get random number from 1 to 3

    switch(randNum) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            alert("random number generation error!");
        } 
}

// This function plays a round of rock paper scissors and returns the result of the round
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase(); // Make parameter case-insensitive

    // Player chooses "Rock"
    if (playerChoice == "rock") {
        switch(computerSelection) {
            case "rock":
                return "It's a tie!";
                break;
            case "paper":
                return "You Lose! Paper beats Rock!";
                break;
            case "scissors":
                return "You Win! Rock beats Scissors!";
        }
    }
    // Player chooses "Paper"
    else if (playerChoice == "paper") {
        switch(computerSelection) {
            case "rock":
                return "You Win! Paper beats Rock!";
                break;
            case "paper":
                return "It's a tie!";
                break;
            case "scissors":
                return "You Lose! Scissors beats Paper!";
        }
    }
    // Player chooses "Scissors"
    else if (playerChoice == "scissors" || playerChoice == "scissor") {
        switch(computerSelection) {
            case "rock":
                return "You Lose! Rock beats Scissors!";
                break;
            case "paper":
                return "You Win! Scissors beats Paper!";
                break;
            case "scissors":
                return "It's a tie!";
        }
    }
    // Player enters something else: replay round
    else {
        return playRound(prompt(`Invalid entry: Enter 'rock' 'paper' or 'scissors' to play!`), computerSelection);
    }
}

function game() {
    // Declare variables
    let win = 0;
    let lose = 0;
    let tie = 0;

    // Play the 5 rounds
    for (let i = 0; i < 5; i++) {
        let results = playRound(prompt(`Round ${i + 1}: Enter 'rock' 'paper' or 'scissors' to play!`), getComputerChoice()) // Play a round
        console.log(results);

        // Track score
        if (results[4] == "W") {win++;}
        else if (results[4] == "L") {lose++;}
        else {tie++;}
     }

     // Display final results
     console.log(`\nResults: ${win} Win(s), ${lose} Loss(es), and ${tie} Tie(s).`)
     if (win > lose) {console.log("\nYou Win!");}
     else if (lose > win) {console.log("\nBetter luck next time.");}
     else {console.log("\nIt's a tied game!");}
}

game(); // Begin the game