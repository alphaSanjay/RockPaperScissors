let myArray = ['Rock','Paper','Scissors'];
let computerPoints = 0;
let playerPoints = 0;

function getComputerChoice(){
    let value = Math.floor(Math.random()*3);
    return value;
}


const btn = document.querySelector('#rock');
btn.addEventListener('click', function(e){
    let result = playRound(getComputerChoice(), 0);        
    displayResult(result);
});

const btn1 = document.querySelector('#paper');   
btn1.addEventListener('click', function(e){
    let result = playRound(getComputerChoice(), 1);
    displayResult(result);
});

const btn2 = document.querySelector('#scissors');
btn2.addEventListener('click', function(e){
    let result = playRound(getComputerChoice(), 2);
    displayResult(result);
});


function displayResult(result){
    const container = document.querySelector('#container');
    const content = document.querySelector('p');
    content.textContent = result;

    const computer = document.querySelector('#computer');
    computer.textContent = computerPoints;

    const player = document.querySelector('#player');
    player.textContent = playerPoints;


    if(playerPoints == 5 ){
        const container = document.querySelector('#container');
        const winner = document.createElement('p');
        winner.textContent = 'The Winner is Player';
        container.appendChild(winner);
    }
    else if(computerPoints == 5){
        const container = document.querySelector('#container');
        const winner = document.createElement('p');
        winner.textContent = 'The Winner is Computer';
        container.appendChild(winner);
    }
}

function playRound(computerSelection, playerSelection){
    let a = playerSelection - computerSelection;

    if(a == 2){
        computerPoints++;
        return(`Lose! ${myArray[computerSelection]} beats ${myArray[playerSelection]}`);
    } 
    else if (a > 0 || a == -2){
        playerPoints++;
        return(`Win! ${myArray[playerSelection]} beats ${myArray[computerSelection]}`);
    }
    else if (a == 0) {
        return('Draw');
    }
    else{
        computerPoints++;
        return(`Lose! ${myArray[computerSelection]} beats ${myArray[playerSelection]}`);
    }
} 