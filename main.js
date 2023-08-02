// Operators List
const operators = ["+", "-", "/", "X", "=", "%"];

function precedence(operator) {
  switch (operator) {
    case "+":
    case "-":
      return 1;

    case "*":
    case "/":
      return 2;

    default:
      return -1;
  }
}

//Convert Infix to PostFix Expression
function InfixToPostFix(expr) {
  let stack = [];
  let result = "";

  for (let i = 0; i < expr.length; i++) {
    let c = expr[i];

    if (
      (c >= "a" && c <= "z") ||
      (c >= "A" && c <= "Z") ||
      (c >= "0" && c <= "9")
    )
      result += c;
    else {
      while (
        !(stack.length == 0) &&
        precedence(expr[i]) <= precedence(stack[stack.length - 1])
      ) {
        result += stack.pop();
      }
      stack.push(c);
    }
  }

  while (!stack.length == 0) {
    result += stack.pop();
  }

  return result;
}

// Evaluate Expression Function
function evaluateExpression(expr) {}

//DOM elements
const numberButtons = Array.from(document.querySelectorAll(".number-btn"));
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const outputTop = document.querySelector(".output-top");
const outputBottom = document.querySelector(".output-bottom");

//Variable to store previous inputs
let prevNum = "";
let numberClicked = false;

//Add eventListeners to numberButtons
numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (operators.includes(prevNum.charAt(prevNum.length - 2)))
      outputBottom.textContent = "";
    const txt = e.target.textContent;
    outputBottom.textContent += txt;
    prevNum += txt;
  });
});

//Add eventListeners to operatorButtons
operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // outputBottom.textContent = evaluateExpression(prevNum);
    const currOperator = e.target.textContent;
    outputTop.textContent += `${outputBottom.textContent} ${currOperator} `;
    prevNum += `${outputBottom.textContent} ${currOperator} `;
  });
});

console.log(InfixToPostFix("a+b*c^d-e^f+g*h-i"));
