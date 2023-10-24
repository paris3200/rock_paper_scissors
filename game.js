
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

function increment_counter(winner){
  const counter = document.getElementById(winner + 'Counter');
  let currentCount = parseInt(counter.textContent);
  counter.textContent = ++currentCount;

  if (currentCount == 5){
    gameOver(winner)
  }
}

function gameOver(winner){
  h1 = document.getElementById('winner');
  if (winner == "computer"){
    h1.textContent = "Game over! The computer won."
  }else{
    h1.textContent = "Game over! You win!"
  }

  const playerCounter = document.getElementById('playerCounter');
  playerCounter.textContent = 0;

  const computerCounter = document.getElementById('computerCounter');
  computerCounter.textContent = 0;
}

function game() {
  let computerSelection = getComputerChoice()
  let playerSelection = ""
  let result = ""

  const resultParagraph = document.getElementById('result');
  const rock = document.getElementById('rock');
  const paper = document.getElementById('paper');
  const scissors = document.getElementById('scissors');

  rock.addEventListener('click', () => {
    playerSelection = "rock";
    result = playRound(playerSelection, computerSelection);
    if (result.includes("Win")){
      increment_counter("player")
    }else if (result.includes("Lose")){
      increment_counter("computer")
    }

    resultParagraph.textContent = result
  })

  paper.addEventListener('click', () => {
    playerSelection = "paper";
    result = playRound(playerSelection, computerSelection);
    if (result.includes("Win")){
      increment_counter("player")
    }else if (result.includes("Lose")){
      increment_counter("computer")
    }
    resultParagraph.textContent = result
  })

  scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    result = playRound(playerSelection, computerSelection);
    if (result.includes("Win")){
      increment_counter("player")
    }else if (result.includes("Lose")){
      increment_counter("computer")
    }
    resultParagraph.textContent = result
  })
}

game()
