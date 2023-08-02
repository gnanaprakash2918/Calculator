const operators = "+/*-=";

const buttons = Array.from(document.querySelectorAll(".input-btn"));
const output = document.querySelector(".output-bottom");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const txt = e.target.textContent;
    output.textContent += operators.find(txt) != -1 ? txt : ` ${txt} `;
  });
});
