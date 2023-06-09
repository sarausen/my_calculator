const screen = document.getElementById("screen-output");
const buttons = document.querySelectorAll("button");
const equalsButton = document.getElementById("equals");
const deleteButton = document.getElementById("delete");
const clearButton = document.getElementById("clear");

let calculation = [];
let result;

function calculate(button) {
  const value = button.textContent;

  if (value === "AC") {
    calculation = [];
    screen.textContent = ".";
  } else if (value === "=") {
    screen.textContent = eval(result);
  } else {
    calculation.push(value);
    result = calculation.join("");
    screen.textContent = result;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button);
    updateScreen();
  });
});



