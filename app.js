const inputs = document.querySelectorAll(".input");

inputs[0].focus();
inputs.forEach((input, indx) => {
  input.addEventListener("keydown", (e) => {
    inputs[indx].value = "";
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => inputs[indx + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => inputs[indx - 1].focus(), 10);
    }
  });
});
