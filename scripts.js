
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
}

function displayResults(win, tie, lose) { 
    const buttons = document.querySelectorAll('button');
    buttons.forEach ((button) => {
        button.disabled = true;
    });

    const h1FinalResults = document.querySelector('h1');
    
    // Display final results
    h1FinalResults.textContent = `\nResults: ${win} Win(s), ${lose} Loss(es), and ${tie} Tie(s).`;
    if (win > lose) {h1FinalResults.textContent += "   You Win!";}
    else if (lose > win) {h1FinalResults.textContent += "   Better luck next time.";}
    else {h1FinalResults.textContent += "   It's a tied game!";}

    // Display play again button
    const btnPlayAgain = document.createElement('button');
    btnPlayAgain.textContent = "Play Again?";
    
    const playAgain = document.querySelector('#playAgain');
    playAgain.appendChild(btnPlayAgain);

    const h2ResultsPerRound = document.querySelector('h2');

    btnPlayAgain.addEventListener('click', () => {
        btnPlayAgain.remove(); // Removes the play again button
        h1FinalResults.textContent = '';
        h2ResultsPerRound.textContent = '';
        buttons.forEach ((button) => {
            button.disabled = false;
        });
    })
}

function game() {
    // Declare variables
    let win = 0;
    let lose = 0;
    let tie = 0;
    let countRoundsPlayed = 0;
    
    // Play the 5 rounds
    const buttons = document.querySelectorAll('button');
    const h2ResultsPerRound = document.querySelector('h2')

    // Play round of game upon button click and track number of rounds so far
    buttons.forEach ((button) => {
        button.addEventListener('click', () => {
            if (countRoundsPlayed < 5) {
                let results = playRound(button.id, getComputerChoice());
                countRoundsPlayed++;

                // Track score
                if (results[4] == "W") {win++;}
                else if (results[4] == "L") {lose++;}
                else {tie++;}

                h2ResultsPerRound.textContent = results;
            }

            console.log(countRoundsPlayed);

            if (countRoundsPlayed === 5) {
                countRoundsPlayed = 0;
                displayResults(win, tie, lose);
                win = 0;
                tie = 0;
                lose = 0;
            }
        });
    });
}


game();