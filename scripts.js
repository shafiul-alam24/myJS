const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";

// Add click event for all buttons except clear and equals
buttons.forEach(button => {
  if (button.id !== "clear" && button.id !== "equals") {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
      
      // Avoid multiple dots in a number
      if (value === "." && currentInput.endsWith(".")) return;

      currentInput += value;
      display.value = currentInput;
    });
  }
});

// Clear button
clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Equals button
equalsBtn.addEventListener("click", () => {
  try {
    // Evaluate the expression safely
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (e) {
    display.value = "Error";
    currentInput = "";
  }
});
