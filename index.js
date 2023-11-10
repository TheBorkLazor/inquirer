import inquirer from "inquirer";
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]; //choices tha are avaliable
  const randomIndex = Math.floor(Math.random() * choices.length); // random number to fit the lenght of the choices array
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Its a tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function playGame() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userChoice",
        message: "Your move",
        choices: ["rock", "paper", "scissor"],
      },
    ])
    .then((answers) => {
      const userChoice = answers.userChoice;
      const computerChoice = getComputerChoice();
      console.log(`Computer chose: ${computerChoice}`);
      console.log(determineWinner(userChoice, computerChoice));
    });
}
playGame();
// inquirer
//   .prompt([
//     // {
//     //   type: "input",
//     //   name: "input type",
//     //   message: "What is your name",
//     //   default: "Iron Man",
//     // },
//     // {
//     //   type: "checkbox",
//     //   name: "checkbox question",
//     //   message: "How many programming language do you speak?",
//     //   choices: ["Javascript", "C++", "Java", "Python"],
//     //   default: "Javascript",
//     // },
//     // {
//     //   type: "list",
//     //   name: "list_question",
//     //   message: "What programming language do you like?",
//     //   choices: ["Javascript", "C++", "Java", "Python"],
//     //   default: "Javascript",
//     // },
//   ])

// .then((answers) => {
//   // Use user feedback for... whatever!!
//   console.log(answers);
// });
