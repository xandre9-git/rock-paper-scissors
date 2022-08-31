function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const body = document.querySelector("body");
const h1Body = document.createElement("h1");
const container = document.querySelector("#container");

container.style.cssText = "text-align: center;";

h1Body.style.textAlign = "center";
h1Body.textContent = `Rock, Paper, Scissors Game`;
body.insertBefore(h1Body, container);

const header = document.createElement("p");
header.style.textAlign = "center";
header.textContent = "Select a button below to make your choice of move against the computer. Best of five wins.";
body.insertBefore(header, container);

const endResults = document.querySelector("#results");

const roundResult = document.createElement("p");
roundResult.style.textAlign = "center";

const displayResult = document.createElement("div");
displayResult.style.textAlign = "center";

const finalResult = document.createElement("p");
finalResult.style.textAlign = "center";

const choiceSelection = document.createElement("p");
choiceSelection.style.textAlign = "center";

function computerPlay() {
  // function will either return rock paper or scissors

  /// create random selector for 0 -2
  let randomSelection = parseInt(Math.random() * 3);

  if (randomSelection == 0) {
    result = "rock";
  } else if (randomSelection == 1) {
    result = "paper";
  } else {
    result = "scissors";
  }
  // return its result
  return result;
}

function startGame(playerSelection, computerSelection) {
  console.log(`Your choice: ${capitalizeFirstLetter(playerSelection)}`);
  console.log(`Computer's choice: ${capitalizeFirstLetter(computerSelection)}`);
  choiceSelection.textContent = `Your Choice: ${capitalizeFirstLetter(playerSelection)} | Computer's Choice: ${capitalizeFirstLetter(computerSelection)}`;
  container.appendChild(choiceSelection);

  if (playerSelection == computerSelection) {
    roundResult.textContent = "Tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    roundResult.textContent = "You win! Rock beats scissors!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    roundResult.textContent = "You lose! Scissors beats paper!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    roundResult.textContent = "You win! Paper beats rock!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    roundResult.textContent = "You lose! Rock beats scissors!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    roundResult.textContent = "You win! Scissors beats paper!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    roundResult.textContent = "You lose! Paper beats rock!";
  }

  endResults.appendChild(roundResult);
  return (res = roundResult.textContent);
}

yourScore = 0;
cpuScore = 0;
roundNum = 0;

function game(player) {
  if (roundNum <= 1) {
    finalResult.textContent = '';
  }
  for (i = 0; i < 1; i++) {
    round = startGame(player, computerPlay());
    console.log(round);
    roundNum += 1;
    if (round.includes("You win!")) {
      yourScore += 1;
    } else if (round.includes("You lose!")) {
      cpuScore += 1;
    } else {
      null;
    }
    console.log(`Your Score: ${yourScore} \nComputer's Score: ${cpuScore}`);
    displayResult.textContent = `Your Score: ${yourScore} | \nComputer's Score: ${cpuScore} | Round: ${roundNum}`;
    endResults.appendChild(displayResult);

  }

  let finalScore = () => {
    if (roundNum == 5) {
      if (yourScore > cpuScore) {
        console.log(`Congratulations! You prove humanity has a chance.`);
        finalResult.textContent =
          "Congratulations! You prove humanity has a chance.";
        endResults.appendChild(finalResult);
      } else if (yourScore == cpuScore) {
        console.log(`The computer and you are tied in points. Draw game.`);
        finalResult.textContent =
          "The computer and you are tied in points. Draw game.";
        endResults.appendChild(finalResult);
      } else {
        finalResult.textContent =
          "You lost more games than the computer. Looks like Skynet will be going live sometime soon :(";
        endResults.appendChild(finalResult);

        console.log(
          "You lost more games than the computer. Looks like Skynet will be going live sometime soon :("
        );
      }
      roundNum = 0;
      yourScore = 0;
      cpuScore = 0;
    }
  };

  finalScore();
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    game(e.target.id);
  });
});
