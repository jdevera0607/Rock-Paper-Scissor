const choice = ["rock", "paper", "scissor"];

function getComputerChoice(){
 
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}    
playRound();

function playRound(){
    const computerSelection = getComputerChoice();
    const playerSelection = getHumanChoice();
    checkWinner(computerSelection, playerSelection);
}

function checkWinner(computerSelection, playerSelection){
    let result = "";
   if (playerSelection == computerSelection){
       
        result = "draw";
        playerScore(result);
    }
    else if(playerSelection == "rock" && computerSelection == "scissor" ||
        playerSelection == "scissor" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock"){

        result = "player";
        playerScore(result);
    } 
    else{

        result = "computer";
        playerScore(result);
    }
    
}

function getHumanChoice(){
    let playerInput = prompt("Rock, Paper or Scissor?");
    playerInput = playerInput.toLowerCase();
    return playerInput;
}

function playerScore(result){
    let humanScore = 0;
    let computerScore = 0;
    if(result == "player"){
        console.log(result);
    }
    
}



