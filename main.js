function evaluateExpression(expr) {}

const operators = ["+", "-", "/", "X", "=", "%"];

const buttons = Array.from(document.querySelectorAll(".number-btn,.operator"));
const outputTop = document.querySelector(".output-top");
const outputBottom = document.querySelector(".output-bottom");

const history = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const txt = e.target.textContent;
    if (operators.includes(txt)) {
      outputTop.textContent += `${outputBottom.textContent} ${txt} `;
    } else {
      outputBottom.textContent += txt;
    }
  });
});
