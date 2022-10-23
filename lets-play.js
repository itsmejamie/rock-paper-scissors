console.log ("Hello World!")

playerScore = 0
computerScore = 0

//Computer makes a random choice between rock, paper and scissors//
var getComputerChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

let arr = [
    "Rock",
    "Paper",
    "Scissors",
];

// Logic behind the games and includes a score counter //
function playRound(playerChoice, computerChoice) {
    if (playerChoice == "Rock" && computerChoice == "Scissors")
        return confirm('You win! ' + playerChoice + ' beats ' + computerChoice) +
        playerScore ++;
    else if (playerChoice == "Rock" && computerChoice == "Paper") 
        return confirm('You lose! ' + computerChoice + ' beats ' + playerChoice) +
        computerScore++;
    else if (playerChoice == computerChoice)
        return confirm('You tied! Both players chose ' + computerChoice) 
    else if (playerChoice == "Scissors" && computerChoice == "Paper") 
        return confirm('You win! ' + playerChoice + ' beats ' + computerChoice) +
        playerScore ++;
    else if (playerChoice == "Scissors" && computerChoice == "Rock")
        return confirm('You lose! ' + computerChoice + ' beats ' + playerChoice) +
        computerScore ++;
    else if (playerChoice == "Paper" && computerChoice == "Rock")
        return confirm('You win! ' + playerChoice + ' beats ' + computerChoice) +
        playerScore ++;
     else if (playerChoice == "Paper" && computerChoice == "Scissors")
        return confirm('You lose! ' + computerChoice + ' beats ' + playerChoice) +
        computerScore ++;
     
}

// Function to keep the score of the game //
function keepScore (playerScore, computerScore) {
    if (playerScore>computerScore)
    return confirm ('Congratulation, you won with ' + playerScore + ' points');
    else if (playerScore<computerScore)
    return confirm ('You lost. The computer was smarter than you');
    else if (playerScore==computerScore)
    return confirm ('You both tied')
}
keepScore();


//Function to play 5 rounds of rock, paper or scissors before announcing the winner at the end
function game (){
    for (let i = 0; i < 5; i++) {
    playerChoice = prompt ("Rock, paper or scissors?");
    computerChoice = getComputerChoice(arr);
    playRound (playerChoice, computerChoice);
    console.log(computerChoice);
    console.log(playerChoice);
    console.log (playerScore, computerScore);}
    keepScore(playerScore, computerScore);
}
game();

