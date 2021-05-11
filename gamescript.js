// 3. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

// create function called computerPlay
// function's purpose is to make computer play

function computerPlay(){
// function will either return rock paper or scissors

/// create random selector for 0 -2
    let randomSelection = parseInt(Math.random()*3)
    
    if (randomSelection == 0) {
        result = 'rock';
    } else if (randomSelection == 1) {
        result = 'paper';
    } else {
        result = 'scissors';
    }
// return its result
    return result;
}

// 4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

//     1. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).




function startGame(playerSelection, computerSelection) {
    console.log(`Your choice: ${playerSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);

    if (playerSelection == computerSelection) {
        res = 'Tie!');
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
       res = 'You win. Rock beats scissors!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
       res = 'You lose. Scissor beats paper!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
       res = 'You win. Paper beats rock!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
       res = 'You lose. Rock beats scissors!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
       res = 'You win. Scissors beats paper!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
       res = 'You lose. Paper beats rock!';
    }
    return res
}

let playerResponse = prompt('Rock, Paper, or Scissors? ');
playerResponse = playerResponse.toLowerCase();


startGame(playerResponse, computerPlay());
