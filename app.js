const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("invalid input");
  }
};

const getComputerInput = () => {
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
