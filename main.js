// Evaluate Expression Function
function evaluateExpression(expr) {}

// Operators List
const operators = ["+", "-", "/", "X", "=", "%"];

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
    const currOperator = e.target.textContent;
    outputTop.textContent += `${outputBottom.textContent} ${currOperator} `;
    prevNum += `${outputBottom.textContent} ${currOperator} `;
  });
});
