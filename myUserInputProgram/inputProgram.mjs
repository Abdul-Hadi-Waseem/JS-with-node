//Installing prompt sync library from npm to take user input bcz prompt is available on browser environment and not on node environment
import PromptSync from "prompt-sync";
const input=PromptSync();

let userName=input("What is your name? " );
console.log(userName);
let number=input("Enter Number: ");
console.log("Num +1 = " + (Number(number)+1) );