
function getComputerChoice(){
  const CHOICES = ['Rock', 'Paper', 'Scissors']
  const randIndex = Math.floor(Math.random() * CHOICES.length);

  return CHOICES[randIndex];
};
