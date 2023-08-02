// Operators List
const operators = ["+", "-", "/", "X", "=", "%"];

function evaluateExpression(expr) {
  return eval(expr);
}

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
    const txt = e.target.textContent;
    outputBottom.textContent += txt;
    prevNum += txt;
  });
});

//Add eventListeners to operatorButtons
operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currOperator = e.target.textContent;
    outputBottom.textContent += ` ${currOperator} `;
    prevNum += ` ${currOperator} `;
  });
});
