
function getComputerChoice(){
  const CHOICES = ['Rock', 'Paper', 'Scissors']
  const randIndex = Math.floor(Math.random() * CHOICES.length);

  return CHOICES[randIndex];
};

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase()
  let computer = computerSelection.toLowerCase()
  let result = ""
  
  if (player == "rock" && computer == "paper"){
    result = "You Lose! Paper beats Rock.";

  } else if (player == "rock" && computer == "scissors"){
    result = "You Win! Rock beats scissors.";

  } else if (player == computer){
    result = "You tied!";

  } else if (player == "paper" && computer == "rock"){
    result = "You Win! Paper beats rock."

  } else if (player == "paper" && computer == "scissors"){
    result = "You Lose! Scissors beats paper."

  } else if (player == "scissors" && computer == "rock"){
    result = "You Lose! Rock beats scissors."

  } else if (player == "scissors" && computer == "paper"){
    result = "You Win! Scissors beats paper."
  }

  return result;
};
