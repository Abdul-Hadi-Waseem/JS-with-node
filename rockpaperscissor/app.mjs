import PromptSync from "prompt-sync";
import randomInteger from "random-int";
let input = PromptSync();
let choices = ["Rock", "Paper", "Scissor"];
let userChoice = input("Please Enter 0 For Rock, 1 For Paper, 2 For Scissors: \t");
if (userChoice <= 2) {
  let computerChoice = randomInteger(0, 2);
  console.log(computerChoice);
  console.log(userChoice);
  if (userChoice == computerChoice) {
    console.log(
      `Game Draw \nYour Choose ${choices[userChoice]} \nComputer Choose ${choices[computerChoice]}`
    );
  } else if (
    (userChoice == 0 && computerChoice == 2) ||
    (userChoice == 1 && computerChoice == 1) ||
    (userChoice == 2 && computerChoice == 1) ||
    (userChoice == 1 && computerChoice == 0) 
    
  ) {
    console.log(
      `User Wins \nYour Choose ${choices[userChoice]} \nComputer Choose ${choices[computerChoice]}`
    );
  } else {
    console.log(
      `Computer Wins  \nYour Choose ${choices[userChoice]} \nComputer Choose ${choices[computerChoice]}`
    );
  }
}else{
    console.log("Invalid Input");
}
