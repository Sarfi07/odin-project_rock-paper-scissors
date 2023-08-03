function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function gameOver(buttons, playerScore, computerScore) {
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');
    const movesLeft = document.querySelector('.movesLeft');

    movesLeft.style.display = 'none';
    if (playerScore > computerScore) {
        result.textContent = 'Player Wins!';
        console.log('Player wins!');
        result.style.color = 'green'
        result.style.fontSize = "32px";
        result.style.fontWeight = 'Bolder'
    }
    else if (playerScore < computerScore) {
        result.textContent = "Computer Wins!";
        console.log('Computer wins!');
        result.style.color = 'red'
        result.style.fontSize = "32px";
        result.style.fontWeight = 'Bolder'
    }
    else {
        result.textContent = 'Tie!';
        console.log('Tie!');
        result.style.color = 'grey';
        result.style.fontSize = "32px";
        result.style.fontWeight = 'Bolder'
    }

    buttons.forEach(button => {
        button.style.display = 'none';
    })
    reloadBtn.style.display = 'block';
    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    })
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

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
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    
    const buttons = document.querySelectorAll('button');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    const result = document.querySelector('.result');
    const movesLeft = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const info = document.querySelector('.info');
            info.style.display = 'flex'
            console.log(moves);
            moves++;
            const moveLeft = document.querySelector('.movesLeft');
            moveLeft.textContent = `Moves Left: ${5 - moves}`
            const playerSelection = button.dataset.selection;
            const computerSelection = getComputerChoice();
            
            const winner = playRound(playerSelection, computerSelection);
            
            if (winner == 'player') {
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                result.textContent = 'You win!';
                result.style.color = 'green';
            }
            else if (winner == 'computer') {
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                result.textContent = 'You lose!';
                result.style.color = 'red'
            }
            else {
                result.textContent = "It's a tie!";
                result.style.color = 'grey';
            }
            if (moves === 5) {
                gameOver(buttons, playerScore, computerScore)
            }
        })
    })
}

game();