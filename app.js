const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("invalid user input");
  }
};

const getComputerChoice = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "paper";
      break;

    case 1:
      return "rock";
      break;

    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "you win";
  }

  if (userChoice === computerChoice) {
    return "draw";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "you lose";
    } else if (computerChoice === "scissors") {
      return "you win";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "you lose";
    } else if (computerChoice === "rock") {
      return "you win";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "you lose";
    } else if (computerChoice === "paper") {
      return "you win";
    }
  }
};

const playGame = userInput => {
  userChoice = getUserChoice(userInput);
  computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
};

playGame("scissors");
