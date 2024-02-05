/* 

*/

let pChoice;
let cChoice;

function getPlayerChoice () {
    pChoice = prompt('Choose rock, paper, or scissors').toLowerCase();
};

function getComputerChoice () {
    let num = Math.random();
    if (num < 0.33) {
        cChoice = 'rock';
    } else if (num > 0.66) {
        cChoice = 'paper';
    } else {
        cChoice = 'scissors'
    };
    return cChoice;
}

function playRound (pChoice) {
    let cChoice = getComputerChoice();
    console.log(`Player: ${pChoice}. Comp: ${cChoice}`);
    if (pChoice === cChoice) {
        return 'tie';
    } else if (pChoice === 'rock') {
        if (cChoice === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (pChoice === 'paper') {
        if (cChoice === 'rock') {
            return 'player';
        } else {
            return 'computer';
        }
    } else if (pChoice === 'scissors') {
        if (cChoice === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    } else {
        return 'error';
    }
}

getPlayerChoice();


function playGame (pChoice, cChoice) {
    let winCount = 0;
    let roundResult;
    for (let i = 1; i < 6 ; i++) {
        roundResult = playRound(pChoice, cChoice);
        if (roundResult === 'player') {
            console.log('Player Wins the round');
            winCount++;
        }
        if (roundResult === 'computer') {
            console.log('Computer wins the round');
            winCount--;
        }
        if (roundResult === 'tie') {
            console.log('Tie round');
        }
    } 

    if (winCount > 0) {
        console.log('Player Wins the game!');
    }
    if (winCount < 0) {
        console.log('Computer Wins the Game!');
    }
    if (winCount === 0) {
        console.log('Tie Game');
    }
}

playGame(pChoice, cChoice);

