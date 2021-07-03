// let firstNum = +prompt("Enter the first number!");

// const operator = prompt("Please, choose what do you want to calculate");

// let secondNumber = +prompt("Enter the second number");

// let result;

function enterYourValue(value){
  let answer = +prompt(value);
  return answer;
}

function enterYourTask(value){
  let answer = prompt(value);
  return answer;
}

let firstNum = enterYourValue("Enter the first number!");
const operator = enterYourTask("Please, choose what do you want to calculate");
let secondNumber = enterYourValue("Enter the second number");


switch (operator) {

  case "+" :
  case "add":
    result = firstNum + secondNumber;
    break;
  case "-" :
  case "sub":
    result = firstNum - secondNumber;
    break;
  case "*" :
  case "mult":
    result = firstNum * secondNumber;
    break;
  case "/":
  case "div":
    result = firstNum / secondNumber;
    break
  case "%":
  case "mod":
    result = firstNum % secondNumber;
    break
  };



const answer = `Result of operation ${firstNum} ${operator} ${secondNumber} = ${result}`;
alert(answer);

