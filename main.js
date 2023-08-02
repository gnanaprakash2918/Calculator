function evaluateExpression(expr) {}

const operators = ["+", "-", "/", "X", "=", "%"];

const numberButtons = Array.from(document.querySelectorAll(".number-btn"));
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const outputTop = document.querySelector(".output-top");
const outputBottom = document.querySelector(".output-bottom");

const history = "";
let prevNum = "";

numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const txt = e.target.textContent;
    outputBottom.textContent += txt;
    prevNum += txt;
  });
});

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {});
});
