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
      res = 'Tie!';
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
      res = 'You win! Rock beats scissors!';
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
      res = 'You lose! Scissor beats paper!';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
      res = 'You win! Paper beats rock!';
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      res = 'You lose! Rock beats scissors!';
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      res = 'You win! Scissors beats paper!';
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
      res = 'You lose! Paper beats rock!';
  }
  
  return res
  }
  
  function playerPlay() {
  let playerResponse = prompt('Rock, Paper, or Scissors? ');
  playerResponse = playerResponse.toLowerCase();
  return playerResponse;
  }
  
  // console.log(startGame(playerResponse, computerPlay()));
  
  // 6. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
  
  //     1. You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
  
  //     2. At this point you should be using console.log() to display the results of each round and the winner at the end.
  
  //     3. Use prompt() to get input from the user. Read the docs here if you need to.
  
  //     4. Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
  
  function game() {
      yourScore = 0
      cpuScore = 0
    
      for (i = 0; i < 5; i++) {
        round = startGame(playerPlay(), computerPlay());
        console.log(round)
        if (round.includes('You win!') == true) {
          yourScore += 1;
        } else if (round.includes('You lose!') == true) {
          cpuScore += 1;
        } else {
          null
        }
        console.log(`Your score: ${yourScore} \nComputer's score: ${cpuScore}`)
    
      }
      
      let finalScore = () => {
        if (yourScore > cpuScore) {
          console.log(`Congratulations! You prove humanity has a chance.`)
        } else if (yourScore == cpuScore) {
          console.log(`The computer and you are tied in points. Draw game.`)
    
        } else {
          console.log('You lost more games than the computer. Looks like Skynet will be going live sometime soon :(');
        }
      };
    
      finalScore();
      
    }
    
    game();