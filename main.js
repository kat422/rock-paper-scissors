"use strict";

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
  const randomChoice = getRndInteger(1, 3);

  switch (randomChoice) {
    case 1:
      return rock;

    case 2:
      return paper;

    case 3:
      return scissors;

    default:
      console.log("ERROR");
  }
}

function compareHands(player, computer) {
  const win = `You win! ${player} beats ${computer}.`;
  const lose = `You lose! ${computer} beats ${player}.`;
  const tie = `It's a tie! ${player} equals ${computer}.`;

  if (player === rock && computer === rock) {
    return tie;
  } else if (player === rock && computer === scissors) {
    return win;
  } else if (player === rock && computer === paper) {
    return lose;
  } else if (player === paper && computer === paper) {
    return tie;
  } else if (player === paper && computer === rock) {
    return win;
  } else if (player === paper && computer === scissors) {
    return lose;
  } else if (player === scissors && computer === scissors) {
    return tie;
  } else if (player === scissors && computer === paper) {
    return win;
  } else if (player === scissors && computer === rock) {
    return lose;
  }
}

function playerPlay() {
  const choice = prompt("Choose your hand!");
  return choice.toLowerCase();
}

function playOneRound() {
  const computerHand = computerPlay();
  const playerHand = playerPlay();

  return compareHands(playerHand, computerHand);
}

function fiveRoundsGame() {
  let playerScore = 0;
  let computerScore = 0;
  let count = 0;

  while (count < 5) {
    const round = playOneRound();
    console.log(round);
    if (round.includes("win")) {
      playerScore++;
      count++;
    } else if (round.includes("lose")) {
      computerScore++;
      count++;
    } else if (round.includes("tie")) {
      count++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You won! ${playerScore} vs. ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lost! ${playerScore} vs. ${computerScore}`);
  } else {
    console.log(`Tie! ${playerScore} vs. ${computerScore}`);
  }
}

fiveRoundsGame();
