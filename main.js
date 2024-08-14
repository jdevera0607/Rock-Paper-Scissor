choice = ['rock', 'paper', 'scissor'];

function getComputerChoice(){
    computerChoice = choice[Math.floor(Math.random()*choice.length)];
    return computerChoice;
}
function getPlayerChoice(input){
  const inputButton = input;
  checkWinner(inputButton);
}
function checkWinner(inputButton){
const playerSelection = inputButton;
const computerSelection = getComputerChoice();

  if(playerSelection == computerSelection){
    alert('draw');
  }
  else if(playerSelection == "rock" && computerSelection == "scissor" ||
    playerSelection == "scissor" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock"){

    alert('player wins!',playerSelection,' beats',computerSelection);
} 
else{

    alert('computer wins!',computerSelection,' beats',playerSelection);
}
}