// const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function playRound(playerSelection, computerSelection, choices) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    playerSelectionCapitalize = capitalize(playerSelection);
    computerSelectionCapitalize = capitalize(computerSelection);

    let result = roundResult(playerSelection, computerSelection);

    return result;

    
    
}

function selectionToNumber(selection) {
    if (selection === 'rock') {
        return 0;
    } else if (selection === 'paper') {
        return 1;
    } else if (selection === "scissor") {
        return 2;
    }
}

function roundResult(playerChoice, computerChoice) {
    if (playerChoice == 'rock' && computerChoice == 'scissor') {
        return 'player';
    } else if (playerChoice == 'scissor' && computerChoice == 'rock') {
        return 'computer';
    } else if (playerChoice == computerChoice) {
        return 'draw';
    }
    
    if (playerChoice == 'scissor' && computerChoice == 'paper') {
        return 'player';
    } else if (playerChoice == 'paper' && computerChoice == 'scissor') {
        return 'computer';
    } else if (playerChoice == computerChoice) {
        return 'draw'
    }

    if (playerChoice == 'paper' && computerChoice == 'rock') {
        return 'player';
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        return 'computer';
    } else if (playerChoice == computerChoice) {
        return 'draw'
    }

}

function capitalize(str) {
    let str2 = str.charAt(0).toUpperCase() + str.slice(1);

    return str2;
}


function game() {
    console.log("Let's Play!");

    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Round ${i+1}, Enter your choice here. `);

        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        if (result == 'player') {
            playerScore++;
            console.log( `Round ${i+1}, You Won! ${playerSelectionCapitalize} beats ${computerSelectionCapitalize}.`);
        } else if (result == 'computer') {
            computerScore++;
            console.log(`Round ${i+1}, You Lose! ${computerSelectionCapitalize} beats ${playerSelectionCapitalize}.`);
        } else {
            console.log(`Round ${i+1}, Draw! Both are equal.`);
        }
    }

    if (playerScore > computerScore) {
        return 'Player'
    } else if (computerScore > playerScore) {
        return 'Computer'
    } else {
        return 'Draw!'
    }
}

let winner = game();

if (winner == 'Player' || winner == 'Computer') {
    console.log(`Winner: ${winner}`)
} else {
    console.log("Game Drawn! But well played.")
}