let playerScore = 0;
let computerScore = 0;

function playerPlay(){
    let selection = prompt("Rock, paper, scissors?");
    selection = selection.toLowerCase();

    return selection;
}

function computerPlay(){
    let selection;
    let randomNum = getRandomIntInclusive(1, 3); 

    if (randomNum == 1) {
        selection = "rock";
    } else if (randomNum == 2) {
        selection = "paper"
    } else {
        selection = "scissors"
    }

    return selection;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function playRound(playerSelection, computerSelection){
    
    let result;

    if (playerSelection == computerSelection){
        result = "Tie game!";
    } 
    if (computerSelection == "rock" & playerSelection == "scissors" ||
        computerSelection == "paper" & playerSelection == "rock" ||
        computerSelection == "scissors" & playerSelection == "paper")
        {
            result = "You lose :(";
            computerScore++;
        } else {
            if (result != "Tie game!") {
                result = "You win!";
                playerScore++;
            }
        }
    
    console.log(result + " You: " + playerScore + " Computer: " + computerScore);
    
}

function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (computerScore > playerScore){
        console.log("Oh no! You lose the game");
    } else {
        console.log("Congratulations! You win")
    }
}

game();