playerScore = 0
computerScore = 0

// creates HTML for player and computer score and also 'Make your selection'
const prompts = document.getElementById('prompts');
const div = document.createElement('div');
const div2 = document.createElement('div2');
const div4 = document.createElement('div4')
prompts.append(div4)
prompts.append(div)
prompts.append(div2)

div4.innerHTML = 'Make your selection'

//Updates HTML with Player and Computer Score
function updateScore (){
    div.innerText = 'Player Score: ' + playerScore;
    div2.innerText = 'Computer Score: ' + computerScore;
}

//Computer makes a random choice between rock, paper and scissors
var getComputerChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

let arr = [
    "Rock",
    "Paper",
    "Scissors",
];

// Each click of the button plays a round of Rock, Paper, Scissors
const btn = document.querySelector("#rock")
btn.addEventListener('click', () => {
    playerChoice = "Rock";
    computerChoice = getComputerChoice(arr);
    playRound(playerChoice, computerChoice);
    updateScore()
    winner(playerScore, computerScore)
} ) 

const btn2 = document.querySelector("#paper")
btn2.addEventListener('click', () => {
    playerChoice = "Paper";
    computerChoice = getComputerChoice(arr);
    playRound(playerChoice, computerChoice);
    updateScore()
    winner(playerScore, computerScore)
} ) 

const btn3 = document.querySelector("#scissors")
btn3.addEventListener('click', () => {
    playerChoice = "Scissors";
    computerChoice = getComputerChoice(arr);
    playRound(playerChoice, computerChoice);
    updateScore()
    winner(playerScore, computerScore)
} ) 

 // Logic behind the games//
function playRound(playerChoice, computerChoice) {
    if (playerChoice == "Rock" && computerChoice == "Scissors")
        {playerScore++;    
        div4.innerText = 'You win! ' + playerChoice + ' beats ' + computerChoice;}
    else if (playerChoice == "Rock" && computerChoice == "Paper") 
        {computerScore++;
        div4.innerText =`You lose! ${computerChoice} beats ${playerChoice}`;}
    else if (playerChoice == computerChoice)
        div4.innerText ='You tied! Both players chose ' + computerChoice; 
    else if (playerChoice == "Scissors" && computerChoice == "Paper") 
        {playerScore++;    
        div4.innerText ='You win! ' + playerChoice + ' beats ' + computerChoice}
    else if (playerChoice == "Scissors" && computerChoice == "Rock")
        {computerScore ++;
        div4.innerText ='You lose! ' + computerChoice + ' beats ' + playerChoice}
    else if (playerChoice == "Paper" && computerChoice == "Rock")
        {playerScore ++;
        div4.innerText ='You win! ' + playerChoice + ' beats ' + computerChoice}
    else if (playerChoice == "Paper" && computerChoice == "Scissors")
        {computerScore ++;
        div4.innerText ='You lose! ' + computerChoice + ' beats ' + playerChoice}
}

//keeps track of score and resets at 5
function winner(playerScore, computerScore) {
    if (playerScore == 5) {
        alert ('You win!') + reset();       
    }
    else if (computerScore == 5) {
        alert ('Game Over! You lose!') + reset()
    }
}

//
function reset () {
    playerScore = 0;
    computerScore = 0;
    updateScore()
    div4.innerHTML = 'Make your selection'

}

//CODE FROM NON UI VERSION
// Function to keep the score of the game //
/* function keepScore (playerScore, computerScore) {
    if (playerScore>computerScore)
    return confirm ('Congratulation, you won with ' + playerScore + ' points');
    else if (playerScore<computerScore)
    return confirm ('You lost. The computer was smarter than you');
    else if (playerScore==computerScore)
    return confirm ('You both tied')
    
}
keepScore();  */

//Function to play 5 rounds of rock, paper or scissors before announcing the winner at the end//

/*function game (){
    for (let i = 0; i < 5; i++) {
    playerChoice = ????
    computerChoice = getComputerChoice(arr);
    playRound (playerChoice, computerChoice);
    console.log(computerChoice);
    console.log(playerChoice);
    updateScore()
    keepScore(playerScore, computerScore);
}
}
game(); */