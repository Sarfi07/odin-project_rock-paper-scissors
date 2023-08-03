// const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

// function getPlayerchoice() {
//     let choices = ['rock', 'paper', 'scissor'];
//     let rock = document.getElementById('rock');
//     let paper = document.getElementById('paper');
//     let scissor = document.getElementById('scissor');

//     let selection = '';

//     // add eventListener to the button
//     rock.addEventListener('click', () => {
//         console.log(rock);
//         selection = choices[0]
//     });

//     paper.addEventListener('click', () => {
//         console.log(paper);
//         selection = choices[1];
//     });

//     scissor.addEventListener('click', () => {
//         console.log(scissor);
//         selection =  choices[2];
//     });

//     return selection;

// }

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    playerSelectionCapitalize = capitalize(playerSelection);
    computerSelectionCapitalize = capitalize(computerSelection);

    let result = roundResult(playerSelection, computerSelection);

    return result;

    
    
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




function game() {
    console.log("Let's Play!");
    
    function capitalize(str) {
        let str2 = str.charAt(0).toUpperCase() + str.slice(1);
    
        return str2;
    }
    let resultsDiv = document.querySelector('.results');

    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        // let playerSelection = prompt(`Round ${i+1}, Enter your choice here. `);
        let playerSelection = getPlayerchoice();
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        if (result == 'player') {
            playerScore++;

            resultsDiv.value =  `Round ${i+1}, You Won! ${playerSelectionCapitalize} beats ${computerSelectionCapitalize}.`;

        } else if (result == 'computer') {
            computerScore++;
            resultsDiv.value = `Round ${i+1}, You Lose! ${computerSelectionCapitalize} beats ${playerSelectionCapitalize}.`;
        } else {
            resultsDiv.value = `Round ${i+1}, Draw! Both are equal.`;
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

// let winner = game();

// if (winner == 'Player' || winner == 'Computer') {
//     console.log(`Winner: ${winner}`)
// } else {
//     console.log("Game Drawn! But well played.")
// }


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    let player_selected = button.dataset.selection;
    let computer_selected = getComputerChoice();
    let result = playRound(player_selected, computer_selected);
    console.log(result);
    let result_div = document.createElement('div')
    result_div.textContent = result;
    document.body.appendChild(result_div);
    });
})

