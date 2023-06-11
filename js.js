const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  if (randomNumber === 1 || randomNumber === 4 || randomNumber === 7) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2 || randomNumber === 5 || randomNumber === 8) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3 || randomNumber === 6 || randomNumber === 9) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw';
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'You Win!';
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'You Lost!!';
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'You Win!';
  }
  if (userChoice === ' paper' && userChoice === 'rock') {
    result = 'You win!!';
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'You lost!!';
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'You Win!';
  }
  resultDisplay.innerHTML = result;
}
