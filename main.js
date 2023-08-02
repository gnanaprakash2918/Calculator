// Operators List
const operators = ["+", "-", "/", "X", "=", "%"];

//Convert Infix to PostFix Expression
function InfixToPostFix(expr) {}

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
