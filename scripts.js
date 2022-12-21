
/**Will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
 * We’ll use this function in the game to make the computer’s play. */
function getComputerChoice () {
    let randNum = Math.floor(Math.random() * 3) + 1 // Get random number from 1 to 3

    switch(randNum) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            alert("random number generation error!");
        } 
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());