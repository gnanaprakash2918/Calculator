const operators = ["+", "-", "/", "X", "=", "%"];

const buttons = Array.from(document.querySelectorAll(".input-btn"));
const output = document.querySelector(".output-bottom");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const txt = e.target.textContent;
    console.log(operators.includes(txt));
    output.textContent += operators.includes(txt) ? ` ${txt} ` : txt;
  });
});
