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
const equalButton = document.querySelector(".equal-btn");
const acButton = document.querySelector(".all-clear-btn");
const delButton = document.querySelector(".del-btn");

//Variable to store previous inputs
let prevNum = "";
let numberClicked = false;
let currVal = "";

//Add eventListeners to numberButtons
numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (numberClicked) {
      outputBottom.textContent = "";
      numberClicked = false;
    }
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

equalButton.addEventListener("click", (e) => {
  outputTop.textContent = prevNum;
  prevNum = prevNum.replace("X", "*");
  console.log(prevNum);
  currVal = outputBottom.textContent = evaluateExpression(prevNum);
  numberClicked = true;
});

acButton.addEventListener("click", (e) => {
  outputBottom.textContent = outputTop.textContent = "";
  prevNum = "";
});

delButton.addEventListener("click", (e) => {
  let text = outputBottom.textContent;
  if (text.length > 0) {
    text = text.substring(0, text.length - 1);
  }
  outputBottom.textContent = text;
});
